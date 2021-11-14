import React from "react";
import axios from "axios";
import { useState } from "react";
import { END_POINT } from "../../config";

export const SelectLanguage = () => {
  localStorage.clear(); // NOTE: khi nào public thì xóa
  const [lang1, setLang1] = useState("Anh");
  const [lang2, setLang2] = useState("Việt");
  const [input, setInput] = useState("Plese input");
  const [output, setOutput] = useState("");
  const check = localStorage.getItem("his")
    ? JSON.stringify(localStorage.getItem("his"))
    : [];
  const [his, setHis] = useState(check);

  function handleChangeinput(event) {
    event.preventDefault();
    setInput(event.target.value);
  }
  function handleChangelang1(event) {
    event.preventDefault();
    event.target.value === "Anh" ? setLang2("Việt") : setLang2("Anh");
    setLang1(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHis((data) => [...data, input]);
    console.log(his);
    localStorage.setItem("his", his);
    const request_lang = lang1 === "Việt" ? "en" : "vi";
    axios
      .post(END_POINT + "/api/translate-paragraph", {
        type: request_lang,
        param: input,
      })
      .then((res) => {
        setOutput(res.data.param);
      });
  }
  return (
    <div className="container">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="Container-language">
            <select
              className="language-input"
              name="lang1"
              value={lang1}
              onChange={handleChangelang1}
            >
              <option value="Anh">Anh</option>
              <option value="Việt">Việt</option>
            </select>
            <select name="lang2" value={lang2}>
              <option value="Việt">Việt</option>
              <option value="Anh">Anh</option>
            </select>
          </div>
          <div className="container-translate">
            <div>
              <textarea name="input" onChange={handleChangeinput} />
            </div>
            <div>{output}</div>
          </div>
          <input type="submit" value="Dịch" />
        </form>
        <ul>{his && his.map((item) => <li>{item} </li>)}</ul>
      </div>
    </div>
  );
};
