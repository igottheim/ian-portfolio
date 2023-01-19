import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/index.css';


import About from './Views/About'
import WorkExperience from './Views/WorkExperience';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<About></About>} />
        <Route path="/workexperience" element={<WorkExperience>Testing</WorkExperience>} />
        <Route path="/projects" element={<About></About>} />

        {/* Error Pages */}
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
