import React, { useState } from "react";
import axios from "axios";
import { Form, Select, Input } from "antd";
import { ZhihuSquareFilled } from "@ant-design/icons";
import { END_POINT } from "../../config";
import "./SelectLanguage.css";
import "../../App.css";

export const SelectLanguage = () => {
  localStorage.clear(); // NOTE: khi nào public thì xóa

  const { Option } = Select;
  const { TextArea } = Input;

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

  function handleChangelang1(value) {
    value === "Anh" ? setLang2("Việt") : setLang2("Anh");
    setLang1(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHis((data) => [...data, input]);

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
    <div className="container mglr-100 mgtb-25">
      <div>
        <Form onSubmit={handleSubmit}>
          <div className="container-language">
            <Select
              style={{ width: 160 }}
              className="language-input"
              name="lang1"
              value={lang1}
              onChange={handleChangelang1}
            >
              <Option value="Anh">Anh</Option>
              <Option value="Việt">Việt</Option>
            </Select>
            <Select style={{ width: 160 }} name="lang2" value={lang2}>
              <Option value="Việt">Việt</Option>
              <Option value="Anh">Anh</Option>
            </Select>
          </div>
          <div className="container-translate mgt-10">
            <TextArea
              rows={4}
              showCount
              maxLength={5000}
              allowClear
              name="input"
              onChange={handleChangeinput}
              className="textarea"
            />
            <div className="output-translate">{output}</div>
          </div>
          <Input
            className="input"
            icon={<ZhihuSquareFilled />}
            type="submit"
            value="Dịch"
          />
        </Form>
        <ul>{his && his.map((item) => <li>{item} </li>)}</ul>
      </div>
    </div>
  );
};
