import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Translate from "./pages/Translate/Translate";
import Grammar from "./pages/Grammar/Grammar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Sign up/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
