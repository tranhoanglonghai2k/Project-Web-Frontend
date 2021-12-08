import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, Popover } from "antd";
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
  const [output, setOutput] = useState([]);
  const check = localStorage.getItem("his")
    ? JSON.stringify(localStorage.getItem("his"))
    : [];

  const [his, setHis] = useState(check);

  const mockData = {
    "text": {
      "software": {
        "name": "GrammarBot",
        "version": "4.3.1",
        "apiVersion": 1,
        "premium": false,
        "premiumHint": "You might be missing errors only the Premium version can find. Upgrade to see what you're missing.",
        "status": ""
      },
      "warnings": {
        "incompleteResults": false
      },
      "language": {
        "name": "English (US)",
        "code": "en-US",
        "detectedLanguage": {
          "name": "English (US)",
          "code": "en-US"
        }
      },
      "matches": [
        {
          "message": "This sentence does not start with an uppercase letter",
          "shortMessage": "",
          "replacements": [
            {
              "value": "We"
            }
          ],
          "offset": 0,
          "length": 2,
          "context": {
            "text": "we is going to be play game",
            "offset": 0,
            "length": 2
          },
          "sentence": "we is going to be play game",
          "type": {
            "typeName": "Other"
          },
          "rule": {
            "id": "UPPERCASE_SENTENCE_START",
            "description": "Checks that a sentence starts with an uppercase letter",
            "issueType": "typographical",
            "category": {
              "id": "CASING",
              "name": "Capitalization"
            }
          }
        },
        {
          "message": "The pronoun 'we' must be used with a non-third-person form of a verb: \"am\", \"are\", \"aren\"",
          "shortMessage": "Grammatical problem: agreement error",
          "replacements": [
            {
              "value": "am"
            },
            {
              "value": "are"
            },
            {
              "value": "aren"
            }
          ],
          "offset": 3,
          "length": 2,
          "context": {
            "text": "we is going to be play game",
            "offset": 3,
            "length": 2
          },
          "sentence": "we is going to be play game",
          "type": {
            "typeName": "Other"
          },
          "rule": {
            "id": "NON3PRS_VERB",
            "subId": "2",
            "description": "Agreement error: Third person verb with a non-third person pronoun",
            "issueType": "grammar",
            "category": {
              "id": "GRAMMAR",
              "name": "Grammar"
            }
          }
        }
      ]
    }
  }

  function handleChangeinput(values) {
    setInput(values);
    // console.log(values);
  }

  function handleChangelang1(value) {
    value === "Anh" ? setLang2("Việt") : setLang2("Anh");
    setLang1(value);
  }

  function handleSubmit() {
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
    console.log("submit");
    let offset = [];
    let length = [];
    let replacements = [];
    let message = [];

    let string = "we is going to be play game";

    if(mockData.text.matches.length > 0){
      mockData.text.matches.map((item)=>{
        offset.push(item.offset);
        length.push(item.length);
        replacements.push(item.replacements);
        message.push(item.message);
      });
    }

    let returnString = [];
    let word = '';
    let title = '';
    let replacement = [];
    for(let i=0;i<string.length;i++){
      
      if(i == offset[0]){
        if(word.length > 0)
          returnString.push(new Object({"word": word,"title":title,"replacement":replacement}));
        word = '';
        title = message.shift();
        for(let j=i;j<offset[0]+length[0];j++){
          word += string[j];
        }
        i += length[0];
        replacement = replacements.shift();
        returnString.push(new Object({word: word,title:title,replacement:replacement}));
        offset.shift();
        length.shift();
        word = '';
        title = '';
        replacement = [];
      }
      else{
        word += string[i];
      }
    }

    if(word.length > 0){
      returnString.push(new Object({"word": word,"title":title,"replacement":replacement}));
    }

    setOutput(returnString);

    form
      .validateFields()
      .then((values) => {
        // Submit values
        // submitValues(values);
        console.log(values);
      })
      .catch((errorInfo) => {});
  }

  const content = ((replace)=>{
    console.log(replace);
    if(replace)
      {return replace.map((item)=>{
        return <div><p>{item.value}</p></div>
      })}
    else{
      return ;
    }
  })

  return (
    <div>
      <Title className="title">Kiểm tra ngữ pháp</Title>

      <Form form={form} onFinish={handleSubmit}>
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
                htmlType="submit"
                icon={<CheckCircleFilled />}
              >
                Kiểm tra
              </Button>
            </Form.Item>

            <div className="output-translate mgt-30">{output.map((item)=>{
              if(item.title){
                return <Popover content={content(item.replacement)} title={item.title}>
              <Button type="primary">{item.word}</Button>
                  </Popover>
              }
              else{
                return item.word
              }
            })}</div>
          </Form.Item>
        </div>
      </Form>

      <ul>{his && his.map((item) => <li>{item} </li>)}</ul>
    </div>
  );
};
