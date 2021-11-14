import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";

function Search() {
  localStorage.clear(); // NOTE: khi nào public thì xóa
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Đây là phần dịch");
  const check = localStorage.getItem("his")
    ? JSON.stringify(localStorage.getItem("his"))
    : [];
  const [his, setHis] = useState(check);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    input.trim();
    var check_Flash = 0;
    e.preventDefault();
    if (/\S/.test(input)) {
      check_Flash = 1;
    }
    const update = { word: input, flash: check_Flash };
    setHis((pre) => {
      return [...pre, update];
    });
    console.log(his);
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
        ></input>
        <GoSearch onClick={handleSubmit} className="search-btn" />
        <div>{output}</div>
      </form>
    </div>
  );
}

export default Search;
