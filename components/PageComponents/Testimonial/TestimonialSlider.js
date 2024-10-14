import React from "react";
import Slider from "react-slick";
import ReviewBox from "../../testimonials/ReviewBox";

const reviewItem = [
  {
    title: "I am certainly happy I made the choice to go with them",
    review:
      "After attending the Calgary Home and Garden show with my neighbor and seeing their excellent display we decided to use them for our backyard projects. I am certainly happy I made the choice to go with them. The workers attention to detail and excellent preparation greatly contributed the success of the project.",
    name: "Marilyn D.",
  },
  {
    title:
      "We are thrilled with our patio extension and highly recommend their services",
    review:
      "Ryan and Alison along with the entire team at Project Landscape were great to work with. From our initial consultation to the completion of the work every step was communicated clearly and executed well. We are thrilled with our patio extension and highly recommend their services.",
    name: "Tammy B.",
  },
  {
    title: "Project Landscape was an absolute pleasure to work with",
    review:
      "They took on a pretty big project in our backyard that included excavating a large portion of the sloped yard, installing a gorgeous retaining wall with a beautiful patio completed in paving stones and decorative rock, a number of privacy screens as well as some shrubs & grass. The team was superb, demonstrating exceptional skill.",
    name: "Sabrina",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {reviewItem.map((review, index) => {
        return (
          <ReviewBox
            key={index}
            title={review.title}
            review={review.review}
            name={review.name}
          />
        );
      })}
    </Slider>
  );
};

export default TestimonialSlider;
