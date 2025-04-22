import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InputPage } from './components/pages/InputPage';
import { DisplayPage } from './components/pages/DisplayPage';

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<InputPage />} />
      <Route path="/display" element={<DisplayPage />} />
    </Routes>
  </BrowserRouter>
);