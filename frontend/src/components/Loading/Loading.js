import React from "react";
import { Spin } from "antd";
import { SettingFilled } from "@ant-design/icons";

function Loading() {
  const loadingIcon = <SettingFilled style={{ fontSize: 150 }} spin />;

  return (
    <div>
      <Spin indicator={loadingIcon} />
    </div>
  );
}

export default Loading;
