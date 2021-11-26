import React from "react";
import { FlashcardComponent } from "react-flashcard";
import { Layout } from "antd";

function MyWord() {
  const { Content } = Layout;

  const cardData = [
    {
      front: {
        text: "living outside, often in a tent",
        image: "https://o.quizlet.com/RWRdgDus.uuqNDUrJ0ernA.jpg",
      },
      back: {
        text: "Camping",
      },
    },
  ];

  return (
    <Layout>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: "64px" }}
      >
        <div
          className="site-layout-background"
          style={{ padding: "24px", minHeight: "2400px", marginTop: "54px" }}
        >
          <FlashcardComponent dataSource={cardData} />
        </div>
      </Content>
    </Layout>
  );
}

export default MyWord;
