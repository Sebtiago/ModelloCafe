import React, { useState, useEffect } from 'react';

const slides = [
  'images/0153fc95-dd65-4cb3-a168-c34a93f7adff.jpeg.webp',
  'images/be0f8169-16df-4858-b19f-0e09e1a10aad.jpeg.webp',
  'images/bfa84cba-f168-4be8-a423-34b0a85bd058.jpeg.webp',
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
    <div className="relative w-[487px]  rounded-3xl max-sm:w-[74vw]">
      <div className="overflow-hidden rounded-3xl object-contain	">
      <div className=" w-5 h-5 absolute rounded-br-full left-[170px] bottom-0 z-10 max-sm:hidden" style={{boxShadow: '5px 5px 1px 4px white'}}> </div>
      <div className=" w-5 h-5 absolute rounded-bl-full right-[170px] bottom-0 z-10 max-sm:hidden" style={{boxShadow: '-5px 5px 1px 4px white'}}> </div>

        <div
          className="flex transition-transform ease-out duration-500 "
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((src, index) => (
            <div key={index} className="min-w-full max-h-[429px] over min-h-72">
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
