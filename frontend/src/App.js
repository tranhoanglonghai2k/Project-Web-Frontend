import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BackTop } from "antd";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Translate from "./pages/Translate/Translate";
import Grammar from "./pages/Grammar/Grammar";
import MyWord from "./pages/MyWord/MyWord";
import Login from "./pages/Login/Login";
import Signup from "./pages/Sign up/Signup";
import MyInfo from "./pages/MyInfo/MyInfo";
import MyComment from "./pages/MyComment/MyComment";
import MyContribute from "./pages/MyContribute/MyContribute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/translate" element={<Translate />} />
          <Route exact path="/grammar" element={<Grammar />} />
          <Route exact path="/myword" element={<MyWord />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/myinfo" element={<MyInfo />} />
          <Route exact path="/myinfo/mycomment" element={<MyComment />} />
          <Route exact path="/myinfo/mycontribute" element={<MyContribute />} />
        </Routes>
        <BackTop />
        <Footer />
      </Router>
      )
    </div>
  );
}

export default App;
