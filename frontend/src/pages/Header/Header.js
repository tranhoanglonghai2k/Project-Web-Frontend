import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeFilled,
  ZhihuSquareFilled,
  CheckCircleFilled,
  EditFilled,
  BookFilled,
} from "@ant-design/icons";
import "./Header.css";

function Header() {
  const { Header } = Layout;

  // const keys = [1, 2, 3, 4, 5, 6, 7];

  const [selectKey, setSelectKey] = useState("1");

  // const handleClick = (keys, props) => {
  //   const numbers = props.keys;
  //   const key = numbers.map((number) => {
  //     setSelectKey = number;
  //   });

  //   return selectKey;
  // };

  return (
    <Layout>
      <Header
        id="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div className="header-content-default">
          <div className="logo">
            <Link to="/">
              <img
                src="https://jdictblog.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/05/18223843/cropped-logo-3.png"
                alt="logo"
                className="logo-dict"
              ></img>
            </Link>
          </div>

          <Menu
            className="menu"
            mode="horizontal"
            // onClick={handleClick}
            selectedKeys={[selectKey]}
          >
            <Menu.Item key="1" icon={<HomeFilled className="icon-default" />}>
              <Link to="/">Tra cứu</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<ZhihuSquareFilled className="icon-default" />}
            >
              <Link to="/translate">Dịch</Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<CheckCircleFilled className="icon-default" />}
            >
              <Link to="/grammar">Ngữ pháp</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<EditFilled className="icon-default" />}>
              <Link to="/newword">Từ mới</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<BookFilled className="icon-default" />}>
              <Link to="/myword">Từ của tôi</Link>
            </Menu.Item>
            <Menu.Item
              key="6"
              // icon={}
            >
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item
              key="7"
              // icon={}
            >
              <Link to="/signup">Sign up</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </Layout>
  );
}

export default Header;
