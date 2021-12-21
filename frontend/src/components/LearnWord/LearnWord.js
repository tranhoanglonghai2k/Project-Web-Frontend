import React, { useState, useEffect } from "react";
import { List, Avatar, Button, Skeleton, Checkbox } from "antd";
import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";
import reqwest from "reqwest";
import "./LearnWord.css";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

function onChange(e) {
  console.log(`checked = ${e.target.value}`);
}

function onDelete(e) {
  console.log(`deleted = ${e.target.value}`);
}

const LearnWord = () => {
  let arr = [];
  const [state, setState] = useState({
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  });
  let m = 0;
  const check = localStorage.getItem("his_search")
    ? JSON.parse(localStorage.getItem("his_search"))
    : [];
  console.log("check", check);
  useEffect(() => {
    if (check.length > 0) {
      for (let i = 0; i < check.length && i < 3; i++) {
        arr.push(check[i]);
        m++;
      }
    }
    console.log("m", m);
    getData((res) => {
      setState({
        initLoading: false,
        data: arr,
        list: arr, // init 3 data
      });
      console.log("Res", res);
    });
  }, [""]);

  const getData = (callback) => {
    // use axios replace reqwest
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: (res) => {
        callback(res);
      },
    });
  };
  console.log("m", m);
  const onLoadMore = () => {
    console.log("m", m);
    if (check.length > m) {
      for (let i = 0; m < check.length && i < 3; i++) {
        arr.push(check[i]);
        m++;
      }
    }
    setState({
      loading: true,
      list: state.data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          // picture: {},
        }))
      ),
    });
    getData((res) => {
      const data = state.data.concat(res.results);
      setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };
  const { initLoading, loading, list } = state;
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button className="btn-default" onClick={onLoadMore}>
          <ReloadOutlined />
        </Button>
      </div>
    ) : null;

  return (
    <div>
      <div className="word-list">
        <h3 className="title-comm">
          <span className="title-holder title">Chọn từ</span>
        </h3>

        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) =>
            console.log(item) || (
              <List.Item
                actions={[
                  <Checkbox onChange={onChange}>Chọn</Checkbox>,
                  <Button
                    className="btn-default"
                    type="primary"
                    onClick={onDelete}
                  >
                    <DeleteOutlined />
                  </Button>,
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta title={item.word} description={item.mean} />
                </Skeleton>
              </List.Item>
            )
          }
        />
      </div>

      <div className="btn-learn-word">
        <Button
          className="btn-default btn-learn mga"
          type="primary"
          href="/myword/card"
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
};

export default LearnWord;
