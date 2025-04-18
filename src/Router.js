import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hello from './components/Hello';
import ProductRow from './components/ProductRow';
import Header from './components/header';
import Footer from './components/footer';
import ParentComponent from './components/chillren';
import DataFetch from './DataFetch';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/products" element={<DataFetch />} />
        <Route path="/square" element={<ParentComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
