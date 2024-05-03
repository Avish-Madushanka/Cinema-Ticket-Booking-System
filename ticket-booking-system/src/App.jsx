import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
