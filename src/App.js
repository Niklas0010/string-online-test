import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { Routes } from './components/Router/Routes';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </>
  );
}

export default App;
