import React, { useState, useEffect } from "react";
// import Speech from "react-speech";
import { END_POINT } from "../../config";
import axios from "axios";
// import Dictaphone from "../../components/SpeechRecognition/SpeechRecognition";
import { Form, Select, Input, AutoComplete } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "./Search.css";

function Search() {
  localStorage.clear(); // NOTE: khi nào public thì xóa

  const [list, setList] = useState([]);

  const word = {
    _id: "",
    wType: [],
    means: [],
    examples: [],
    examplesVn: [],
    word: "",
    spell: "",
    __v: 0,
  };

  const [lang, setLang] = useState("Anh-Việt");

  const { Option } = Select;

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
    if (input.length > 0) {
      setList([]);
      axios
        .get(END_POINT + "/api/recommend-search", {
          params: { lang: request_lang, word: input },
        })
        .then((res) => {
          let data = res.data;

          let l = data.word;

          l = l
            .map((word) => {
              return { value: word.word };
            })
            .reverse();

          l.shift();

          setList(l);
        });
    } else {
      setList([""]);
    }
    //console.log(input);
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleChangeTmp = (e) => {
    setInput(e);
  };

  function handleChangelang(e) {
    setLang(e);
  }

  const handleSubmit = (e) => {
    input.trim();
    input.toLowerCase();
    var check_Flash = 0;

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
        setOutput((output) => {
          return { ...output, ...data.word };
        });
      });
    localStorage.setItem("his", JSON.stringify(his));
    console.log("his", his);
  };

  const onSelect = (data) => {
    setInput(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="search-form">
        <div className="container-search">
          <div className="select">
            <Select
              onChange={handleChangelang}
              value={lang}
              style={{ width: 160 }}
              name="languages"
              className="switch-language"
            >
              <Option value="anhviet">Anh-Việt</Option>
              <Option value="vietanh">Việt-Anh</Option>
            </Select>
          </div>

          <div className="search">
            <AutoComplete
              value={input}
              dataSource={list}
              onSelect={onSelect}
              onSearch={handleChangeTmp}
              style={{ width: "100%" }}
            >
              <Input.Search
                onSearch={handleSubmit}
                size="large"
                placeholder="Tra Từ"
                suffix={suffix}
                allowClear
                enterButton
                style={{ width: "100%" }}
              />
            </AutoComplete>
          </div>
        </div>

        {output.word.length > 0 && 
        <div className="box-word">
          <ul className="word cl-blue">
            <li className="mg-20">
              <div>
                <span className="word-css cl-blue">Word:</span>
                <span className="font mg-20">{output.word}</span>
              </div>
            </li>
            <li className="mg-20">
              <div>
                <span className="word-css cl-blue">Spell:</span>
                <span className="font mg-20">{output.spell}</span>
              </div>
            </li>
            <li className="mg-20">
              <div>
                <span className="word-css cl-blue">Type:</span>
                <span className="font mg-20">{output.wType}</span>
              </div>
            </li>
            <li className="mg-20">
              <div>
                <span className="word-css cl-blue">Means:</span>
                <div>
                  <span className="paragraph font mg-20">{output.means}</span>
                </div>
              </div>
            </li>
            <li className="mg-20">
              <div>
                <span className=" word-css cl-blue">Example:</span>
                <div>
                  <span className="paragraph font mg-20">
                    {output.examples}
                  </span>
                </div>
              </div>
            </li>
            <li className="mg-20">
              <div>
                <span className="word-css cl-blue">Mean of example:</span>
                <div>
                  <span className="paragraph font mg-20">
                    {output.examplesVn}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        }
      </Form>
      <div>
        {his &&
          his.map((item) => (
            <div>
              <span>{item}</span>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
