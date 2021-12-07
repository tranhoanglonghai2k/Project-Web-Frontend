import React from "react";
import { Descriptions } from "antd";

function UserInfo() {
  return (
    <div>
      <Descriptions layout="vertical" size="small" title="User Info">
        <Descriptions.Item label="UserName" labelStyle={{ fontSize: "20px" }}>
          <span style={{ fontSize: "25px" }}>Zhou Maomao</span>
        </Descriptions.Item>
        <Descriptions.Item label="Email" labelStyle={{ fontSize: "20px" }}>
          <span style={{ fontSize: "25px" }}>1810000000</span>
        </Descriptions.Item>
        <Descriptions.Item label="Password" labelStyle={{ fontSize: "20px" }}>
          <span style={{ fontSize: "25px" }}>Hangzhou, Zhejiang</span>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default UserInfo;
