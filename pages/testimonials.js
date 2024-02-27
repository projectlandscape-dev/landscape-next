import React from "react";
import styled from "styled-components";
import Link from "next/link";
import dynamic from "next/dynamic";
const LayoutJs = dynamic(() => import("../components/layoutJs"));
const Container = dynamic(() =>
  import("../components/layoutComponents").then((module) => module.Container)
);
const GridThree = dynamic(() =>
  import("../components/layoutComponents").then((module) => module.GridThree)
);
const Section = dynamic(() =>
  import("../components/layoutComponents").then((module) => module.Section)
);
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Banner = dynamic(() => import("../components/banners/banner"));
const Seo = dynamic(() => import("../components/seo"));

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
  color: var(--txt-dark);
  padding: 2em;
  border-radius: var(--br);
  box-shdaow: var(--shadow-bottom-light);
  height: 100%;
  a {
    text-decoration: underline;
    font-size: var(--fs-sm);
  }
`;

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  & * + * {
    margin-left: 2px;
  }
`;

const fontStyle = {
  color: "var(--clr-accent)",
};

const Review = React.memo((props) => {
  return (
    <Wrapper className="spacing mt-0">
      <FlexStars>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} style={fontStyle} />
        ))}
      </FlexStars>
      <p className="italics">"{props.review}"</p>
      <Flex>
        <div>
          <p className="subheader bold">{props.title}</p>
          <Flex>
            {" "}
            <FcGoogle size={35} />{" "}
            <p className="caps bold my-auto">{props.name}</p>
          </Flex>
          <Link
            href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
            target="_blank"
            className="accent"
          >
            Read more Google reviews &#8594;
          </Link>
        </div>
      </Flex>
    </Wrapper>
  );
});

