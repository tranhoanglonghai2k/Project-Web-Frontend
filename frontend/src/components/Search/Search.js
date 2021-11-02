import React, { useState, useRef, useEffect } from "react";
import { GoSearch } from "react-icons/go";

function Search(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: "Day la nghia cua tu",
    });

    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="select">
          <select name="languages" className="switch-language">
            <option value="vietanh">Việt-Anh</option>
            <option value="anhviet">Anh-Việt</option>
          </select>
        </div>

        <input
          placeholder="Search"
          value={input}
          onChange={handleChange}
          name="text"
          className="search-input"
          ref={inputRef}
        ></input>
        <GoSearch onClick={handleSubmit} className="search-btn" />
      </form>
    </div>
  );
}

export default Search;
