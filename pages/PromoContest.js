import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Section, Container, Flex } from "../components/layoutComponents";
import { Label, Input, Submit, TextArea } from "../components/Forms/FormItems";
import { TfiReload } from "react-icons/tfi";
import Link from "next/link";
import RulesAndRegulation from "../components/RulesAndRegulation.js/RulesAndRegulation";
import LayoutJs from "../components/layoutJs";
import Image from "next/image";

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
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
display : flex;
align-item:center;
justify-content:center;
gap : 0.7em;
`
export default function PromoContest() {
  const [consentChecked, setConsentChecked] = useState(false);
  const [captchaResult, setCaptchaResult] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [num2, setNum2] = useState(0);
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaResult(num1 + num2);
    setNum2(num2);
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

    if (consentChecked && userAnswerInt === captchaResult - num2) {
      setCaptchaError("");
    } else {
      setCaptchaError("Incorrect captcha. Please try again.");
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
              <Flex style={{width:'60%'}}>
                <Contact>
                  <Image
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/call1.png"
                    alt=" Phone"
                    width={25}
                    height={25}
                    loading="lazy"
                  />
                  <span>4032574059</span>
                </Contact>
                <Contact>
                  <Image
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/LINK-1.png"
                    alt="link"
                    width={25}
                    height={25}
                    loading="lazy"
                  />
                  <Link href="#" style={{ color: "black" }}>
                    projectlandscape.ca
                  </Link>
                </Contact>
                <Contact>
                    <Image 
                    src='https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/insta.png'
                    alt="instagram"
                    width={25}
                    height={25}
                    />
                  <Link href="https://www.instagram.com/" target="_blank">
                    https://instagram.com
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
                {consentChecked && !captchaSolved && (
                  <center>
                    <Flex className="spacing-sm" style={{ width: "70%" }}>
                      <Label htmlFor="captcha">{`${captchaResult} - ${num2} = `}</Label>
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
                {/* <div className="spacing-sm">
              <Link href="#">Terms and condition</Link>
            </div> */}
              </form>
            </FormWrapper>
            <RulesAndRegulation />
          </Wrapper>
        </Container>
      </Section>
    </LayoutJs>
  );
}
