import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputForm } from './InputForm';
import { Point } from '../types/Point';

export const InputPage: React.FC = () => {
  const navigate = useNavigate();
  const [points, setPoints] = useState<Point[]>([
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 50, y: 80 },
  ]);

  const handleChange = (index: number, key: keyof Point, value: number) => {
    const updated = [...points];
    updated[index][key] = value;
    setPoints(updated);
  };

  const handleSubmit = () => {
    navigate("/display", { state: { points } });
  };
  return <InputForm points={points} onChange={handleChange} onSubmit={handleSubmit} />;
};