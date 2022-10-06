export function fromJSON(rawData, { start, end, power }) {
  const centralsRawSegments = JSON.parse(rawData);
  return centralsRawSegments.map((rawSegment) => {
    return {
      start: rawSegment[start],
      end: rawSegment[end],
      power: rawSegment[power],
    };
  });
}
