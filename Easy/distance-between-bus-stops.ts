// https://leetcode.com/problems/distance-between-bus-stops/

function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  let forwardDistance = 0;
  let backwardDistance = 0;

  let forward = start;
  let backward = destination;

  while (forward !== destination) {
    forwardDistance += distance[forward];
    forward = (forward + 1) % distance.length;
  }
  while (backward !== start) {
    backwardDistance += distance[backward];
    backward = (backward + 1) % distance.length;
  }

  return forwardDistance < backwardDistance
    ? forwardDistance
    : backwardDistance;
}
