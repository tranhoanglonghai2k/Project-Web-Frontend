import React from "react";
import { Layout } from "antd";
import LoginForm from "../../components/LoginForm/LoginForm";

function Login() {
  const { Content } = Layout;

  return (
    <Layout>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 2400, marginTop: 54 }}
        >
          <LoginForm />
        </div>
      </Content>
    </Layout>
  );
}

export default Login;
