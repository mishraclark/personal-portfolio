import Page from "~/layouts/Page";
import simpleScalable from "~/assets/simple-scalable-2.png";
import webDesign2 from "~/assets/web-design-2.jpg";
import appDesign2 from "~/assets/app-design-2.jpg";
import blockchain2 from "~/assets/blockchain-2.jpg";


export default function Services() {
    return (
        <Page children={
            <>
                <img src={simpleScalable} className="absolute -left-1 scale-105 w-max top-30 md:top-40 lg:top-50 -z-1 transform -rotate-3" />
                <div className="flex flex-col text-white md:text-3xl xl:text-6xl gap-y-8 md:gap-y-12 xl:gap-y-20 mt-36 md:mt-70 lg:mt-100 xl:mt-[450px] w-1/2 justify-self-end">
                    <div className="self-end">Effective</div>

                    <div className="self-center">Scalable</div>

                    <div>Simple</div>

                </div>

                <div className="text-white text-center xl:text-2xl mt-16 md:mt-32 lg:mt-46">
                    In my experience, the best solutions are often the simplest ones. No matter how complicated your business needs are, I'll help you find an elegant solution that grows your business and grows with you.
                </div>

                <div className="grid lg:grid-cols-2 mt-40 lg:mt-80 gap-x-10 gap-y-10 lg:gap-y-100 items-center text-center">

                    <div className="flex flex-col gap-10 lg:text-end">
                        <div className="text-white text-4xl font-semibold">Website Design</div>

                        <div className="text-zinc-500 xl:text-2xl">
                            There are few things I enjoy more than helping business owners launch their first websites. Whether you're just getting started building an online presence, or are looking to update your existing site, I'd be more than happy to partner with you.
                        </div>
                    </div>

                    <div className="overflow-clip rounded-3xl">
                        <img src={webDesign2} />
                    </div>

                    <div className="overflow-clip rounded-3xl hidden">
                        <img src={appDesign2} />
                    </div>

                    <div className="flex flex-col gap-10 lg:text-end max-md:mt-40">
                        <div className="text-white text-4xl font-semibold">Mobile Applications</div>

                        <div className="text-zinc-500 min-[1400px]:text-2xl">
                            I've worked extensively on mobile applications and watched them grow from 0 to 95K+ users. I've built e-commerce platforms, social media sites, and instant messaging apps. Whatever your requirements, I can build it for you and launch on iOS and Android simultaneously.
                        </div>
                    </div>

                    <div className="overflow-clip rounded-3xl">
                        <img src={appDesign2} />
                    </div>


                    <div className="flex flex-col gap-10 lg:text-end max-md:mt-40">
                        <div className="text-white text-4xl font-semibold">Blockchain</div>

                        <div className="text-zinc-500 min-[1400px]:text-2xl">
                            My true area of expertise is in Web3 and blockchain integration. I've built dApps, integrated smart contracts, designed NFT minters, and created multi-chain wallets. If Web3 integrations are of interest, you've come to the right place.
                        </div>
                    </div>

                    <div className="overflow-clip rounded-3xl">
                        <img src={blockchain2} />
                    </div>

                </div>



            </>
        } />
    )
}