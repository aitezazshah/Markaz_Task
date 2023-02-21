import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
       <Route path="/" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

