import arrowRight from '~/assets/arrow-right.svg'
import arrowLeft from '~/assets/arrow-left.svg'


export default function Testimonials() {
    return (
      <div className="flex gap-x-20 mx-32 pr-10 mt-[150px] z-20">
          <div className="w-300 h-[540px] bg-zinc-600 rounded-3xl"></div>
          <div className="flex flex-col text-[100px]">
          <div className="text-white text-[100px] font-serif font-bold">"</div>
          <div className="text-white text-5xl font-semibold">
             Mishra is a professional developer who always delivers results that exceed our expectations, thank you for your services.
          </div>
          <div className="flex justify-between mt-10">
              <div className="flex flex-col">
                  <div className="text-white text-2xl">Jasmin</div>
                  <div className="text-zinc-500 text-xl">Business Owner</div>
              </div>
              <div className="flex items-center gap-x-6 mr-20">
                  <img src={arrowLeft} alt="arrow-left" className="size-8 cursor-pointer" />
                  <img src={arrowRight} alt="arrow-right" className="size-11 cursor-pointer" />
              </div>
          </div>
          </div>
      </div>
    );
}