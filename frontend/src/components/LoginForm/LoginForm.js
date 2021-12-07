import React, { useState } from "react";
import AuthService from "../AuthService/AuthService ";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./LoginForm.css";

const LoginForm = () => {
  const { Title } = Typography;

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [form] = Form.useForm();

  function handleChange(values) {
    const id = values.target.id;
    const array = id.split("_");

    setLogin({
      ...login,
      [array[2]]: values.target.value,
    });
  }
  function handleSubmit(e) {
    console.log(login);
    AuthService.login(login.username, login.password);
  }

  return (
    <div className="login-form">
      <Title className="title">Đăng nhập</Title>

      <div
        style={{
          marginTop: "40px",
        }}
      >
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              allowClear
            />
          </Form.Item>

          <Form.Item
            name="password"
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              allowClear
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a
              href="https://www.google.com/"
              className="link-css login-form-forgot"
            >
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleSubmit}
            >
              Log in
            </Button>

            <div style={{ marginLeft: "15px", fontSize: "20px" }}>
              Or
              <Link
                to="/signup"
                style={{ marginLeft: "15px" }}
                className="link-css"
              >
                Register now!
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
