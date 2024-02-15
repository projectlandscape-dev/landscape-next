import React from "react";
const Banner = dynamic(()=>import("../components/banners/banner"))
const LayoutJs = dynamic(()=>import("../components/layoutJs"))
const ReferForm = dynamic(()=>import("../components/Forms/ReferForm"))
const StepsToRefer = dynamic(()=>import("../components/Sections/stepsToRefer"))
const MainTestimonials = dynamic(()=>import("../components/testimonials/mainTestimonials"))
const Seo = dynamic(()=>import("../components/seo"))
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const Container = dynamic(()=>import("../components/layoutComponents").then((module)=>module.Container));
const FlexMobileOpp = dynamic(()=>import("../components/layoutComponents").then((module)=>module.FlexMobileOpp));
const Section = dynamic(()=>import("../components/layoutComponents").then((module)=>module.Section));
const ButtonPrimary = dynamic(()=>import("../components/buttons").then((module)=>module.ButtonPrimary));
const AllServicesBanner = dynamic(()=>import("../components/Services/AllServicesBanner"));
const Badges = dynamic(()=>import("../components/PageComponents/Badges/Badges"));
const Cta3 = dynamic(()=>import("../components/PageComponents/Cta3/Cta3"));
import styled from "styled-components";
import dynamic from "next/dynamic";

const Wrapper = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/patio-slider-1-3.webp"),
    rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`;

const AccordionStyle = {
  background: "var(--clr-accent)",
  borderRadius: "var(--br)",
  color: "var(--txt-light)",
  border: "none",
  padding: "3px",
};
const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5px;
`;

export default function ReferFriend() {
  return (
    <LayoutJs>
      <Seo
        title="Refer a Friend | Project Landscape Ltd."
        description="Refer a friend to project landscape and get $100 off!"
      />
      <Banner
        img="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/patio-slider-3-_1_-2-1.webp"
        title="invite your friends or family to our Calgary landscape refer a friend program"
        subheader=""
        description="Simply refer a family member or friend to our landscaping services, and if they become a customer, you'll receive a special reward as a token of our gratitude. We value your trust and confidence in us, and we believe that a referral from you is the ultimate form of praise. Thank you for considering recommending us to your friends and family."
      />
      <Container className="spacing mb-5 mt-5">
        <Text>
          <h3 className="title">PROJECT LANDSCAPES REFERRAL PROGRAM</h3>
        </Text>
        <p className="mt-4 leading-relaxed">
          Project Landscape's referral and loyalty program reflects our
          appreciation for client recommendations and ongoing trust. This
          initiative rewards clients with a $150 gift card for every new
          referral who signs up for a Project Landscape project, emphasizing the
          value the company places on word-of-mouth promotion. Such a reward
          system not only incentivizes existing clients to share their positive
          experiences with others but also shows the company's confidence in the
          quality and craftsmanship of its services. Moreover, Project Landscape
          extends this gratitude to repeat clients. For every additional project
          that a client contracts with them, whether it be a deck, patio,
          lighting, or any other outdoor living space, they receive the same
          $150 gift card. This approach not only acknowledges client loyalty but
          also encourages them to continue choosing Project Landscape for their
          future outdoor living space needs. By ensuring that both referrals and
          repeat projects receive the same high level of service that clients
          have experienced, Project Landscape reassures clients that their
          recommendations are valued. They can refer others with the peace of
          mind that these referrals will experience the same exceptional
          service. This strategy demonstrates Project Landscape's commitment to
          maintaining high standards in custom-designed and professionally built
          outdoor living solutions across Calgary and its surrounding areas.
          Through this program, Project Landscape not only fosters client
          loyalty but also strengthens its reputation in the community as a
          reliable and high-quality service provider.
        </p>
      </Container>
      <Cta3 />
      <Badges />
      <StepsToRefer />
      <ReferForm />
      <MainTestimonials />
      <Wrapper>
        <Section>
          <Container>
            <FlexMobileOpp>
              <Accordion className="spacing">
                <AccordionItem style={AccordionStyle}>
                  <h2>
                    <AccordionButton style={AccordionStyle}>
                      <Box
                        className="subheader"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        What is the Refer a Friend program for Project
                        Landscape?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Our Refer a Friend program is designed to reward our valued
                    customers for referring their friends, family, or colleagues
                    to our landscape services. When someone you refer becomes
                    our customer, both you and your friend can benefit from the
                    program.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={AccordionStyle}>
                  <h2>
                    <AccordionButton style={AccordionStyle}>
                      <Box
                        className="subheader"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        How does the Refer a Friend program work for Project
                        landscape?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    It's simple! As an existing customer, you sign up for our
                    Refer a Friend program and receive a unique referral code or
                    link. Share this code or link with your friends who are
                    interested in our landscape services. When they become our
                    customers and mention your referral code, both you and your
                    friend will receive a special reward.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem style={AccordionStyle}>
                  <h2>
                    <AccordionButton style={AccordionStyle}>
                      <Box
                        className="subheader"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Is there a limit to the number of referrals I can make?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    No, there is no limit to the number of referrals you can
                    make. We appreciate your support in spreading the word about
                    our landscaping services, and we want to reward you for
                    every successful referral.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem style={AccordionStyle}>
                  <h2>
                    <AccordionButton style={AccordionStyle}>
                      <Box
                        className="subheader"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Can I refer someone who has already been in contact with
                        your company?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    To be eligible for the referral program, the person you
                    refer should not have had any prior contact or engagement
                    with Project landscape before you referred them. The
                    referral should be a new customer for us.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <div className="spacing">
                <div>
                  <p className="subheader tan">learn from the leaders</p>
                  <h2 className="title">
                    Calgary refer a friend landscape program FAQs
                  </h2>
                </div>

                <p>
                  Looking for information on our refer a friend program in
                  Calgary? Discover answers to common questions about our
                  program that benefits you and your friend or family member.
                  Get the insights you need for your next project, all in one
                  convenient place. Start exploring our Calgary FAQ page today!
                </p>
                <ButtonPrimary href="/contact">get started</ButtonPrimary>
              </div>
            </FlexMobileOpp>
          </Container>
        </Section>
      </Wrapper>
      <AllServicesBanner />
    </LayoutJs>
  );
}
