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
    width: 10%;
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
    background-color: #174f7e;
    color: white;
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
    background-color: #3498db;
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

export default function TableChart() {
  return (
    <Section>
      <Container className="spacing-md">
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Project landscape</th>
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
                  <div className="circle">✓</div>
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
                  <div className="circle">✓</div>
                </td>
                <td className="status-column"></td>
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
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle-question">?</div>
                </td>
              </tr>
              <tr>
                <td>Material Suggestions</td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
              </tr>
              <tr>
                <td>First Class Customer Service</td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle-question">?</div>
                </td>
                <td className="status-column">
                  <div className="circle">✓</div>
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
                  <div className="circle">✓</div>
                </td>
                <td className="status-column"></td>
              </tr>
              <tr>
                <td>Financing</td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle-question">?</div>
                </td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column"></td>
              </tr>
              <tr>
                <td>Project Guarantee</td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle-question">?</div>
                </td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column"></td>
              </tr>
              <tr>
                <td>Certified & Backed By Suppliers</td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle-question">?</div>
                </td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column"></td>
              </tr>
              <tr>
                <td>Cost Savings</td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column">
                  <div className="circle">✓</div>
                </td>
                <td className="status-column"></td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </Container>
    </Section>
  );
}
