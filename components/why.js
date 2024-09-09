import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const ButtonInline = dynamic(() =>
  import("./buttons").then((module) => module.ButtonInline)
);
const ButtonPrimary = dynamic(() =>
  import("./buttons").then((module) => module.ButtonPrimary)
);

export default function Why() {
  return (
    <section>
      <div className="container spacing">
        <div>
          <p className="subheader accent">Why Choose Project Landscape</p>
          <h2 className="title">One of the best Albertan landscaping companies</h2>
          <p className="subheader accent">Clients Benefits What You Get</p>
        </div>
        <div className="gridThree">
          <div className="spacing">
            <Image
              src="/icon1.png"
              alt="calgary landscaping company"
              width={80}
              height={80}
              loading="lazy"
            />
            <span className="body--large caps bold">
              We Provide Environmental Sustainability
            </span>
            <p>
              Hiring a professional Calgary landscape{" "}
              <ButtonInline href="/landscape-design">designer</ButtonInline>{" "}
              means that you’ll have a partner who is committed to bringing your
              landscaping dreams to life. Whether you have a vague idea of what
              you want or a specific vision in mind, a professional designer can
              help you clarify your ideas and bring them to fruition. They’ll
              work closely with you to ensure that your outdoor space is not
              only functional but also beautiful.
            </p>
          </div>
          <div className="spacing">
            <Image
              src="/icon2.png"
              alt="calgary landscaping company"
              width={80}
              height={80}
              loading="lazy"
            />

            <span className="body--large caps bold">
              We Provide Reduced Maintenance
            </span>
            <p>
              When you work with a professional landscaping Calgary designer,
              you’re not just investing in the beauty of your home’s exterior,
              but you’re also saving yourself time and money in the long run. A
              designer has the experience, skills, and tools to get the job done
              correctly and efficiently. They can help you select the right
              materials for your project, work within your budget, and avoid
              costly mistakes.
            </p>
          </div>
          <div className="spacing">
            <Image
              src="/icon3.png"
              alt="calgary landscaping company"
              width={80}
              height={80}
              loading="lazy"
            />

            <span className="body--large caps bold">
              Decades Of Landscaping Experience
            </span>
            <p>
              Professional landscaping in Calgary not only enhances the
              aesthetics of your home, but it can also increase its value. A
              well-designed landscape is a selling point that can make your home
              stand out from the competition. Working with a professional
              landscape designer ensures that your landscaping investment pays
              off by increasing your property value.
            </p>
          </div>
          <div className="spacing">
            <Image
              src="/icon6.png"
              alt="calgary landscaping company"
              width={80}
              height={80}
              loading="lazy"
            />

            <span className="body--large caps bold">
              We Can Enhance Your Property Value
            </span>
            <p>
              A professional landscaper in Calgary understands the importance of
              environmental sustainability in landscaping. They can recommend
              the right{" "}
              <ButtonInline href="/residential-services/landscape-construction/tree-shrub-planting">
                plants and trees
              </ButtonInline>{" "}
              that are native to your area, conserve water, and reduce the use
              of fertilizers and pesticides. With their expertise, they can
              create a beautiful and eco-friendly landscape that will benefit
              both your family and the environment.
            </p>
          </div>
          <div className="spacing">
            <Image
              src="/icon4.png"
              alt="calgary landscaping company"
              width={80}
              height={80}
              loading="lazy"
            />

            <span className="body--large caps bold">
              We Can Save You Time & Money
            </span>
            <p>
              Maintaining a landscape can be a daunting task, especially for
              those without the necessary knowledge and expertise. When you work
              with a professional landscape designer, they’ll create a
              low-maintenance landscape that fits your lifestyle. They’ll choose
              plants that require minimal watering and pruning, which saves you
              time and effort.
            </p>
          </div>
          <div className="spacing">
            <Image
              src="/icon5.png"
              alt="calgary landscaping company"
              width={80}
              height={80}
              loading="lazy"
            />

            <span className="body--large caps bold">
              We Bring your Ideas To life
            </span>
            <p>
              Working with a professional landscape designer is a smart
              investment for any homeowner who wants to enhance the beauty,
              functionality, and value of their property. With their expertise,
              you’ll have a partner who can bring your landscaping ideas to
              life, save you time and money, increase your property value,
              create an eco-friendly landscape, reduce maintenance, and ensure
              year-round enjoyment. So, if you’re considering a landscaping
              project, it’s worth considering working with a professional
              designer.
            </p>
          </div>
        </div>
        <center>
          <ButtonPrimary href="/contact">See For Yourself</ButtonPrimary>
        </center>
      </div>
    </section>
  );
}
