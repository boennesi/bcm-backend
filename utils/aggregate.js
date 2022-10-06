export function aggregateCentralsSegmentsProduction(productionSegments) {
  return productionSegments
    .reduce((powerBySegment, segment) => {
      const segmentKey = `${segment.start}-${segment.end}`;
      const { power } = powerBySegment.get(segmentKey) || { power: 0 };
      return powerBySegment.set(segmentKey, {
        ...segment,
        power: segment.power + power,
      });
    }, new Map())
    .values();
}
