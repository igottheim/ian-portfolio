import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/index.css';

import NotFound from './Views/errors/NotFound';
import Projects from './Views/Projects';
import About from './Views/About'
import WorkExperience from './Views/WorkExperience';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<About></About>} />
        <Route path="/workexperience" element={<WorkExperience>Testing</WorkExperience>} />
        <Route path="/projects" element={<Projects></Projects>} />

        {/* Error Pages */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
