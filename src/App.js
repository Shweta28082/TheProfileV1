
import Home from './HomePage/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Login/Login';
function App() {
  return (
    <Router>
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
