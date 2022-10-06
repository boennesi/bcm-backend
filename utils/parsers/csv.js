const NEW_LINE = "\n";
const SEPARATOR = ",";

export function fromCSV(rawData, { start, end, power }) {
  const [header, ...centralsRawSegments] = rawData.split(NEW_LINE);
  const columnNames = header.split(SEPARATOR);
  // columns may be in wrong order, not always start/end/power
  const iStart = columnNames.indexOf(start);
  const iend = columnNames.indexOf(end);
  const iPower = columnNames.indexOf(power);
  return centralsRawSegments.map((row) => {
    const rawSegment = row.split(SEPARATOR);
    return {
      start: Number.parseInt(rawSegment[iStart], 10),
      end: Number.parseInt(rawSegment[iend], 10),
      power: Number.parseInt(rawSegment[iPower], 10),
    };
  });
}

export function toCSV(productionSegments) {
  return [
    "start,end,power",
    ...productionSegments.map(
      ({ start, end, power }) => `${start},${end},${power}`
    ),
  ].join(NEW_LINE);
}
