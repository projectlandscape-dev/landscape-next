import { Section, Container, GridAuto } from "components/layoutComponents";
import React from "react";
import Styles from "./ProcessArea.module.scss";

export default function ProcessArea({ title, addProcess }) {
  return (
    <div className={Styles.wrapper}>
      <Section>
        <div className={Styles.boxStyle}>
          <h2 className="title">{title}</h2>
          <ul className={Styles.orderStyle}>
            {addProcess?.map((item) => {
              return (
                <li className={Styles.listStyle}>
                  <h2 className={Styles.pointStyle}>{item?.itemNumber}</h2>
                  <div className={Styles.desStyle}>
                    <h3>{item?.title}</h3>

                    <div
                      className={Styles.description}
                      dangerouslySetInnerHTML={{
                        __html: `${item.description}`,
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </div>
  );
}
