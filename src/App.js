import React from 'react';
import './App.css';
import LandingPage from './components/landingpage';
import NavBar from './components/navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
