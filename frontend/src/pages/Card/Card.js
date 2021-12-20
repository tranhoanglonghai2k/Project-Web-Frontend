import React from "react";
import { FlashcardComponent } from "react-flashcard";
import { Layout, Typography } from "antd";

function Card() {
  const { Content } = Layout;
  const { Title } = Typography;

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
        <div className="site-layout-background">
          <div className="container">
            <h3 className="title-comm">
              <span className="title-holder title">Học từ mới</span>
            </h3>

            <FlashcardComponent dataSource={cardData} />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Card;
