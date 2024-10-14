import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import ReviewBox from "./ReviewBox";

const testimonials = [
  {
    title: "I am certainly happy I made the choice to go with them",
    review:
      "After attending the Calgary Home and Garden show with my neighbor and seeing their excellent display we decided to use them for our backyard projects. I am certainly happy I made the choice to go with them. The workers' attention to detail and excellent preparation greatly contributed to the success of the project.",
    name: "Marilyn D.",
  },
  {
    title: "We are thrilled with our patio extension and highly recommend their services",
    review:
      "Ryan and Alison along with the entire team at Project Landscape were great to work with. From our initial consultation to the completion of the work, every step was communicated clearly and executed well. We are thrilled with our patio extension and highly recommend their services.",
    name: "Tammy B.",
  },
  {
    title: "Project Landscape was an absolute pleasure to work with",
    review:
      "They took on a pretty big project in our backyard that included excavating a large portion of the sloped yard, installing a gorgeous retaining wall with a beautiful patio completed in paving stones and decorative rock, a number of privacy screens, as well as some shrubs & grass. The team was superb, demonstrating exceptional skill.",
    name: "Sabrina",
  },
];

const TestimonialSlider = memo(function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const intervalRef = useRef(null);

  const handlePrev = useCallback(() => {
    setIsAutoSliding(false); 
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setIsAutoSliding(false); 
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
  };

  useEffect(() => {
    if (isAutoSliding) {
      startAutoSlide();
    }

    return () => clearInterval(intervalRef.current); 
  }, [isAutoSliding]);

  return (
    <div
      className="relative mx-auto"
      onMouseEnter={() => setIsAutoSliding(false)} 
      onMouseLeave={() => setIsAutoSliding(true)} 
    >
      <div className="overflow-hidden rounded-lg transition-transform">
        <ReviewBox
          title={testimonials[currentIndex].title}
          review={testimonials[currentIndex].review}
          name={testimonials[currentIndex].name}
        />
      </div>
      <button
        onClick={handlePrev}
        className="absolute -left-7 top-1/2 transform -translate-y-1/2 bg-clr-accent rounded-lg p-2 shadow-md text-white font-semibold hover:bg-gray-500"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute -right-7 top-1/2 transform -translate-y-1/2 bg-clr-accent rounded-lg p-2 shadow-md text-white font-semibold hover:bg-gray-500"
      >
        &gt;
      </button>
    </div>
  );
});

export default TestimonialSlider;
