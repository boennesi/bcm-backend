/**
 * Parse command line arguments returning an object of key/value
 * @param {*} argv
 * @returns {Object}
 */
export default function parseCliArguments(argv) {
  const [, , ...args] = argv;
  return args.reduce((params, next) => {
    const [key, value] = next.split("=");
    return {
      ...params,
      [key.toLowerCase()]: value,
    };
  }, {});
}
