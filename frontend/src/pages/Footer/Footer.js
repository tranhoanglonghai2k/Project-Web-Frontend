import React from "react";
import { Layout } from "antd";

function Footer() {
  const { Footer } = Layout;

  return (
    <Layout>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Footer;
