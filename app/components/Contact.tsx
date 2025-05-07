import arrowRight from '~/assets/arrow-right.svg'
import simpleProducts from '~/assets/simple-products.png'

export default function Contact() {
    return (
      <div className="flex z-20 mt-[290px] px-32 justify-between">
        <div className="flex flex-col max-w-[600px]">
            <div className="text-white text-6xl font-semibold leading-25">
                Want to make an awesome and impactful product?
            </div>

            <div className="flex items-center gap-x-10 mt-20">
                <div className="border-b border-amber-200 py-2">
                    <div className="text-amber-200 text-2xl">Contact Me</div>
                </div>

                <img src={arrowRight} alt="arrow-right" className="size-8" />
            </div>
        </div>
        <div className="w-[512px] h-[580px] rounded-3xl overflow-clip">
            <img src={simpleProducts} alt="" className="object-cover" />
        </div>

      </div>
    );
}