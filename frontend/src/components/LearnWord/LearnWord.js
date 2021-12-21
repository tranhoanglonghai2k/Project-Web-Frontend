import React from "react";
import { Button, Checkbox, Table, Space } from "antd";
import { DeleteOutlined, SoundFilled } from "@ant-design/icons";
import "./LearnWord.css";

function onChange(e) {
  console.log(`checked = ${e.target.value}`);
}

function onDelete(e) {
  console.log(`deleted = ${e.target.value}`);
}

const columns = [
  {
    title: "Word",
    dataIndex: "word",
    key: "word",
  },
  {
    title: "Spell",
    dataIndex: "spell",
    key: "spell",
  },
  {
    title: "Mean",
    dataIndex: "mean",
    key: "mean",
  },

  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Checkbox onChange={onChange}>Chọn</Checkbox>
        <div
          style={{ width: "1px", height: "35px", border: "1px solid #ccc" }}
        ></div>
        <Button className="btn-default" type="primary" onClick={onDelete}>
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    word: "John Brown",
    spell: 32,
    mean: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    word: "Jim Green",
    spell: 42,
    mean: "London No. 1 Lake Park",
  },
  {
    key: "3",
    word: "Joe Black",
    spell: 32,
    mean: "Sidney No. 1 Lake Park",
  },
];

function LearnWord() {
  return (
    <div>
      <div className="word-list">
        <h3 className="title-comm">
          <span className="title-holder title">Chọn từ</span>
        </h3>
      </div>

      <div>
        <Table columns={columns} dataSource={data} />
      </div>

      <div className="btn-learn-word">
        <Button
          className="btn-default btn-learn mga"
          type="primary"
          href="/card"
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
}

export default LearnWord;
