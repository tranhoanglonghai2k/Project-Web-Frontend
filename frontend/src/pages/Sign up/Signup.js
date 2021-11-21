import React from "react";
import { Layout } from "antd";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function Signup() {
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
          <RegistrationForm />
        </div>
      </Content>
    </Layout>
  );
}

export default Signup;
