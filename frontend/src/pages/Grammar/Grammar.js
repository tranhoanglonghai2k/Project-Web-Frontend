import React from "react";
import Header from "../Header/Header";
import { Layout } from "antd";
import { CheckGrammar } from "../../components/CheckGrammar/CheckGrammar";

function Grammar() {
  const { Content } = Layout;
  return (
    <div>
      <Header />
      <Layout>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 2400, marginTop: 54 }}
          >
            <CheckGrammar />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Grammar;
