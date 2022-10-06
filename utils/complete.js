const SHORTEST_SEGMENT_IN_SEC = 900; // 15 min

export function completeCentralSegments(segments, period) {
  if (period === SHORTEST_SEGMENT_IN_SEC) return segments;
  return segments.reduce((completeSegments, segment) => {
    let start = segment.start;
    while (start < segment.end) {
      completeSegments.push({
        start,
        end: start + SHORTEST_SEGMENT_IN_SEC,
        power: segment.power,
      });
      start += SHORTEST_SEGMENT_IN_SEC;
    }
    return completeSegments;
  }, []);
}
