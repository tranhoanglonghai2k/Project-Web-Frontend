import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./MyInfo.css";

function MyInfo() {
  const { Content, Sider } = Layout;
  const { Title } = Typography;

  return (
    <div>
      <Layout>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: "64px" }}
        >
          <div
            className="site-layout-background"
            style={{ padding: "24px", minHeight: "2400px", marginTop: "54px" }}
          >
            <Title className="title">Thông tin cá nhân</Title>

            <Layout
              className="site-layout-background mglr-100"
              style={{ padding: "24px 0" }}
            >
              <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  style={{ height: "100%" }}
                >
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/myinfo">Thông tin</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<LaptopOutlined />}>
                    <Link to="/myinfo/mycomment">Đóng góp</Link>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<NotificationOutlined />}>
                    <Link to="/myinfo/mycontribute">Từ đã góp</Link>
                  </Menu.Item>
                </Menu>
              </Sider>

              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                Thông tin cá nhân Tên: email: Mật khẩu:
              </Content>
            </Layout>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default MyInfo;
