import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { Routes } from './components/Router/Routes';
import { AuthProvider } from './components/Login/AuthProvider';

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes />
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
