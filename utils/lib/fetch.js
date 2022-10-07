import https from "node:https";

/**
 * Promisify basic fetch which handles only "https" request
 * @param {string} url
 * @returns {Promise}
 */
export default async function (url) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`Status Code: ${res.statusCode}`));
      }

      const data = [];

      res.on("data", (chunk) => {
        data.push(chunk);
      });

      res.on("end", () => resolve(Buffer.concat(data).toString()));
    });

    req.on("error", reject);
    req.end();
  });
}
