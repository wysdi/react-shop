import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop'
import Layout from './pages/Layout'
import NoPage from "./pages/NoPage";
import Detail from './pages/Detail';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Shop />} />
                  <Route path="/:id" element={<Detail />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
