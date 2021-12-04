import React from "react";
import { Layout } from "antd";
import Search from "../../components/Search/Search";

function Home() {
  const { Content } = Layout;

  return (
    <Layout>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: "64px" }}
      >
        <div
          className="site-layout-background"
          style={{ padding: "24px", minHeight: "2400px", marginTop: "54px" }}
        >
          <div className="container">
            <Search />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
