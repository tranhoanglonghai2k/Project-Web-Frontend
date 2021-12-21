import React from "react";
import { Form, Input, Button } from "antd";

function ChangPassword() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "50px 0",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 10,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Current Password"
          name="currentpassword"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password allowClear />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newpassword"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password allowClear />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password allowClear />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="btn-default">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ChangPassword;
