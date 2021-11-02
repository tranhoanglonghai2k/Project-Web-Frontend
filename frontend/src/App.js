import React from "react";
import SavedSearch from "./components/SavedSearch/SavedSearch";
import Header from "./pages/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SavedSearch />
    </div>
  );
}

export default App;
