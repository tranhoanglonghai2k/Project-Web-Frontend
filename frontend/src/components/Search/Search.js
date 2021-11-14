import React, { useState } from "react";
import { Form, Select, Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "../../App.css";

function Search() {
  localStorage.clear(); // NOTE: khi nào public thì xóa

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
    <div className="container mglr-100 mgtb-25">
      <Form onSubmit={handleSubmit} className="search-form">
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
          className="search-input"
        />
        <div>{output}</div>
      </Form>
    </div>
  );
}

export default Search;
