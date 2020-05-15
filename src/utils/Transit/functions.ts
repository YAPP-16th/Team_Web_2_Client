import { getTransits, Transit } from '../../api/transits'

export const getMinTransitItem = (transits: Transit[]) => {
  const minTimeTransitItem = transits.reduce((a, x) => a.time > x.time ? a : x);
  return minTimeTransitItem;
}