import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import "./App.css";
import Home from "./pages/Home/Home";
import Translate from "./pages/Translate/Translate";
import Grammar from "./pages/Grammar/Grammar";
// import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/translate" element={<Translate />}></Route>
          <Route path="/grammar" element={<Grammar />}></Route>
          {/* <Route path="/" component={Home} />
        <Route path="/" component={Home} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
