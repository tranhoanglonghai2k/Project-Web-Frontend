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
          style={{ padding: "0 50px", marginTop: "64px" }}
        >
          <div
            className="site-layout-background"
            style={{ padding: "24px", minHeight: "2400px", marginTop: "54px" }}
          >
            <div className="container">
              <SelectLanguage />
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Translate;
