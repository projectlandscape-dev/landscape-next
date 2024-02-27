import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";
const Section = dynamic(() =>
  import("../components/layoutComponents").then((module) => module.Section)
);
const Container = dynamic(() =>
  import("../components/layoutComponents").then((module) => module.Container)
);
const Flex = dynamic(() =>
  import("../components/layoutComponents").then((module) => module.Flex)
);
const Label = dynamic(() =>
  import("../components/Forms/FormItems").then((module) => module.Label)
);
const Input = dynamic(() =>
  import("../components/Forms/FormItems").then((module) => module.Input)
);
const TextArea = dynamic(() =>
  import("../components/Forms/FormItems").then((module) => module.TextArea)
);
const Submit = dynamic(() =>
  import("../components/Forms/FormItems").then((module) => module.Submit)
);
import { TfiReload } from "react-icons/tfi";
const RulesAndRegulation = dynamic(() =>
  import("../components/RulesAndRegulation.js/RulesAndRegulation")
);
const LayoutJs = dynamic(() => import("../components/layoutJs"));

const FormWrapper = styled.div`
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  label {
    text-transform: capitalize;
    margin-left: 2px;
  }
`;
const Wrapper = styled.div`
  padding: 6em 0;
`;
const Contact = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  gap: 0.7em;
`;
export default function PromoContest() {
  const [consentChecked, setConsentChecked] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [Result, setResult] = useState(null);
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 2;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const num3 = Math.floor(Math.random() * 10) + 1;
    const result = num1 - num2 + num3;
    setResult(result);
    setCaptcha(`${num1} - ${num2} + ${num3}`);
  };

  const handleConsentChange = () => {
    setConsentChecked(!consentChecked);

    if (!consentChecked) {
      generateCaptcha();
      setCaptchaSolved(false);
    }
  };

  const handleCaptchaChange = (e) => {
    setUserAnswer(e.target.value);
    const userAnswerInt = parseInt(e.target.value);

    if (consentChecked && userAnswerInt === Result) {
      setUserAnswer("");
      setCaptchaError("");
      setCaptchaSolved(true);
    } else {
      setCaptchaError("Incorrect captcha. Please try again.");
      setCaptchaSolved(false);
    }
  };

  const handleReloadCaptcha = () => {
    generateCaptcha();
    setUserAnswer("");
    setCaptchaSolved(false);
    setCaptchaError("");
  };

  useEffect(() => {
    if (consentChecked) {
      generateCaptcha();
    }
  }, [consentChecked]);

  return (
    <LayoutJs>
      <Section>
        <Container>
          <Wrapper>
            <center>
              <Flex style={{ width: "60%" }}>
                <Contact>
                  <Image
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/call1.png"
                    alt=" Phone"
                    width={25}
                    height={25}
                  />
                  <Link
                    href="tel: 403 257 4059"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <span>4032574059</span>
                  </Link>
                </Contact>
                <Contact>
                  <Image
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/LINK-1.png"
                    alt="link"
                    width={25}
                    height={25}
                  />
                  <Link
                    href="https://projectlandscape.ca"
                    target="_blank"
                    style={{ color: "black" }}
                  >
                    projectlandscape.ca
                  </Link>
                </Contact>
                <Contact>
                  <Image
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/insta_transparent.png"
                    alt="instagram"
                    width={25}
                    height={25}
                  />
                  <Link
                    href="https://www.instagram.com/project__landscape/?hl=en"
                    target="_blank"
                    style={{ color: "black" }}
                  >
                    project__landscape
                  </Link>
                </Contact>
              </Flex>
            </center>
            <div className="mt-4">
              <h3 className="title center">
                <span className="italics accent">
                  The Ultimate Backyard Makeover Contest!
                </span>
              </h3>
            </div>
            <FormWrapper>
              <form
                name="contact"
                className="spacing"
                action="https://formspree.io/f/xeqygqgw"
                method="POST"
                enctype="multipart/form-data"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <Flex>
                  <div className="spacing-sm">
                    <Label htmlFor="name">* First Name:</Label>
                    <Input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Enter your First Name"
                      required
                    />
                  </div>
                  <div className="spacing-sm">
                    <Label htmlFor="email">* Last Name:</Label>
                    <Input
                      type="lastname"
                      name="lastname"
                      id="lastname"
                      placeholder="Enter your Last Name"
                      required
                    />
                  </div>
                </Flex>
                <div className="spacing-sm">
                  <Label htmlFor="phone">* Phone:</Label>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone number"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="phone">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>

                <div className="spacing-sm">
                  <Label htmlFor="phone">* Address:</Label>
                  <TextArea
                    type="address"
                    name="address"
                    id="address"
                    placeholder="Enter your Address"
                    required
                  />
                </div>

                <div className="spacing-sm">
                  <Label>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={consentChecked}
                      onChange={handleConsentChange}
                    />{" "}
                    I consent to receiving emails.
                  </Label>
                </div>
                <div className="spacing-sm">
                  <Label>
                    <input
                      type="checkbox"
                      name="consent"
                      // checked={consentChecked}
                      // onChange={handleConsentChange}
                    />{" "}
                    Followed project_landscape on instagram
                  </Label>
                </div>
                {consentChecked && !captchaSolved && (
                  <center>
                    <Flex className="spacing-sm" style={{ width: "70%" }}>
                      <Label htmlFor="captcha">{`${captcha} = `}</Label>
                      <Input
                        type="number"
                        name="captcha"
                        id="captcha"
                        placeholder="Enter the result"
                        value={userAnswer}
                        onChange={handleCaptchaChange}
                        required
                      />
                      <TfiReload size={30} onClick={handleReloadCaptcha} />
                    </Flex>
                    {captchaError && (
                      <div style={{ color: "red", marginTop: "8px" }}>
                        {captchaError}
                      </div>
                    )}
                  </center>
                )}
                {captchaSolved && (
                  <div className="spacing-sm">
                    <span role="img" aria-label="tick-mark">
                      ✅
                    </span>{" "}
                    Captcha Solved!
                  </div>
                )}
                <Submit type="submit" id="submit" value="submit" />
                <center>
                  <p
                    style={{ fontWeight: 600, fontSize: "30px", color: "red" }}
                  >
                    DON'T FORGET TO FOLLOW US ON INSTAGRAM
                  </p>
                </center>
                <center>
                  <p style={{ fontWeight: 600, fontSize: "30px" }}>
                    No purchase necessary
                  </p>
                </center>
              </form>
            </FormWrapper>
            <RulesAndRegulation />
          </Wrapper>
        </Container>
      </Section>
    </LayoutJs>
  );
}
