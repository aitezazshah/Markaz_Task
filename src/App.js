import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
       <Route path="/login" element={<LoginScreen />} />
      <Route path="/" element={<HomeScreen />}/>
      <Route path="/profile" element={<ProfileScreen />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

