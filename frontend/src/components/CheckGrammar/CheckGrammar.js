import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { END_POINT } from "../../config";
import "./CheckGrammar.css";

export const CheckGrammar = () => {
  localStorage.clear(); // NOTE: khi nào public thì xóa

  const { TextArea } = Input;
  const { Title } = Typography;

  const [form] = Form.useForm();

  const [lang1, setLang1] = useState("Anh");
  const [lang2, setLang2] = useState("Việt");
  const [input, setInput] = useState("Plese input");
  const [output, setOutput] = useState("");
  const check = localStorage.getItem("his")
    ? JSON.stringify(localStorage.getItem("his"))
    : [];

  const [his, setHis] = useState(check);

  function handleChangeinput(values) {
    setInput(values);
    // console.log(values);
  }

  function handleChangelang1(value) {
    value === "Anh" ? setLang2("Việt") : setLang2("Anh");
    setLang1(value);
  }

  function handleSubmit(values) {
    // setHis((data) => [...data, input]);

    // localStorage.setItem("his", his);
    // const request_lang = lang1 === "Việt" ? "en" : "vi";
    // axios
    //   .post(END_POINT + "/api/translate-paragraph", {
    //     type: request_lang,
    //     param: input,
    //   })
    //   .then((res) => {
    //     setOutput(res.data.param);
    //   });

    form
      .validateFields()
      .then((values) => {
        // Submit values
        // submitValues(values);
        console.log(values);
      })
      .catch((errorInfo) => {});
  }

  return (
    <div className="container mglr-100 mgtb-25">
      <Title className="title">Kiểm tra ngữ pháp</Title>

      <Form form={form} onSubmit={handleSubmit}>
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
                onSubmit={handleSubmit}
                icon={<CheckCircleFilled />}
              >
                Kiểm tra
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
