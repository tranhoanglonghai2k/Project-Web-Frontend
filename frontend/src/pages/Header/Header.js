import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./Header.css";

function Header() {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Header;

// (
//   <div id="header">
//     <ul id="nav" className="mgl-115  mgt-5">
//       <li>
//         <a href="#">
//           <img
//             src="https://jdictblog.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/05/18223843/cropped-logo-3.png"
//             alt="logo"
//             className="logo-dict"
//           ></img>
//         </a>
//       </li>
//       <li className="active">
//         <a href="#">Dịch</a>
//       </li>
//     </ul>
//     <div className="nav2 mgr-115 mgtb-20">
//       <button className="btn login mgr-5 unactive">Login</button>
//       <button className="btn sign-up unactive">Sign up</button>
//     </div>
//   </div>
// )
