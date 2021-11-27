import React from "react";
import { Layout } from "antd";
import SavedSearch from "../../components/SavedSearch/SavedSearch";

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
          <SavedSearch />
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
