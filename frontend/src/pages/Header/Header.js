import React, { useState, useEffect } from "react";
import { Layout, Menu, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import {
  HomeFilled,
  ZhihuSquareFilled,
  CheckCircleFilled,
  BookFilled,
  ProfileFilled,
} from "@ant-design/icons";
import "./Header.css";

function Header() {
  const { Header } = Layout;
  let check = false;
  if (localStorage.getItem("token")) {
    check = true;
  }

  function confirm(e) {
    localStorage.removeItem("token");
    message.success("Đăng xuất thành công!!!");
  }

  function cancel(e) {
    console.log(e);
    message.error("Đăng xuất thất bại!!!");
  }

  return (
    <div>
      <Layout>
        {check ? (
          <Header
            id="header"
            style={{ position: "fixed", zIndex: 1, width: "100%" }}
          >
            <div className="header-content-default">
              <div className="logo">
                <Link to="/">
                  <img
                    src="./cropped-logo-3.png"
                    alt="logo"
                    border="0"
                    className="logo-dict"
                  ></img>
                </Link>
              </div>

              <Menu className="menu" mode="horizontal">
                <Menu.Item
                  key="1"
                  icon={<HomeFilled className="icon-default" />}
                >
                  <Link to="/">
                    <span>Tra cứu</span>
                  </Link>
                </Menu.Item>

                <Menu.Item
                  key="2"
                  icon={<ZhihuSquareFilled className="icon-default" />}
                >
                  <Link to="/translate">
                    <span>Dịch</span>
                  </Link>
                </Menu.Item>

                <Menu.Item
                  key="3"
                  icon={<CheckCircleFilled className="icon-default" />}
                >
                  <Link to="/grammar">
                    <span>Ngữ pháp</span>
                  </Link>
                </Menu.Item>

                <Menu.Item
                  key="4"
                  icon={<BookFilled className="icon-default" />}
                >
                  <Link to="/myword">
                    <span>Từ của tôi</span>
                  </Link>
                </Menu.Item>

                <Menu.Item
                  key="5"
                  icon={<ProfileFilled className="icon-default" />}
                >
                  <Link to="/myinfo">
                    <span>Thông tin</span>
                  </Link>
                </Menu.Item>

                <Menu.Item
                  key="6"
                  // icon={}
                >
                  <Popconfirm
                    title="Bạn chắc chưa?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <span className="logout">Đăng xuất</span>
                  </Popconfirm>
                </Menu.Item>
              </Menu>
            </div>
          </Header>
        ) : (
          <div>
            <Header
              id="header"
              style={{ position: "fixed", zIndex: 1, width: "100%" }}
            >
              <div className="header-content-default">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="./cropped-logo-3.png"
                      border="0"
                      alt="logo"
                      className="logo-dict"
                    ></img>
                  </Link>
                </div>

                <Menu className="menu" mode="horizontal">
                  <Menu.Item
                    key="1"
                    icon={<HomeFilled className="icon-default" />}
                  >
                    <Link to="/">
                      <span>Tra cứu</span>
                    </Link>
                  </Menu.Item>

                  <Menu.Item
                    key="2"
                    icon={<ZhihuSquareFilled className="icon-default" />}
                  >
                    <Link to="/translate">
                      <span>Dịch</span>
                    </Link>
                  </Menu.Item>

                  <Menu.Item
                    key="3"
                    icon={<CheckCircleFilled className="icon-default" />}
                  >
                    <Link to="/grammar">
                      <span>Ngữ pháp</span>
                    </Link>
                  </Menu.Item>

                  {/* <Menu.Item
                    key="4"
                    icon={<BookFilled className="icon-default" />}
                  >
                    <Link to="/myword">
                      <span>Từ của tôi</span>
                    </Link>
                  </Menu.Item> */}

                  <Menu.Item
                    key="4"
                    // icon={}
                  >
                    <Link to="/login">
                      <span>Đăng nhập</span>
                    </Link>
                  </Menu.Item>

                  <Menu.Item
                    key="5"
                    // icon={}
                  >
                    <Link to="/signup">
                      <span>Đăng ký</span>
                    </Link>
                  </Menu.Item>
                </Menu>
              </div>
            </Header>
          </div>
        )}
      </Layout>
    </div>
  );
}

export default Header;
