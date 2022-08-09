import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './pages/Navbar';
import Home from './pages/home';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </>
);

Calculator.defalutValue = {};
export default App;
