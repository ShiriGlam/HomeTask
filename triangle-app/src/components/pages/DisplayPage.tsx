import React from 'react';
import { useLocation } from 'react-router-dom';
import { TriangleCanvas } from '../Triangle';
import { Point } from '../types/Point';

export const DisplayPage: React.FC = () => {
  const location = useLocation();
  const points: Point[] = location.state?.points || [];

  return (
    <div>
      <TriangleCanvas points={points} />
    </div>
  );
};