import arrowRight from '~/assets/arrow-right.svg'
import arrowLeft from '~/assets/arrow-left.svg'


export default function Testimonials() {
    return (
      <div className="max-md:flex flex-col md:grid grid-cols-2 md:gap-x-10 gap-y-5 mt-10 lg:mt-[150px]">
          <div className="max-w-[408px] h-[400px] lg:h-[500px] min-[1400px]:h-[540px] bg-zinc-600 rounded-3xl"></div>
          <div className="flex flex-col text-[100px]">
          <div className="text-white text-[50px] lg:text-[100px] font-serif font-bold">"</div>
          <div className="text-white text-2xl lg:text-4xl min-[1400px]:text-5xl font-semibold">
             Mishra is a professional developer who always delivers results that exceed our expectations, thank you for your services.
          </div>
          <div className="flex justify-between mt-10">
              <div className="flex flex-col">
                  <div className="text-white text-2xl">Jasmin</div>
                  <div className="text-zinc-500 text-xl">Business Owner</div>
              </div>
              <div className="flex items-center gap-x-6 lg:mr-20">
                  <img src={arrowLeft} alt="arrow-left" className="size-6 md:size-8 cursor-pointer" />
                  <img src={arrowRight} alt="arrow-right" className="size-8 md:size-11 cursor-pointer" />
              </div>
          </div>
          </div>
      </div>
    );
}