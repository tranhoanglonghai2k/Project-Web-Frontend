import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import Speech from "react-speech";
import { END_POINT } from "../../config";
import axios from "axios";
import Dictaphone from "../../components/SpeechRecognition/SpeechRecognition";
import { Form, Select, Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "./Search.css";
import "../../App.css";

function Search() {
  const word = {
    _id: "61567a020ce0462cf081947b",
    wType: ["  thán từ", "  danh từ", "  nội động từ"],
    means: [
      " chào anh!, chào chị!",
      " này, này",
      " ô này! (tỏ ý ngạc nhiên)",
      " tiếng chào",
      ' tiếng gọi "này, này" !',
      ' tiếng kêu ô này "! (tỏ ý ngạc nhiên)',
      " chào",
      ' gọi "này, này" ',
      ' kêu "ô này" (tỏ ý ngạc nhiên)',
    ],
    examples: [],
    examplesVn: [],
    word: "hello",
    spell: "hə'lou",
    __v: 0,
  };
  const word1 = {
    _id: "61567a020ce0462cf081947b",
  };
  localStorage.clear(); // NOTE: khi nào public thì xóa

  const [lang, setLang] = useState("Anh-Việt");

  const { Option } = Select;
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const [input, setInput] = useState("");
  const [output, setOutput] = useState(word);
  const check = localStorage.getItem("his")
    ? JSON.stringify(localStorage.getItem("his"))
    : [];
  const [his, setHis] = useState(check);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  function handleChangelang(value) {
    value === "Anh-Việt" ? setLang("Anh-Việt") : setLang("Việt-Anh");
  }
  const handleSubmit = (e) => {
    input.trim();
    input.toLowerCase();
    var check_Flash = 0;
    e.preventDefault();
    const update = { word: input, flash: check_Flash };
    setHis((pre) => {
      return [...pre, update];
    });
    // const request_lang = lang === "Anh-Việt" ? "en" : "vi";
    // console.log(request_lang, input);
    // axios
    //   .post(END_POINT + "/api/search-word", {
    //     lang: request_lang,
    //     word: input,
    //   })

    //   .then((res) => {
    //     console.log(res.data.word);
    //     setOutput({...output, res.data.word });
    //   });
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit} className="search-form">
    //     <div className="select">
    //       <select
    //         value={lang}
    //         name="languages"
    //         className="switch-language"
    //         onChange={handleChangelang}
    //       >
    //         <option value="Việt-Anh">Việt-Anh</option>
    //         <option value="Anh-Việt">Anh-Việt</option>
    //       </select>
    //       <Dictaphone setInput={setInput} />
    //     </div>

    //     <input
    //       placeholder="Search"
    //       value={input}
    //       onChange={handleChange}
    //       name="text"
    //       className="search-input"
    //     ></input>
    //     <GoSearch onClick={handleSubmit} className="search-btn" />
    //     <div>
    //       <ul>
    //         <li>{output.word}</li>
    //         <Speech text="hello" />
    //         <li>{output.wType}</li>
    //         <li>{output.means}</li>
    //         <li>{output.examples}</li>
    //         <li>{output.examplesVn}</li>
    //         <li>{output.spell}</li>
    //       </ul>
    //     </div>
    //   </form>

    <div className="container mglr-100 mgtb-25">
      <Form onSubmit={handleSubmit} className="search-form">
        <div>
          <div className="select">
            <Select
              style={{ width: 120 }}
              name="languages"
              className="switch-language"
            >
              <Option value="vietanh">Việt-Anh</Option>
              <Option value="anhviet">Anh-Việt</Option>
            </Select>
          </div>

          <Search
            placeholder="Search"
            value={input}
            onChange={handleChange}
            onClick={handleSubmit}
            name="text"
            enterButton="Search"
            size="large"
            suffix={suffix}
            allowClear
            className="search"
          />
        </div>
        <div>{output.word}</div>
      </Form>
    </div>
  );
}

export default Search;
