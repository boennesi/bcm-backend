export function fromCSV(rawData, { start, end, power }) {
  const [header, ...centralsRawSegments] = rawData.split("\n");
  const columnNames = header.split(",");
  console.log(columnNames);
  // columns may be in wrong order, not always start/end/power
  const iStart = columnNames.indexOf(start);
  const iend = columnNames.indexOf(end);
  const iPower = columnNames.indexOf(power);
  return centralsRawSegments.map((row) => {
    const rawSegment = row.split(",");
    return {
      start: Number.parseInt(rawSegment[iStart], 10),
      end: Number.parseInt(rawSegment[iend], 10),
      power: Number.parseInt(rawSegment[iPower], 10),
    };
  });
}
