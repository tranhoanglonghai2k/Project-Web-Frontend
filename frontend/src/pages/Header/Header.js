import React from "react";
import { Layout, Menu, Button } from "antd";
import { HomeFilled, ZhihuSquareFilled } from "@ant-design/icons";
import "./Header.css";

function Header() {
  const { Header } = Layout;

  return (
    <Layout>
      <Header
        id="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div className="header-content-default">
          <div className="logo">
            <a href="#">
              <img
                src="https://jdictblog.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/05/18223843/cropped-logo-3.png"
                alt="logo"
                className="logo-dict"
              ></img>
            </a>
          </div>

          <Menu className="menu" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" icon={<HomeFilled />}>
              Tra Cứu
            </Menu.Item>
            <Menu.Item key="2" icon={<ZhihuSquareFilled />}>
              Dịch
            </Menu.Item>
            <Menu.Item key="3">Chính tả</Menu.Item>
            <Menu.Item key="3">Login</Menu.Item>
            <Menu.Item key="3">Sign up</Menu.Item>
          </Menu>

          <div className="btn-default">
            <Button>Login</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </Header>
    </Layout>
  );
}

export default Header;
