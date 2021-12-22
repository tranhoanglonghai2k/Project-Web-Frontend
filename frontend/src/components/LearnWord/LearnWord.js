import React, { useState, useEffect } from "react";
import { Button, Checkbox, Table, Space, Divider } from "antd";
import { DeleteOutlined, SoundFilled } from "@ant-design/icons";
import "./LearnWord.css";
import { prettyDOM } from "@testing-library/react";
const columns = [
  {
    title: "Word",
    dataIndex: "word",
    key: "word",
  },
  {
    title: "Mean",
    dataIndex: "mean",
    key: "mean",
  },
];

function onSubmit(e) {
  // localStorage.setItem("word_card", selectedRows);
}
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );

    localStorage.setItem("word_card", JSON.stringify(selectedRows));
    console.log("wordcard", localStorage.getItem("word_card"));
  },
  // getCheckboxProps: (record) => ({
  //   disabled: record.name === "Disabled User",
  //   // Column configuration not to be checked
  //   name: record.name,
  // }),
};

let check = localStorage.getItem("his_search")
  ? JSON.parse(localStorage.getItem("his_search"))
  : [];
function LearnWord() {
  const [table, setTable] = useState({
    loading: false,
    data: [],
  });
  const [selectionType, setSelectionType] = useState("checkbox");
  useEffect(() => {
    check = localStorage.getItem("his_search")
      ? JSON.parse(localStorage.getItem("his_search"))
      : [];
  }, [localStorage.getItem("his_search")]);
  useEffect(async () => {
    let data1 = [];
    setTable({ data: [], loading: true });
    for (let i = 0; i < check.length; i++) {
      await data1.push(
        new Object({
          key: i + "",
          word: check[i].word,
          mean: check[i].mean,
        })
      );
    }
    setTable({ loading: false, data: data1 });
  }, []);

  return (
    <div>
      <div className="word-list">
        <h3 className="title-comm">
          <span className="title-holder title">Chọn từ</span>
        </h3>
      </div>

      <div>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={table.data}
          loading={table.loading}
        />
      </div>

      <div className="btn-learn-word">
        <Button
          onClick={onSubmit}
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
