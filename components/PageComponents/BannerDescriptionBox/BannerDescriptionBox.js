import React from "react";
import Image from "next/image";
import Link from "next/link";

const BannerDescriptionBox = ({ body, bgimage, title, itemwrapper }) => {
  return (
    <div className="relative">
      <div className="relative min-h-screen">
        <Image
          src={bgimage.sourceUrl}
          alt="Background Banner"
          fill
          objectFit="cover"
          className="z-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        <div className="relative !flex justify-center items-center min-h-[90vh] h-full z-20">
          <h2 className="text-white text-4xl md:text-6xl font-bold">{title}</h2>
        </div>
      </div>

      <div className="w-4/5 mx-auto mt-[-80px] bg-white p-6 text-center z-20 relative">
        <div
          className="py-4 px-8"
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itemwrapper.map((item, index) => (
            <div key={index} className="text-left">
              <Image
                src={item.image.sourceUrl}
                alt={
                  item.altText ||
                  "It's time to revitalize your Calgary backyard"
                }
                loading="lazy"
                width={380}
                height={320}
                className="object-cover h-80"
              />
              {item.title && item.link ? (
                <Link href={item.link}>
                  <h4 className="text-lg font-semibold text-blue-500 mt-4 hover:underline">
                    {item.title}
                  </h4>
                </Link>
              ) : (
                <h4 className="text-lg font-semibold text-blue-500 mt-4">
                  {item.title}
                </h4>
              )}
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{
                  __html: `${item.body}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerDescriptionBox;
