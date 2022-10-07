/**
 * For each segment with same start and end
 * Sum the power in one segment
 * @param {SegmentInfo[]} productionSegments
 * @returns {SegmentInfo[]}}
 */
export function aggregateCentralsSegmentsProduction(productionSegments) {
  return Array.from(
    productionSegments
      .reduce((powerBySegment, segment) => {
        const segmentKey = `${segment.start}-${segment.end}`;
        const { power } = powerBySegment.get(segmentKey) || { power: 0 };
        return powerBySegment.set(segmentKey, {
          ...segment,
          power: segment.power + power,
        });
      }, new Map())
      .values()
  );
}

/**
 * @typedef {import("../api").SegmentInfo} SegmentInfo
 */
