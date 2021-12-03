import React, { useState } from "react";
import { Form, Input, Typography, Button } from "antd";
import AuthService from "../AuthService/AuthService ";
import "./RegistrationForm.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const { Title } = Typography;

  const [form] = Form.useForm();

  const [regis, setRegis] = useState({
    username: "",
    email: "",
    password: "",
    // confirm: "",
  });

  function handleChange(values) {
    const id = values.target.id;
    const array = id.split("_");

    setRegis({
      ...regis,
      [array[1]]: values.target.value,
    });
  }

  function handleSubmit(e) {
    AuthService.register(regis.username, regis.email, regis.password);
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="mglr-100">
      <Title className="title">Đăng ký</Title>

      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          onChange={handleChange}
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
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
          name="username"
          onChange={handleChange}
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickn1ame!",
              whitespace: true,
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
