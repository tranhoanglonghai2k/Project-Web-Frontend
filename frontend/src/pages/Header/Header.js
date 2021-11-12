import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { HomeFilled, ZhihuSquareFilled } from "@ant-design/icons";
import "./Header.css";

function Header({ currentKey }) {
  const { Header } = Layout;

  // const [selectKey, setSelectKey] = useState(1);

  // const handleClick = (e) => {
  //   console.log("click ", e);
  //   setSelectKey(e.target.key);
  // };

  return (
    <Layout>
      <Header
        id="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div className="header-content-default">
          <div className="logo">
            <a href="/home">
              <img
                src="https://jdictblog.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/05/18223843/cropped-logo-3.png"
                alt="logo"
                className="logo-dict"
              ></img>
            </a>
          </div>

          <Menu
            className="menu"
            mode="horizontal"
            // onClick={handleClick}
            // selectedKeys={[selectKey]}
          >
            <Menu.Item key="1" icon={<HomeFilled />}>
              <a href="/home">Tra cứu</a>
            </Menu.Item>
            <Menu.Item key="2" icon={<ZhihuSquareFilled />}>
              <a href="/translate">Dịch</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="/grammar">Ngữ pháp</a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="/login">Login</a>
            </Menu.Item>
            <Menu.Item key="5">
              <a href="/signup">Sign up</a>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </Layout>
  );
}

export default Header;
