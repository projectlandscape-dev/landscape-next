import React from "react";

import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "components/buttons";

const WhiteBanner = ({ title }) => {
  return (
    <section>
      <center>
        <h2>{title}</h2>
      </center>
    </section>
  );
};

export default WhiteBanner;
