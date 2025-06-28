import ArrowLeft from '~/assets/arrow-left.svg?react'
import ArrowRight from '~/assets/arrow-right.svg?react'
import {useState, useEffect} from "react";
import testimonialsData from "~/data/testimonialsData"
import TestimonialSlide from "~/components/TestimonialSlide";


export default function Testimonials() {
    const [slide, setSlide] = useState(0);

    function nextSlide() {
        setSlide(slide + 1);
    }

    function previousSlide() {
        setSlide(slide - 1);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlide(slide => {
                return slide === 4 ? 0 : slide + 1;
            });
        }, 5000)
        return () => clearInterval(intervalId);
    }, []);
    return (
      <div className="relative w-full mt-10 lg:mt-[150px] h-[800px] md:h-[450px] lg:h-[600px]">
          <TestimonialSlide img={testimonialsData[0].img} quote={testimonialsData[0].quote} name={testimonialsData[0].name} title={testimonialsData[0].title} visible={slide === 0}></TestimonialSlide>
          <TestimonialSlide img={testimonialsData[1].img} quote={testimonialsData[1].quote} name={testimonialsData[1].name} title={testimonialsData[1].title} visible={slide === 1}></TestimonialSlide>
          <TestimonialSlide img={testimonialsData[2].img} quote={testimonialsData[2].quote} name={testimonialsData[2].name} title={testimonialsData[2].title} visible={slide === 2}></TestimonialSlide>
          <TestimonialSlide img={testimonialsData[3].img} quote={testimonialsData[3].quote} name={testimonialsData[3].name} title={testimonialsData[3].title} visible={slide === 3}></TestimonialSlide>
          <TestimonialSlide img={testimonialsData[4].img} quote={testimonialsData[4].quote} name={testimonialsData[4].name} title={testimonialsData[4].title} visible={slide === 4}></TestimonialSlide>
              <div className="absolute flex right-0 bottom-0 items-center gap-x-6 lg:mr-20">
                  <ArrowLeft className={`cursor-pointer ${ slide > 0 ? 'size-8 md:size-11 text-amber-200' : 'text-zinc-500 size-6 md:size-8 pointer-events-none'}`} onClick={previousSlide} />
                  <ArrowRight className={`cursor-pointer  ${ slide < 4 ? 'size-8 md:size-11 text-amber-200' : 'text-zinc-500 size-6 md:size-8 pointer-events-none'}`} onClick={nextSlide} />
              </div>
      </div>
    );
}