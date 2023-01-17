import React from 'react'
import ReactDOM from 'react-dom/client'
import Projects from './Views/Projects';
import About from './Views/About'
import './assets/css/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Projects>Testing</Projects>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/projects" element={<About></About>} />


        {/* Error Pages */}
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
