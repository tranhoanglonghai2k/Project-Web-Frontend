import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import { END_POINT } from "../../config";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));
const columns = [
  {
    title: "Word",
    dataIndex: "word",
    key: "word",
  },
  {
    title: "Example",
    dataIndex: "content",
    key: "content",
  },

  {
    title: "Mean of Example",
    dataIndex: "content_mean",
    key: "content_mean",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

function Comment() {
  const [table, setTable] = useState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    setTable({ loading:true});
    axios
      .get(END_POINT + "/api/get-my-contribution", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let data = res.data.list;
        const dataSource = [];
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            dataSource.push(
              new Object({
                key: i + "",
                word:data[i].word,
                content: data[i].content,
                content_mean: data[i].content_mean,
                date : data[i].day
              })
            );
            console.log(dataSource);
          }
        }
        setTable({ loading: false, data: dataSource});
      });
  }, []);
  return (
    <div>
      <Table
        loading={table.loading}
        columns={columns}
        dataSource={table.data}
      />
    </div>
  );
}

export default Comment;
