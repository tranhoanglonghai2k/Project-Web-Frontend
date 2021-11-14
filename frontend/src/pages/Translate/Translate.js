import React from "react";
import { Layout } from "antd";
import { SelectLanguage } from "../../components/SelectLanguage/SelectLanguage";

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
            <SelectLanguage />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Translate;
