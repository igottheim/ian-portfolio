import React from 'react'
import ReactDOM from 'react-dom/client'
import Projects from './Views/Projects';
import Resume from './Views/Resume'
import './assets/css/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Projects>Testing</Projects>} />
        <Route path="/course" element={<Resume>Testing</Resume>} />

        {/* Error Pages */}
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
