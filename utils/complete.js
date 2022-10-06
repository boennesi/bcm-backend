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

export function fillMissingSegments(segments) {
  /**
   * TODO
   * I don't know if i will have the time to finish the exercice
   * So for now i will leave this special case aside and come back for it later
   */
}
