import React from "react";
import { Section, Container } from "../../layoutComponents";
import styled from "styled-components";

const TableWrapper = styled.div`
  margin-top: 20px;
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    overflow: hidden;
    display: inline-block;
  }

  th,
  td {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 20px;
    text-align: center;
    position: relative;
    width: 5%;
  }

  td:hover::after {
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.7);
    transition: box-shadow 0.3s ease;
    content: "";
    height: 10000px;
    left: 0;
    position: absolute;
    top: -5000px;
    width: 100%;
    z-index: 1;
  }

  th {
    background-color:  var(--clr-accent);
    color: white;
  }

  th.project-guarantee {
    background-color: #5CFF5C;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .status-column {
    text-align: center;
    font-size: 18px;
  }

  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #5CFF5C;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }

  .circle-question {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #808080;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;
const TableCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export default function TableChart() {
  return (
    <Section>
      <Container className="spacing-md">
        <TableCenter>
          <TableWrapper>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="project-guarantee">Project landscape</th>
                  <th>Deck Contractors</th>
                  <th>Landscape Contractors</th>
                  <th>Architects / Designers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Handle Permit Process</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className="circle-question">?</div>
                  </td>
                  <td className="status-column">
                  <div className="circle-question">?</div>
                  </td>
                  <td className="status-column"></td>
                </tr>
                <tr>
                  <td>Professional Drawings</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className="circle-question">?</div>
                  </td>
                  <td className="status-column">
                  <div className="circle-question">?</div>
                  </td>
                  <td className="status-column">
                  <div className="circle">✓</div>
                  </td>
                </tr>
                <tr>
                  <td>Design Consultation</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className="circle-question">?</div>
                  </td>
                  <td className="status-column">
                  <div className="circle-question">?</div>
                  </td>
                  <td className="status-column">
                  <div className="circle">✓</div>
                  </td>
                </tr>
                <tr>
                  <td>Material Suggestions</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className="circle-question">?</div>
                  </td>
                  <td className="status-column">
                  <div className="circle-question">?</div>
                  </td>
                  <td className="status-column">
                    <div className="circle-question">?</div>
                  </td>
                </tr>
                <tr>
                  <td>First Class Customer Service</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column"></td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className="circle-question">?</div>
                  </td>
                  <td className="status-column">
                  <div className="circle-question">?</div>
                  </td>
                  <td className="status-column"></td>
                </tr>
                <tr>
                  <td>Financing</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column"></td>
                </tr>
                <tr>
                  <td>Project Guarantee</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column"></td>
                </tr>
                <tr>
                  <td>Certified & Backed By Suppliers</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column"></td>
                </tr>
                <tr>
                  <td>Cost Savings</td>
                  <td className="status-column">
                    <div className="circle">✓</div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column">
                    <div className=""></div>
                  </td>
                  <td className="status-column"></td>
                </tr>
              </tbody>
            </table>
          </TableWrapper>
        </TableCenter>
      </Container>
    </Section>
  );
}
