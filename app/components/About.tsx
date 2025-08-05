import calaxyIcon from '~/assets/calaxy-app-icon@3x.png';
import launchbadgeIcon from '~/assets/launchbadge-icon.png';
import mishraClarkIcon from '~/assets/portrait4-icon-square.png';
import simpleScalable from "~/assets/simple-scalable-2.png";

export default function About() {
    return (
        <div id="about" className="flex relative w-full items-center justify-center">
            {/* <img src={simpleScalable} className="absolute -left-1 scale-155 blur-md w-max top-30 md:top-40 lg:top-120 -z-1 transform -rotate-3" /> */}


        <div className="flex flex-col z-20 items-center justify-center w-full xl:mt-40 py-40 px-4 text-white lg:w-1/2">
            <h1 className="text-3xl md:text-5xl text-center font-bold mb-6">Professional Summary</h1>
            <p className="text-lg md:text-xl max-w-2xl text-center mb-8">
                Senior Frontend Engineer & Team Lead with expertise in React, Vue.js, and Web3 development, blending technical mastery with leadership in fast-growth environments. 
            </p>
            <div className="flex flex-col items-start">
                <div className="flex justify-center items-center mb-4">
                    <img src={calaxyIcon} alt="Calaxy Icon" className="w-12 h-12 mr-4" />
                    <div className="text-lg md:text-xl max-w-2xl">
                        Scaled a Web3 Platform from 0 to 95K+ Users            
                    </div>
                </div>
                
                <ul className="list-disc pl-6 mb-8">
                    <li>Led frontend development for Calaxy (founded by Spencer Dinwiddie and Solo Ceesay), architecting the platform's core features as both an agency contractor and later as Senior Frontend Engineer/Team Lead.</li>
                    <li>Directed sprints, mentored junior developers, and bridged design-backend gaps to ship high-impact features.</li>
                </ul>

                <div className='flex justify-center items-center mb-4'>
                    <img src={launchbadgeIcon} alt="Launchbadge Icon" className="w-12 h-12 mr-4 rounded-xl" />
                    
                    <p className="text-lg md:text-xl max-w-2xl text-center">
                        Full-Stack Versatility
                    </p>
                </div>


                <ul className="list-disc pl-6 mb-8">
                    <li>Built diverse applications at LaunchBadge (2021-2023):</li>
                    <ul className="list-disc pl-6">
                        <li>Web3: Developed wallets, nft minters, and token auction platforms</li>
                        <li>Web2: Created mobile responsive small business sites</li>
                        <li>Mobile: Launched a mobile application for iOS and Android</li>
                    </ul>
                </ul>

                <div className="flex justify-center items-center mb-4">
                    <img src={mishraClarkIcon} alt="Mishra Icon" className="w-12 h-12 mr-4 rounded-xl" />
                  
                    <p className="text-lg md:text-xl max-w-2xl text-center">
                        Technical + Communication Excellence
                    </p>
                </div>

                 <ul className="list-disc pl-6 mb-8">
                    <li>{'Technical: Optimized performance (Lighthouse scores >90), implemented CI/CD, and pioneered reusable component libraries.'}</li>
                    <li>Leadership: Translated complex tech concepts for non-technical stakeholders (executives, designers, partners).</li>
                </ul>
            </div>
            </div>

        </div>
    );
}