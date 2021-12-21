import React from "react";
import { Table, Tag, Space } from "antd";

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
    title: "Example",
    dataIndex: "example",
    key: "example",
  },

  {
    title: "Mean of Example",
    dataIndex: "meanofexample",
    key: "meanofexample",
  },
];

const data = [
  {
    key: "1",
    word: "John Brown",
    spell: 32,
    example: "New York No. 1 Lake Park",
    meanofexample: ["nice", "developer"],
  },
  {
    key: "2",
    word: "Jim Green",
    spell: 42,
    example: "London No. 1 Lake Park",
    meanofexample: ["loser"],
  },
  {
    key: "3",
    word: "Joe Black",
    spell: 32,
    example: "Sidney No. 1 Lake Park",
    meanofexample: ["cool", "teacher"],
  },
];

function Comment() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Comment;
