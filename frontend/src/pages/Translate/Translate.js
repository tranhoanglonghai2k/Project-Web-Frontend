import React from "react";
import { Layout } from "antd";

function Translate() {
  const { Content } = Layout;

  return (
    <div>
      <Layout>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 2400, marginTop: 54 }}
          >
            Translate
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Translate;
