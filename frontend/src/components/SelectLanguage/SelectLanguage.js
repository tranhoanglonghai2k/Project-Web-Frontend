import React, { useState } from "react";
import axios from "axios";
import { Form, Select, Input, Button } from "antd";
import { ZhihuSquareFilled } from "@ant-design/icons";
import { END_POINT } from "../../config";
import "./SelectLanguage.css";

export const SelectLanguage = () => {
  localStorage.clear(); // NOTE: khi nào public thì xóa

  const { Option } = Select;
  const { TextArea } = Input;

  const [form] = Form.useForm();

  const [lang1, setLang1] = useState("Anh");
  const [lang2, setLang2] = useState("Việt");
  const [input, setInput] = useState("Plese input");
  const [output, setOutput] = useState("");
  const check = localStorage.getItem("his")
    ? JSON.stringify(localStorage.getItem("his"))
    : [];

  const [his, setHis] = useState(check);

  function handleChangeinput(e) {
    setInput(e.target.value);
  }

  function handleChangelang1(value) {
    value === "Anh" ? setLang2("Việt") : setLang2("Anh");
    setLang1(value);
  }

  function handleSubmit(values) {
    setHis((data) => [...data, input]);
    localStorage.setItem("his", his);
    const request_lang = lang1 === "Việt" ? "en" : "vi";

    axios
      .get(END_POINT + "/api/translate-paragraph", {
        params: { type: request_lang, param: input },
      })
      .then((res) => {
        setOutput(res.data.param);
        console.log("data", output);
      });

    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((errorInfo) => {});
  }

  return (
    <div>
      <Form form={form}>
        <div className="container-language">
          <Form.Item>
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
          </Form.Item>
        </div>
        <div className="container-translate mgt-10">
          <Form.Item>
            <TextArea
              rows={4}
              showCount
              maxLength={5000}
              allowClear
              name="input"
              onChange={handleChangeinput}
              className="textarea"
            />

            <Form.Item>
              <Button
                className="btn-submit"
                onClick={handleSubmit}
                icon={<ZhihuSquareFilled />}
              >
                Dịch
              </Button>
            </Form.Item>

            <div className="output-translate mgt-30">{output}</div>
          </Form.Item>
        </div>
      </Form>

      <ul>{his && his.map((item) => <li>{item} </li>)}</ul>
    </div>
  );
};
