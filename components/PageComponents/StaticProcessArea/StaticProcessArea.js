import React from "react";
import dynamic from "next/dynamic";
import Styles from "./StaticProcess.module.scss";
import Image from "next/image";
const Section = dynamic(() =>
  import("components/layoutComponents").then((module) => module.Section)
);

export default function StaticProcessArea() {
  return (
    <div className={Styles.wrapper}>
      <Image
        className={Styles.image_3}
        src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/outdoor-kitchen.webp"
        alt="static process Image"
        width={500}
        height={500}
        quality={50}
      />
      <div className={Styles.bgoverlay}></div>
      <Section>
        <div className={Styles.boxStyle}>
          <h2 className="title">
            Attention to Detail Every Step of the Process
          </h2>
          <ul className={Styles.orderStyle}>
            <li className={Styles.listStyle}>
              <h2 className={Styles.pointStyle}>1</h2>
              <div className={Styles.desStyle}>
                <h3>Initiating Customer Engagement</h3>
                <p>
                  This initial step invites customers to connect with us.
                  Whether through a contact form, phone call, or email, we
                  emphasize the ease and importance of reaching out to discuss
                  their needs and how we can assist in realizing their vision.
                </p>
              </div>
            </li>
            <li className={Styles.listStyle}>
              <h2 className={Styles.pointStyle}>2</h2>
              <div className={Styles.desStyle}>
                <h3>Design Phase</h3>

                <p>
                  Once contact is made, we enter the design phase. This involves
                  collaborative brainstorming sessions, where we listen to the
                  customer's ideas and provide our expertise. We create initial
                  designs and refine them based on customer feedback, ensuring
                  their vision is captured accurately.
                </p>
              </div>
            </li>
            <li className={Styles.listStyle}>
              <h2 className={Styles.pointStyle}>3</h2>
              <div className={Styles.desStyle}>
                <h3>Material Selections</h3>

                <p>
                  In this step, we guide customers through selecting the right
                  materials for their project. This includes presenting various
                  options, discussing the pros and cons of each, and providing
                  recommendations based on the project’s requirements and the
                  customer's preferences.
                </p>
              </div>
            </li>
            <li className={Styles.listStyle}>
              <h2 className={Styles.pointStyle}>4</h2>
              <div className={Styles.desStyle}>
                <h3>Installation Stage</h3>

                <p>
                  Here, we detail our installation process. We emphasize the
                  professionalism and efficiency of our team, assuring customers
                  of minimal disruption and high-quality work. This stage also
                  includes timelines, safety protocols, and our commitment to
                  meeting the agreed-upon specifications
                </p>
              </div>
            </li>
            <li className={Styles.listStyle}>
              <h2 className={Styles.pointStyle}>5</h2>
              <div className={Styles.desStyle}>
                <h3>Walkthrough & Education</h3>

                <p>
                  The final step on your homepage is the walkthrough and
                  education. After project completion, we take customers through
                  the finished work, explaining its features and how to maintain
                  them. We encourage questions, ensuring customers are fully
                  satisfied and confident in managing their new installation.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
