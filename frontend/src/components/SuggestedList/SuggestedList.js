import React from "react";
import { List, Avatar } from "antd";
const items = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 5",
  },
  {
    title: "Ant Design Title 6",
  },
  {
    title: "Ant Design Title 7",
  },
];

function SuggestedList(props) {
  const data = props.word;
  console.log("data", data);
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <a href="https://ant.design">
                {item.word},{item.spell}
              </a>
            }
            description={item.means}
          />
        </List.Item>
      )}
    />
  );
}

export default SuggestedList;
