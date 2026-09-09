import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    { id: 1, name: "CYNTHIA CAROLINE", date: "15 July 2023" },
    { id: 2, name: "CYNTHIA CAROLINE", date: "15 July 2023" },
    { id: 3, name: "CYNTHIA CAROLINE", date: "15 July 2023" },
    { id: 4, name: "CYNTHIA CAROLINE", date: "15 July 2023" },
    { id: 5, name: "CYNTHIA CAROLINE", date: "15 July 2023" },
    { id: 6, name: "CYNTHIA CAROLINE", date: "15 July 2023" },
  ];

 
  const displayReviews = [...reviews, ...reviews.slice(0, 3)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= reviews.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const loremText =
    "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.";

  return (
    <section className="w-[95%] mx-auto h-88 bg-[#EDEDED] relative z-10 -mb-44 flex items-center px-6 overflow-hidden">
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex gap-6 w-full ${
          isTransitioning
            ? "transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            : "transition-none"
        }`}
        style={{
          transform: `translateX(calc(-${currentIndex} * (100% + 24px) / 3))`,
        }}
      >
        {displayReviews.map((review, index) => (
          <div
            key={index}
            className="bg-white h-40 p-4 flex-none w-[calc((100%-48px)/3)] flex flex-col justify-between overflow-hidden shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4A1010] shrink-0" />
                <div>
                  <h4 className="font-lato text-xs text-[#3E3E3E] uppercase font-normal">
                    {review.name}
                  </h4>
                  <p className="font-lato text-xs text-gray-500">
                    {review.date}
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            <p className="font-lato text-xs text-gray-500 leading-relaxed line-clamp-4">
              {loremText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
