import React from 'react';
import { Point } from '../types/Point';
import './InputForm.css';

interface Props {
  points: Point[];
  onChange: (index: number, key: keyof Point, value: number) => void;
  onSubmit: () => void;
}

export const InputForm: React.FC<Props> = ({ points, onChange, onSubmit }) => {
  return (
    <div className="form-input">
      <h2>הזן שלוש נקודות</h2>
      {points.map((point, i) => (
        <div key={i} className="input-row">
          <input
            type="number"
            value={point.x}
            onChange={(e) => onChange(i, 'x', +e.target.value)}
          />
          <input
            type="number"
            value={point.y}
            onChange={(e) => onChange(i, 'y', +e.target.value)}
          />
        </div>
      ))}
      <button onClick={onSubmit}>הצג משולש</button>
    </div>
  );
};