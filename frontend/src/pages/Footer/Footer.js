import React from "react";
import { Layout, Typography, Space } from "antd";

function Footer() {
  const { Footer } = Layout;
  const { Text } = Typography;

  return (
    <Layout>
      <Footer style={{ textAlign: "center" }}>
        <Space direction="vertical">
          <Text strong>1. Đào Mạnh Thắng - MSSV: 20184193</Text>
          <Text strong>2. Trần Thăng Đức - MSSV: 20184076</Text>
          <Text strong>3. Trần Hoàng Long Hải - MSSV: 20184090</Text>
        </Space>
      </Footer>
    </Layout>
  );
}

export default Footer;
