import React, { useState } from "react";
import styled from "styled-components";
import { Container, Section, Flex } from "components/layoutComponents";
import Image from "components/Image";

const Text = styled.div``;

const Img = styled.div`
  figure {
    div {
      box-shadow: -20px 20px 0px 1px var(--clr-accent);
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
  flex-wrap: wrap;
  padding: 20px;
  width: fit-content;
  margin: 30px auto 30px;
`;

const TabButton = styled.button`
  padding: 16px 25px;
  cursor: pointer;
  border: none;
  color: ${(props) => (props.active ? "#2a7c1a" : "blaack")};
  // background-color: ${(props) => (props.active ? "green" : "transparent")};
  background-color: transparent;
  border-bottom: ${(props) =>
    props.active ? "2px solid #2a7c1a" : "2px solid #ddd"};

  margin: 0 5px;
  outline: none;
  font-weight: 500;
  white-space: wrap;
  // border-bottom: 2px solid #ddd;

  // &:hover {
  //   background-color: green;
  //   color: white;
  // }
`;

const TabContent = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

export default function TabProcess2({ tabName, title }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section>
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
              <Flex className="gap-4">
                <Img>
                  <Image
                    className="stretch"
                    alt={item?.image?.altText || ""}
                    src={item?.image?.sourceUrl}
                  />
                </Img>
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
              </Flex>
            </TabContent>
          );
        })}
      </Container>
    </Section>
  );
}
