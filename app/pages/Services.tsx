import Page from "~/layouts/Page";
import simpleScalable from "~/assets/simple-scalable.jpg";
import webDesign2 from "~/assets/web-design-2.jpg";
import appDesign2 from "~/assets/app-design-2.jpg";
import blockchain2 from "~/assets/blockchain-2.jpg";


export default function Services() {
    return (
        <Page children={
            <>
                <img src={simpleScalable} className="absolute -left-1 scale-105 w-max -top-10 -z-1 transform -rotate-3" />
                <div className="flex flex-col text-white text-6xl gap-y-20 mt-[500px] w-full">
                    <div className="self-end">Effective</div>

                    <div className="self-center">Scalable</div>

                    <div>Simple</div>

                </div>

                <div className="text-white text-center text-2xl mt-26">
                    In my experience, the best solutions are often the simplest ones. No matter how complicated your business needs are, I'll help you find an elegant solution that grows your business and grows with you.
                </div>

                <div className="grid grid-cols-2 mt-40 gap-x-10 gap-y-100 items-center">

                    <div className="flex flex-col gap-10">
                        <div className="text-white text-4xl font-semibold">Website Design</div>

                        <div className="text-zinc-500 text-2xl">
                            There are few things I enjoy more than helping business owners launch their first websites. Whether you're just getting started building an online presence, or are looking to update your existing site, I'd be more than happy to partner with you.
                        </div>
                    </div>

                    <div className="overflow-clip rounded-3xl">
                        <img src={webDesign2} />
                    </div>

                    <div className="overflow-clip rounded-3xl">
                        <img src={appDesign2} />
                    </div>

                    <div className="flex flex-col gap-10 text-end">
                        <div className="text-white text-4xl font-semibold">Mobile Applications</div>

                        <div className="text-zinc-500 text-2xl">
                            I've worked extensively on mobile applications and watched them grow from 0 to 95K+ users. I've built e-commerce platforms, social media sites, and instant messaging apps. Whatever your requirements, I can build it for you and launch on iOS and Android simultaneously.
                        </div>
                    </div>


                    <div className="flex flex-col gap-10">
                        <div className="text-white text-4xl font-semibold">Blockchain</div>

                        <div className="text-zinc-500 text-2xl">
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