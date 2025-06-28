import ArrowRight from '~/assets/arrow-right.svg?react'
import simpleProducts from '~/assets/simple-products.png'
import { Link } from "react-router";

export default function Contact() {
    return (
      <div className="flex flex-col md:flex-row mt-20 lg:mt-[290px] justify-between">
        <div className="flex flex-col max-w-[350px] min-[1400px]:max-w-[600px]">
            <div className="text-white text-4xl leading-15 min-[1400px]:text-6xl font-semibold min-[1400px]:leading-25">
                Want to make an awesome and impactful product?
            </div>

            <Link to="/contact">
                <div className="flex items-center gap-x-10 mt-20">
                    <div className="border-b border-amber-200 py-2">
                        <div className="text-amber-200 text-2xl">Contact Me</div>
                    </div>

                    <ArrowRight className="size-8 text-amber-200" />
                </div>
            </Link>
        </div>
        <div className="min-[1400px]:h-[580px] max-md:mt-10 rounded-3xl overflow-clip flex">
            <img src={simpleProducts} alt="" className="object-cover" />
        </div>

      </div>
    );
}