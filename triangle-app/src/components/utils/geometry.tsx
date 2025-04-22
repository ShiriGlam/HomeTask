import { Point } from '../types/Point';

export function calculateAngle(a: Point, b: Point, c: Point): number {
  const ab = Math.hypot(b.x - a.x, b.y - a.y);
  const bc = Math.hypot(c.x - b.x, c.y - b.y);
  const ca = Math.hypot(a.x - c.x, a.y - c.y);

  const angleA = Math.acos((ab ** 2 + ca ** 2 - bc ** 2) / (2 * ab * ca));
  return (angleA * 180) / Math.PI;
}