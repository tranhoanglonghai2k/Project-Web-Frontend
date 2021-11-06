import React from "react";
import { Layout, Menu } from "antd";
import "./Header.css";

function Header() {
  const { Header } = Layout;

  return (
    <Layout>
      <Header
        id="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
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
          <Menu.Item key="1">Tra Cứu</Menu.Item>
          <Menu.Item key="2">Dịch</Menu.Item>
          <Menu.Item key="3">Chính tả</Menu.Item>
          <Menu.Item key="4">Login</Menu.Item>
          <Menu.Item key="5">Sign up</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Header;

// (
//   <div id="header">
//     <ul id="nav" className="mgl-115  mgt-5">
//       <li>
{
  /* <a href="#">
  <img
    src="https://jdictblog.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/05/18223843/cropped-logo-3.png"
    alt="logo"
    className="logo-dict"
  ></img>
  //{" "}
</a>; */
}
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
