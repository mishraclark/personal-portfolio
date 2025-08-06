import portrait from "~/assets/portrait4.jpeg";
import IntroBlock from "~/components/IntroBlock";
import { useScrollPosition } from "~/hooks/useScrollPosition";
import { useWindowSize } from "~/hooks/useWindowSize";
import { useMemo } from "react";

export default function Intro(props: {onOpenDialog: () => void}) {
    const scrollY = useScrollPosition();

    const windowSize = useWindowSize();

    const headerOffset = useMemo(() => {
            return windowSize.width > 768 ? 40 : 20;
        }, [windowSize.width]);

    return (
        <div className="flex flex-col">
            <div className={`flex lg:max-xl:flex-col md:max-lg:flex-row md:mt-[92px] justify-between ${scrollY > headerOffset ? 'mt-[104px] md:mt-[200px]' : 'mt-10 md:mt-[92px]'}`}>
                <div className="flex max-[1400px]:flex-col">
                <div className="flex flex-col z-100 text-center items-center md:items-start md:text-left">
                    <div className="text-xl md:text-4xl text-zinc-400">
                        Sr. Frontend Engineer
                    </div>

                    <div className="text-3xl md:text-6xl text-white mt-3 font-bold">
                        Mishra Clark
                    </div>

                    <div className="bg-amber-200 h-2 w-[183px] mt-8"/>

                    <div className="text-zinc-500 mt-6 md:mt-10 md:w-[356px] md:text-xl">
                        I am a Senior Software Engineer specializing in React, Vue.js, and Web3 development. From small
                        business websites to enterprise fintech applications, I excell at building
                        solutions that are high-performance, user-centric, and secure. 
                        <br />
                        <br />
                        Interested in launching a new product, or
                        elevating an existing one? I'm happy to help.
                    </div>
                    
                    <div className="flex gap-4 mt-8 md:mt-10">
                        <button type="button" className="pointer-events-auto cursor-pointer px-6 py-3 text-white bg-slate-900 border border-slate-700 rounded-xl" onClick={props.onOpenDialog}>
                            Contact  
                        </button>
                        <a href="app/documents/MishraClarkResume.pdf" download="MishraClarkResume.pdf" className="pointer-events-auto cursor-pointer">
                            <div className="px-6 py-3 text-amber-200 bg-slate-900 border border-amber-200 rounded-xl">
                                Download CV  
                            </div>
                        </a>
                    </div>

                </div>

                    <div className="min-[1400px]:right-[380px] md:hidden lg:flex lg:absolute right-16 md:w-[510px] max-[768px]:mt-8 overflow-clip rounded-3xl">
                        <img src={portrait} alt="portrait" className="object-cover" />
                    </div>
                </div>

                <div className="absolute max-[1400px]:opacity-0 md:max-lg:opacity-100 right-16 min-[1400px]:right-32 flex-col text-right items-end mt-4 flex">
                    <IntroBlock title="Years of experience" subTitle="3+" className="items-end" />

                    <IntroBlock title="Features Delivered" subTitle="1000+" className="md:mt-20 items-end" />

                    <IntroBlock title="Application Users" subTitle="95K+" className="md:mt-20 items-end" />
                </div>
            </div>

            <div className="hidden md:flex lg:hidden mt-10 md:mt-20 mx-16 z-20 overflow-clip rounded-3xl">
                <img src={portrait} alt="portrait" className="object-cover" />
            </div>

            <div className="md:max-lg:opacity-0 md:max-lg:absolute w-full text-center mt-4 lg:mt-26 flex justify-between px-5 lg:px-16 min-[1400px]:hidden">
                <IntroBlock title="Years of experience" subTitle="3+" className="items-center" />

                <IntroBlock title="Features Delivered" subTitle="1000+" className="items-center" />

                <IntroBlock title="Application Users" subTitle="95K+" className="items-center"  />
            </div>
        </div>
    );
}