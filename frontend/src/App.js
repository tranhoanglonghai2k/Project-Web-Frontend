import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Translate from "./pages/Translate/Translate";
import Grammar from "./pages/Grammar/Grammar";
import NewWord from "./pages/NewWord/NewWord";
import MyWord from "./pages/MyWord/MyWord";
import Login from "./pages/Login/Login";
import Signup from "./pages/Sign up/Signup";
import MyInfo from "./pages/MyInfo/MyInfo";
import Info from "./pages/Info/Info";
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
          <Route path="/translate" element={<Translate />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/newword" element={<NewWord />} />
          <Route path="/myword" element={<MyWord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myinfo" element={<MyInfo />} />
          <Route path="/myinfo/info" element={<Info />} />
          <Route path="/myinfo/mycomment" element={<MyComment />} />
          <Route path="/myinfo/mycontribute" element={<MyContribute />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
