import React, { useState, useEffect } from 'react';

const slides = [
  'https://i.ibb.co/ncrXc2V/1.png',
  'https://i.ibb.co/B3s7v4h/2.png',
  'https://i.ibb.co/XXR8kzF/3.png',
  'https://i.ibb.co/yg7BSdM/4.png',
];

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-[487px] h-[429px] rounded-3xl ">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform ease-out duration-500 "
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((src, index) => (
            <div key={index} className="min-w-full max-h-[429px] ">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full">
        <button
          onClick={prev}
          className="absolute left-[-30px] flex rounded-full w-14 h-14 bg-[#D9D9D9] hover:bg-redModello items-center justify-center ring-[12px] ring-pureWhite"
        >
          <img src="/images/Arrow.svg" alt="Left Arrow" className="pr-1" />
        </button>
        <button
          onClick={next}
          className="absolute right-[-30px] flex rounded-full w-14 h-14 rotate-180 bg-[#D9D9D9] hover:bg-redModello items-center justify-center ring-[12px] ring-pureWhite"
        >
          <img src="/images/Arrow.svg" alt="Right Arrow" className="pr-1" />
        </button>
      </div>
      <div className="absolute bottom-0 w-full mx-auto">
        <div className="flex items-center justify-center px-4 py-2 bg-powerlessGray gap-2 w-fit rounded-full mx-auto ring-[12px] ring-pureWhite">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 rounded-full ${curr === i ? 'bg-redModello' : 'bg-hombleBlack'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
