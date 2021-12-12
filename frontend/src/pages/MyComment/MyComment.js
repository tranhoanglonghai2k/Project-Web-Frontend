import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import Comment from "../../components/Comment/Comment";
// import "./MyInfo.css";

function MyComment() {
  const { Content, Sider } = Layout;
  const { Title } = Typography;

  return (
    <div>
      <Layout>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: "64px" }}
        >
          <div className="site-layout-background">
            <Title className="title">Bình luận của tôi</Title>

            <Layout style={{ padding: "24px 0", backgroundColor: "#fff" }}>
              <Sider style={{ backgroundColor: "#fff" }} width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["2"]}
                  style={{ height: "100%" }}
                >
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/myinfo">Thông tin</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<LaptopOutlined />}>
                    <Link to="/myinfo/mycomment">Đóng góp</Link>
                  </Menu.Item>
                </Menu>
              </Sider>

              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                <Comment />
              </Content>
            </Layout>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default MyComment;
