import React, { useState, useEffect } from "react";
import { List, Avatar, Button, Skeleton, Checkbox } from "antd";
import reqwest from "reqwest";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

function onChange(e) {
  console.log(`checked = ${e.target.value}`);
}

function onDelete(e) {
  console.log(`deleted = ${e.target.value}`);
}

const LearnWord = () => {
  const [state, setState] = useState({
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  });
  const check = localStorage.getItem("his") ? localStorage.getItem("his") : [];
  console.log(check);
  const arr = [];
  useEffect(() => {
    if (check.length > 0) {
      for (let i = 0; i < check.length && i < 3; i++) {
        arr.push(check[i]);
      }
    }
    getData((res) => {
      setState({
        initLoading: false,
        data: res.results,
        list: res.results, // init 3 data
      });
    });
  }, []);

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

  const onLoadMore = () => {
    setState({
      loading: true,
      list: state.data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
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
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <div>
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
                <Checkbox onChange={onChange}>Choose</Checkbox>,
                <Button onClick={onDelete}>Delete</Button>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={item.name.last}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </Skeleton>
            </List.Item>
          )
        }
      />
      <Button type="submit" href="/card">
        Submit
      </Button>
    </div>
  );
};

export default LearnWord;
