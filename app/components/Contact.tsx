import arrowRight from '~/assets/arrow-right.svg'
import simpleProducts from '~/assets/simple-products.png'

export default function Contact() {
    return (
      <div className="flex flex-col md:flex-row mt-20 lg:mt-[290px] justify-between">
        <div className="flex flex-col max-w-[350px] min-[1400px]:max-w-[600px]">
            <div className="text-white text-4xl leading-15 min-[1400px]:text-6xl font-semibold min-[1400px]:leading-25">
                Want to make an awesome and impactful product?
            </div>

            <div className="flex items-center gap-x-10 mt-20">
                <div className="border-b border-amber-200 py-2">
                    <div className="text-amber-200 text-2xl">Contact Me</div>
                </div>

                <img src={arrowRight} alt="arrow-right" className="size-8" />
            </div>
        </div>
        <div className="min-[1400px]:h-[580px] max-md:mt-10 rounded-3xl overflow-clip flex">
            <img src={simpleProducts} alt="" className="object-cover" />
        </div>

      </div>
    );
}