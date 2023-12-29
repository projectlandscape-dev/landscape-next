import React from "react";
import { Section } from "../../layoutComponents";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  background-color: #387d1c;
`;
const ProjectImage = styled.img`
  height: 350px;
  width: 350px;
`;
const Projects = ({ title, projects }) => {
  return (
    <Wrapper>
      <Section>
        <cneter>
          <h2 style={{ padding: "20px 0px" }}>{title}</h2>
        </cneter>

        <div
          style={{
            width: "80%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {projects.map((item) => {
            return (
              <Link href={item.link}>
                <ProjectImage src={item.sourceUrl} />
                <h2>{item.title}</h2>
              </Link>
            );
          })}
        </div>
      </Section>
    </Wrapper>
  );
};

export default Projects;
