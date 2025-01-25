import React from 'react';
import ReactDOM from 'react-dom/client';

// import Car1 from './Car1';
import Car2 from './Car2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Lấy hàm render() từ Car1
  <Car2 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
