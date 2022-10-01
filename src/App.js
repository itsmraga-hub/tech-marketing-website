import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/signup" />
        <Route path="contactus" />
      </Routes>
    </>
  );
}

export default App;
