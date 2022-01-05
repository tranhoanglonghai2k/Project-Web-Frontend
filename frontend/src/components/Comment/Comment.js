import React, { useState, useEffect } from "react";
import { Table, Button, Space, Modal, Form, Input } from "antd";
import { END_POINT } from "../../config";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

function Comment() {
  const [table, setTable] = useState({
    loading: false,
    data: [],
  });
  const [update, setUpdate] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async (id, type) => {
    console.log(token, id, type);
    await axios
      .post(
        END_POINT + "/api/remove-contribution",
        { word_id: id, type: type },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setUpdate(!update);
      });
  };

  const columns = [
    {
      title: "Word",
      dataIndex: "word",
      key: "word",
    },
    {
      title: "Example",
      dataIndex: "content",
      key: "content",
    },

    {
      title: "Mean of Example",
      dataIndex: "content_mean",
      key: "content_mean",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={showModal}
            // onClick={() => {
            //   console.log(record.word);
            // }}
          >
            Update
          </a>

          <Modal
            title="Cập nhật"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button className="btn-default" onClick={handleCancel}>
                Huỷ
              </Button>,
              <Button
                key="submit"
                htmlType="submit"
                type="primary"
                className="btn-default"
                onClick={handleOk}
              >
                Xác Nhận
              </Button>,
            ]}
          >
            <div style={{ width: "80%" }}>
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
                autoComplete="off"
              >
                <Form.Item
                  label="Example"
                  name="Example"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Example!",
                    },
                  ]}
                >
                  <Input allowClear />
                </Form.Item>

                <Form.Item
                  label="Mean"
                  name="Mean"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Mean!",
                    },
                  ]}
                >
                  <Input allowClear />
                </Form.Item>
              </Form>
            </div>
          </Modal>

          <a onClick={() => handleDelete(record.id, record.type)}>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    setTable({ loading: true });
    axios
      .get(END_POINT + "/api/get-my-contribution", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let data = res.data.list;
        const dataSource = [];
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            dataSource.push(
              new Object({
                key: i + "",
                id: data[i].word_id,
                type: data[i].type,
                word: data[i].word,
                content: data[i].content,
                content_mean: data[i].content_mean,
                date: data[i].day,
              })
            );
          }
        }
        setTable({ loading: false, data: dataSource });
      });
  }, [update]);
  return (
    <div>
      <Table
        loading={table.loading}
        columns={columns}
        dataSource={table.data}
      />
    </div>
  );
}

export default Comment;
