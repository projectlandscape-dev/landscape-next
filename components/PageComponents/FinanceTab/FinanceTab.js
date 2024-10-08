import React from "react";
import Image from "next/image";
import { ButtonPrimary } from "components/buttons";

const FinanceTab = ({ title, subheader, innerHeading, body }) => {
  return (
    <section>
      <center>
        <h2 className="title py-4" >
          {title}
        </h2>
      </center>
      <div className="container">
        <div className="relative">
          <Image
            className="object-cover h-40"
            src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/finance-banner.jpg" 
            alt="Finance Background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="relative top-0 p-5 bg-[#ffffffb3]">
            <p className="subheader">{subheader}</p>
            <h2 className="title">{innerHeading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: body,
              }}
            />
            <ButtonPrimary href="/financing">View Payment Plans</ButtonPrimary>
            <Image
              className="absolute top-0 right-0"
              src="/finance-it.jpg"
              alt="Affordable Calgary Landscaping Financing"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceTab;
