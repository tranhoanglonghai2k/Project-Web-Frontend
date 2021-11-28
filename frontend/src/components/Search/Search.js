import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import Speech from "react-speech";
import { END_POINT } from "../../config";
import axios from "axios";
import Dictaphone from "../../components/SpeechRecognition/SpeechRecognition";
import { Form, Select, Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "./Search.css";
import SuggestedList from "../SuggestedList/SuggestedList";

function Search() {
  localStorage.clear(); // NOTE: khi nào public thì xóa
  const list_word = [
    {
      _id: "",
      means: [],
      word: "",
      spell: "",
    },
  ];

  const [list, setList] = useState(list_word);

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
  useEffect(() => {
    const request_lang = lang === "Anh-Việt" ? "en" : "vi";
    if (input.length > 0)
      axios
        .get(END_POINT + "/api/recommend-search", {
          params: { lang: request_lang, word: input },
        })
        .then((res) => {
          let data = res.data;

          setList((list) => {
            return [...list, ...data.word];
          });
        });
    console.log(input);
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  function handleChangelang(e) {
    setLang(e);
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
    const request_lang = lang === "Anh-Việt" ? "en" : "vi";
    axios
      .get(END_POINT + "/api/search-word", {
        params: { lang: request_lang, word: input },
      })
      .then((res) => {
        let data = res.data;

        //   .then((res) => {
        //     console.log(res.data.word);
        //     setOutput({...output, res.data.word });
        //   });
      });
  };
  return (
    <div className="container mglr-100 mgtb-25">
      <Form onSubmit={handleSubmit} className="search-form">
        <div className="container-search">
          <div className="select mglr-20">
            <Select
              onChange={handleChangelang}
              value={lang}
              style={{ width: 160 }}
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
            className="search mglr-20"
          />
        </div>
        <div>
          <ul>
            <li>{output.word}</li>
            <li>{output.spell}</li>
            <Speech text="hello" />
            <li>{output.wType}</li>
            <li>{output.means}</li>
            <li>{output.examples}</li>
            <li>{output.examplesVn}</li>
          </ul>
        </div>

        <SuggestedList word={list} />
      </Form>
    </div>
  );
}

export default Search;
