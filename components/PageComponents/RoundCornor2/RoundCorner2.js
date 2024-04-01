import React from "react";
import Image from "next/image";
import { Section, Container } from "../../layoutComponents";
import styles from "./RoundCornor2.module.scss";
import styled from "styled-components";

const StyledTitle = styled.div`
  border: 2px solid #093057;
  background-color: #093057;
  color: #fff;
  padding: 10px;
`;
const RoundCorner2 = ({ title, roundedSections }) => {
  return (
    <Section>
      <Container>
        <center>
          <StyledTitle>
            <h1 className="title">{title}</h1>
          </StyledTitle>
        </center>
        {roundedSections.map((item) => {
          return (
            <>
              <div className={styles.Box}>
                <div className={styles.imgSection}>
                  <Image
                    className={styles.leftImg}
                    src={item?.image?.sourceUrl}
                    alt={item?.image?.altText}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.contentSection}>
                  <div>
                    <h2 className="subheader">{item.title}</h2>
                    <h3
                      className="subheader accent"
                      style={{ fontSize: "15px" }}
                    >
                      {item.subheader}
                    </h3>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item?.description}`,
                    }}
                  />
                  <div className={styles.table_container}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          {item?.tableHeaders?.map((Theader) => {
                            return <th>{Theader?.tableColName}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {item?.tableData?.map((tItem) => {
                            return <td>{tItem?.tableRow}</td>;
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Container>
    </Section>
  );
};

export default RoundCorner2;
