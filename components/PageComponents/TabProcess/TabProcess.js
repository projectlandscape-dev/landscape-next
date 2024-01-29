import React, { useState } from "react";
import styled from "styled-components";
import { Container, Flex } from "components/layoutComponents";
import Image from "components/Image";

const Text = styled.div``;

const Img = styled.div`
  figure {
    div {
      box-shadow: 20px 20px 0px 1px var(--clr-accent);
      img {
        height: 500px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 20px;
  width: fit-content;
  margin: 30px auto 30px;
`;

const TabButton = styled.button`
  padding: 16px 25px;
  cursor: pointer;
  border: none;
  color: ${(props) => (props.active ? "white" : "blaack")};
  background-color: ${(props) => (props.active ? "green" : "transparent")};
  border-radius: 38px;
  margin: 0 5px;
  outline: none;
  white-space: wrap;

  &:hover {
    background-color: green;
    color: white;
  }
`;

const TabContent = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

export default function TabProcess({ tabName, title, color }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        padding: "4em 0",
        background: color || "unset",
      }}
    >
      <center>
        <h2 className="title">{title}</h2>
      </center>
      <Container>
        <TabContainer>
          {tabName?.map((item, index) => {
            return (
              <TabButton
                active={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {item.tabTitle}
              </TabButton>
            );
          })}
        </TabContainer>
        {tabName?.map((item, index) => {
          return (
            <TabContent active={activeTab === index}>
              <Flex>
                <Text className="spacing">
                  <div>
                    <h2 className="title">{item.title}</h2>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item.body}`,
                    }}
                  ></div>
                </Text>
                <Img>
                  <Image
                    className="stretch"
                    alt={item?.image?.altText || ""}
                    src={item?.image?.sourceUrl}
                  />
                </Img>
              </Flex>
            </TabContent>
          );
        })}
      </Container>
    </div>
  );
}
