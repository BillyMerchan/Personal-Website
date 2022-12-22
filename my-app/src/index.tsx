import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Projects from './routes/Projects/Projects';
import Blog from './routes/Blog/Blog';
import About from './routes/About/About';
import Hackathons from './routes/Hackathons/Hackathons';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="Projects" element={<Projects/>}/>
        <Route path="Projects/Hackathons" element={<Hackathons/>}/>
        <Route path="Blog" element={<Blog/>} />
        <Route path="About" element={<About/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
