import React, { useMemo } from 'react';
import { Point } from './types/Point';
import { calculateAngle } from './utils/geometry';
import './Triangle.css';

interface Props {
  points: Point[]
}

export const TriangleCanvas: React.FC<Props> = ({ points }) => {
  if (points.length !== 3) return null

  const angles = [
    calculateAngle(points[0], points[1], points[2]),
    calculateAngle(points[1], points[2], points[0]),
    calculateAngle(points[2], points[0], points[1]),
  ];

  return (
    <div className="wrapper">

    <svg width={300} height={300} className="triangle-svg">
      <polygon
        points={points.map(p => `${p.x},${p.y}`).join(' ')}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {points.map((p, i) => {
        const r = 15;
        const a = points[i];
        const b = points[(i + 1) % 3];
        const c = points[(i + 2) % 3];

        const angle1 = Math.atan2(b.y - a.y, b.x - a.x);
        const angle2 = Math.atan2(c.y - a.y, c.x - a.x);
        const start = angle1;
        const end = angle2;
        const arcPath = describeArc(a.x, a.y, r, start, end);
        return <path key={`arc-${i}`} d={arcPath} stroke="blue" fill="none" strokeWidth="1.5" />;
      })}

{points.map((p, i) => {
  const a = points[i];
  const b = points[(i + 1)% 3];
  const c = points[(i + 2)% 3]

  const x = (a.x *0.5 +b.x * 0.25 +c.x * 0.25)
  const y = (a.y * 0.5 + b.y *0.25 + c.y *0.25);

  return (
    <text
      key={i}
      x={x}
      y={y}
      fontSize="12"
      fill="black"
      textAnchor="middle"
    >
      {angles[i].toFixed(1)}°
    </text>
  );
})}

    </svg>
    </div>
  );
};

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const startX = cx + r * Math.cos(startAngle);
  const startY = cy + r * Math.sin(startAngle);
  const endX = cx + r * Math.cos(endAngle);
  const endY = cy + r * Math.sin(endAngle);
  const largeArcFlag = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;

  return `M ${startX} ${startY} A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
}