export default function Reviews() {
  return (
    <LayoutJs>
      <Seo
        title="Landscape Testimonials | Project Landscape"
        description="Project Landscape was a wonderful choice of our landscaping project. It’s a new build and we love the result of from nothing to a beautiful front and back yard."
      />
      <Banner
        img="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-3.webp"
        title="customer testimonials"
        subheader="proven success"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title center">5-star reviews</h2>
          </Text>
          <GridThree className="spacing-md">
            <Review
              title="fence & gate"
              name="Shawn"
              review="Project Landscape was a wonderful choice of our landscaping project. It’s a new build and we love the result of from nothing to a beautiful front and back yard. The transformation was very impressive. It was done quickly and correctly. High level of customer service and smooth communications. We’ve got few quotes before giving the job to Project landscape, they are not the cheapest amount all, but truly the highest value. We are very happy with the entire process and results."
            />
            <Review
              title="backyard landscaping"
              name="larry"
              review="Project Landscape replaced all the surface boards on our 2-level deck and stairs with pressure treated boards. They also created some additional “walk ways” in our back yard by replacing grass with pea-gravel filled paths. Their workmanship and attention to detail was excellent, and they ensured that everything was “right”. Also appreciated their detailed quotation — really helped us to fine-tune the work we wanted done — and happily answered all our questions. Highly recommend these folks for deck design and installation."
            />
            <Review
              title="fence installation"
              name="jerry"
              review="Great experience overall. The work scope was executed to perfection and the team(s) were very efficient without jeopardizing quality. The work ethic and professionalism was top notch, very friendly, accommodating, and team’s workmanship and pride in their deliverable s was one of the best. Special thanks to Scott and Ryan from Operations and Alison at the office! We are already lining up our next project for the spring and would recommend Project Landscape for anyone looking for their services."
            />
            <Review
              title="backyard patio"
              name="kurt"
              review="Allison and Scott were a pleasure to work with. There were some delays and mix-ups during the process. I assume it was because they’re handling a lot of different customers. The patio looks great! I was happy with how well they fit the blocks around the window well. I had to pick a bunch of rocks out of the lawn before I mowed, unfortunately, and there were skid marks left on the driveway from the bobcat."
            />
            <Review
              title="patio and backyard landscaping"
              name="steve"
              review="Everyone at Project Landscape was professional and responsive to queries and clarifications. And their pricing was very reasonable. There appeared to be some moments of miscommunication between some people at the company during the rush to get my project underway during a short window of good weather in the middle of many consecutive days of rain, but in the end, everyone at Project Landscape came through and did a fantastic job on my project. All the work was done in one day with a large team to take advantage of the good weather. Franz did a great job with his crew, and I am very happy with the results. Everything was built exactly as I wanted it, and there were zero deficiencies. I would gladly call them up again for my next project."
            />
            <Review
              title="backyard and frontyard landscaping"
              name="monica"
              review="Excellent and speedy work. Weather was a huge factor in our project and never seemed to work in our favor. However once the weather broke a full crew came to tackle our renovation. From removal of over grown weeds, patio installation, new sod, garden bed installation, trees being planted and walkway from side of house this work was done in 2 days. I was amazed at how quickly this was done maintaining the standard of work from the very beginning. Communication was a big plus for me as well as Alison in the office was always quick to reply and was very professional and a delight to talk to. We even had a change in design concept from our original plan after the work was done. The crew was able to come back out and fix this for us. Again very professional and quick. Scott and the team are amazing at what they do even advising on the best options for our space. I would not hesitate to hire them again for our next project."
            />
            <Review
              title="gardening and landscape"
              name="maureen"
              review="Scott’s crew worked on my yard when I moved into my house in 2017. They dug flower beds, planted shrubs and trees, installed a fire pit and supplied topsoil. In 2018 his carpenters designed and constructed a privacy screen/flower wall on one side of my deck. It holds 60 pots of fragrant blooms and looks fantastic. When one of my trees was bending dangerously Scott sent his men to stake it up at no charge. His company does quality work and the costs are reasonable. If I need any more landscaping done, I will call Project Landscape Ltd."
            />
            <Review
              title="fire pit patio"
              name="Carlos from Calgary"
              review="Project landscaping did a great patio project for us.
              They were very professional, paid special attention to detail, they finished the job in a timely manner. I recommend them to anyone who is looking for a professional and responsible company."
            />
            <Review
              title="quality work"
              name="Melanie"
              review="After reaching out to several landscaping companies, we opted to go with Project Landscape. We were in a new home and looking to have a complete side and backyard landscape. The price quoted was reasonable and Scott had great ideas and suggestions on how to make our yard most functional.
              We were working against the weather (this project was done in late October/November) but everything was completed as promised. They were patient and professional with us while we made several changes an inquiries along the way.
              Overall, we couldn’t be happier with the finished result. Excellent quality work! Done on time and on budget. We are more than satisfied!"
            />
            <Review
              title="great communication"
              name="Richard C"
              review="Scott and his crew were a pleasure to work with. Great communication and professionalism from start to finish. Their advice and expertise were invaluable in creating the beautiful front yard we hoped for. We would definitely recommend Project Landscape!"
            />
            <Review
              title="excellent backyard landscaping"
              name="Sean S."
              review="Project Landscape Ltd. did an excellent job of landscaping my yard. Many things stood out that prompted me to take the time and write up a sincere and genuine 5-star review. I feel strongly that homeowners should consider Project Landscape for their landscaping needs, as this is the kind of business that I want to thrive and succeed in my hometown of Calgary. I am incredibly pleased with the way the conducted business and executed the work. I will definitely be ringing them up for any of my landscaping needs in the future. Project Landscape is in it to build relationships and gain return customers, which I appreciated. They demonstrated this by cleaning up, putting things back where they were supposed to go; these little things mattered. Ultimately I felt as though the end result was thorough and as if they were working on their own properties. As a first time house-owner (with a yard) I was pleased with Project Landscape!"
            />
            <Review
              title="very satisfied"
              name="Valarie B"
              review="We recently had work done in our backyard, and are very satisfied with the results! Their recommendations helped us achieve the yard we were looking for. Everyone we dealt with in the company was friendly and all displayed an excellent work ethic resulting in a high standard in the finished project. We’re so happy with how things turned out that we already have them booked for another project!"
            />
            <Review
              title="great work"
              name="Patricio C"
              review="Great work, all aligned to the original plan. The deck was done right away and on time. The rocks took a little longer. It was great to have a central person in an office (Allison) to talk to, opposed to calling a contractor that is working somewhere else and may or may not pick up the phone. That open line was key to us."
            />
            <Review
              title="scott and team were amazing"
              name="Bryn"
              review="Scott and Team did an amazing job with landscaping our new home. His crew were professional, friendly and did great work. I would highly recommend this company."
            />
            <Review
              title="highly recommend"
              name="J.W."
              review="Highly recommend! Found Project Landscape online and based on the reviews sent them an email. Alison called right away and advised me they could fit in a small privacy wall we needed constructed. Scott came out and gave a very reasonable quote. A couple weeks later the job was completed and looks great. Professional, responsive and a seamless process. Thanks Project Landscape!!"
            />
            <Review
              title="excellent communication and timeline"
              name="D.Mariash"
              review="We’ve used Project Landscape on several projects now. Communication, timelines and quality of work has been top notch. We highly recommend Scott and his crew!"
            />
            <Review
              title="great communication & professionalism"
              name="Z.Espinoza"
              review="Great communication and professionalism throughout. When we had any questions or concerns they were addressed accordingly. We found it really helpful to have one central individual we could address these with, Alison, thank you so much for making this process very easy. We had several quotes done and by far Project Landscaping truly was the only company that worked with us and our budget.
              We were incredibly impressed with the quality of work, our fence turned out amazing! We now have several of our neighbors looking to complete their fences with Project Landscaping. We will continue to recommend your company again and again."
            />
            <Review
              title="we highly recommend"
              name="B.Kerr"
              review="We had several quotes for our new home landscaping project, however Project Landscape was one of the very few companies to provide a detailed written quote. This transparency allowed us to make thoughtful adjustments based on our budget while maximizing our landscaping ideas. Scott was also very helpful, providing insight into design alternatives we hadn’t thought of, which turned out amazing. We managed to stay on budget and our completed project turned out better than we had imagined it could have. We enjoyed working with Scott and his team, they were personable and friendly, and easily made this project exciting and fun. We have since had many neighbours positively comment on our landscaping, which is satisfying for sure. We would definitely recommend Project landscape."
            />
            <Review
              title="lawn maintenance"
              name="Jo"
              review="Project Landscape has been a most reliable company looking after my lawn needs. They are very professional. When they leave after the mowing the area is completely cleaned up. I do appreciate being able to communicate with them and they have been very agreeable to my needs."
            />
            <Review
              title="lawn maintenance"
              name="Mat Wynn"
              review="Scott and Alison are amazing! They coordinated my landscape project and it turned out amazing. I would highly recommend them to family and friends."
            />
            <Review
              title="lawn maintenance"
              name="Shayne Seefeldt"
              review="Fantastic work from Project Landscape. From the original site visit and quote to our finalized work everything was professional. Great communication throughout. Great work by Scott, Allison and Mario!"
            />
            <Review
              title="lawn maintenance"
              name="Ariadna Rolo"
              review="I highly recommend Project Landscape for their exceptional work and the incredible team led by Mario and Pepe. They went above and beyond to bring my vision to life, creating a breathtaking outdoor space that exceeded my expectations.
              From the start, Project Landscape impressed me with their attentive approach and expert advice. Mario and Pepe's craftsmanship was impeccable, showcasing their extensive knowledge and experience. They flawlessly combined functionality and beauty, transforming my backyard into a paradise.
              Despite a few challenges along the way, Project Landscape handled them with efficiency and creativity. Mario and Pepe's problem-solving skills were exceptional, resulting in innovative solutions that surpassed my expectations. Their dedication to customer satisfaction was evident throughout the entire project.
              I wholeheartedly recommend Project Landscape to anyone in need of top-tier landscaping services. Their professionalism, reliability, and the expertise of their team members like Mario and Pepe make them the ideal choice for transforming your outdoor space.
              Thank you, Project Landscape, for turning my vision into a reality!"
            />
            <Review
              title="lawn maintenance"
              name="Yuriy Yakovenko"
              review="Great value for money, very responsive and accommodating people."
            />
            <Review
              title=" Mulching, Sod installation"
              name="Herbert Wang"
              review="Project Landscape did a great job reinstalling the sod and mulch in my front yard. The team handled everything professionally and used quality materials for the job. Would recommend!"
            />
            <Review
              title=" Mulching, Sod installation"
              name="Scott Thain"
              review="Very happy with the results of our patio installation! The guys came in and had it done in two days. Even though we requested it on very short notice in the middle of summer, they managed to fit us in in a reasonable time-frame. Would absolutely use them again!"
            />
            <Review
              title=" Mulching, Sod installation"
              name="Pamela sedore"
              review="Alison and Ryan the project coordinators were very helpful, friendly and professional.
              Carmen, Alfredo and Emilio who came and did the landscaping were extremely hard working, friendly, skilled, knowledgeable and professional. There were quite a few challenges with removal of tree roots and partial trunks. We made some changes along the way and they were very accommodating and did a superb job."
            />
            <Review
              title=" Walkway landscaping, Landscape design construction, Driveway landscaping"
              name="Info Estrela Design Studios"
              review="Working with Alison, Scott and the team at Project Landscape was a real pleasure. The team is professional, knowledgeable and exceeded my expectations. I will be using Project Landscape for all of my future landscaping projects and I highly recommend anyone do the same."
            />
            <Review
              title=" Walkway landscaping, Landscape design construction, Driveway landscaping"
              name="Urban Officiant"
              review="Alison and Scott from Project Landscape are amazing to work with. They helped us with bringing our vision for a backyard fire pit to life. Not only were they both super friendly but also efficient, professional and they delivered (over and above) what they promised. I wouldn't hesitate to use them for all my landscaping needs in the future and strongly recommend Project Landscape.
              Thank you Alison and Scott!!"
            />
            <Review
              title=" Walkway landscaping, Landscape design construction, Driveway landscaping"
              name=" Jordan Fleming"
              review="Thank you Scott, Alison, David, Dylan, and everyone else who contributed to making our vision a reality and ensuring we were happy. The craftsmanship and quality of the finished project is beyond our expectations. On top of that, each crew was extremely friendly, respected our home, and ensured nothing was damaged and made sure everything was cleaned up. I can tell these people take a lot of pride in their work, and we are happy we chose Project Landscape for our project."
            />
            <Review
              title="Landscape design construction, Patio design, Custom landscape design"
              name=" Ross Andersen"
              review="Project Landscape did an amazing job with our backyard. Very professional, highly recommended."
            />
            <Review
              title=" Landscape design construction, Outdoor step construction, Custom landscape design, Backyard landscaping"
              name="  Sandra Klis"
              review="After years of debating we finally took the step to redo our entire deck. It was a big investment for us so we wanted to make sure we went with the right company. We did our research and got multiple quotes and we loved the initial interactions with the Project Landscape team. Very professional, came on-site, discussed various option on how to do the deck, gave input but also allowed our vision to come to life. Once the quote details were sorted they got to work quickly on our new deck. The removed the entire old deck, did some landscaping to make way for the new deck, had a friendly and courteous team in to build the new deck, with a super strong foundation. We also made some small changes mid-project to add more lighting which they were easily able to accommodate. During the process their team explained each step and kept us updated to what would happen next. This was great so we knew what was happening and how things were progressing. The entire project was wrapped up within a few weeks and was done so well, better than we even imagined! The job site was left nice and tidy, ready for us to use right away. I included some before and after images as well. It was a great experience and we’re so happy we went with the Project Landscape team for our new deck. Would highly recommend Scott and Alison and their team!!!"
            />
            <Review
              title="Custom landscape design, Yard work"
              name="garth wildman"
              review="They did a major landscaping job next door to us, which entailed building a new concrete retaining wall. This destroyed my shrubs. They replaced my shrubs, and added cedar mulch as requested."
            />
            <Review
              title="Custom landscape design, Yard work"
              name="Erin Meyers"
              review="Project Landscape installed a small patio in my backyard earlier this year. Though the rain caused some delays their team was professional and helpful throughout the whole process. We are very happy with the finished product! "
            />
            <Review
              title="Patio design"
              name=" New Look Tony "
              review="Alison and the team were very professional! Always on time and attention to detail was greatly appreciated. "
            />
            <Review
              title="Yard work"
              name=" Nikki Dellosa "
              review="I just wanted to reach out and say Thank you!
              The work was completed well, all the guys were great to deal with, and our yard looks fantastic. They are easy to work with, consistent, and good at what they do. Their costs are very fair. They are also very responsive and address any issue that comes up in a timely manner. Scott is easy to work with, he listens to our requests.
              The Project landscape was courteous to our
              neighbours and ensured that their lawn was
              unaffected. Everything turned out better than we were expecting. We love the final look of our yard.
              I would without a doubt recommend Project
              Landscape to anyone creating or redoing their
              yards. Should we ever need to landscape a yard again, we would definitely contact Scott and Alison.
              Again thank you!
              Nikki ♥️ Chaddey"
            />
            <Review
              title="Landscape installations, Stone masonry, Mulching, Sod installation, Yard work"
              name=" Bob Miller"
              review="Overall, every person involved in our small front-yard project was a pleasure to deal with. Special accolades go to Mario, the project foreman, who tirelessly led all the hands-on work."
            />
            <Review
              title="Landscape installations, Stone masonry, Mulching, Sod installation, Yard work"
              name=" J. Shantz"
              review="We had an outstanding experience with Project Landscape! Their team, led by Alison, Scott, and Ryan, along with their skilled contractors, demonstrated the utmost professionalism and accommodation throughout our project. Our house is a new build in a new area of the city so we planned for: - a new, bigger deck (composite decking)
              - landscaping rock
              - artificial turf
              - vinyl fencing
              Project Landscape was able to do it all for us and even when we made a few changes along the way, there were never any issues, it was always yup we can do that, no problem!. They were very accommodating to all our requests
              The transformation of our property exceeded our expectations, leaving us with a yard we are genuinely proud of, and even the neighbours have commented at how good everything looks. Kudos to Project Landscape for their exceptional service and a special shoutout to Alison, Scott, Ryan, and the entire team for their awesome work! Highly recommended!"
            />
          </GridThree>
        </Container>
      </Section>
    </LayoutJs>
  );
}
