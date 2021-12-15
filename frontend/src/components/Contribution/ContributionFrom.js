import React, { useState, useEffect } from "react";
import { Form, Input, Button } from 'antd';
import axios from "axios";
import { END_POINT } from "../../config";

const ContributionFrom = ({word_id,lang}) => {
    const onFinish = (values) => {
        console.log('Success:', values);
        const type = lang == "anhviet" ? "en" : "vi"
        // axios.post(END_POINT + '/api/add-contribution',{
        //     "word_id":word_id,
        //     "type":type,
        //     "content":values.Example,
        //     "content_mean":values.Mean
        // }).then((res)=>{
        //      console.log(res.message);
        //})
        console.log({"word_id":word_id,
        "type":type,
        "content":values.Example,
        "content_mean":values.Mean})
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Example"
                name="Example"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Example!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Mean"
                name="Mean"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Mean!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default ContributionFrom;