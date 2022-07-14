import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './components/Shop'
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Shop></Shop>
        <Footer></Footer>
    </div>
  );
}

export default App;
