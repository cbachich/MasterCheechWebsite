import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './global.css';

import Container from '@mui/material/Container';

import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AppBar from './components/AppBar';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar />
      <Container sx={{ marginY: 5 }}>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
