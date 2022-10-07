const SHORTEST_SEGMENT_IN_SEC = 900; // 15 min

/**
 * @param {SegmentInfo[]} segments
 * @returns {SegmentInfo[]}}
 */
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

/**
 * For each missing segment (current segment start different that previous segment end)
 * complete the data with the average power of the previous and next segment
 * @param {SegmentInfo[]} segments
 * @returns {SegmentInfo[]}}
 */
export function fillMissingSegments(segments) {
  return segments.reduce((completeSegments, segment, index) => {
    if (segments[index - 1] && segments[index - 1].end !== segment.start) {
      completeSegments.push({
        start: segments[index - 1].end,
        end: segment.start,
        power: (segments[index - 1].power + segment.power) / 2,
      });
    }
    completeSegments.push(segment);
    return completeSegments;
  }, []);
}

/**
 * @typedef {import("../api").SegmentInfo} SegmentInfo
 */
