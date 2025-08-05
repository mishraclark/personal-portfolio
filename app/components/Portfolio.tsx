import ArrowRight from '~/assets/arrow-right.svg?react';
import PortfolioBlock from "~/components/PortfolioBlock";
import directMessage from "~/assets/calaxy18p1.png";
import wallet from "~/assets/group-2.png";
import mapPins from "~/assets/map-pins.png";
import calaxyProfile from "~/assets/calaxy-profile.png";
import calaxyFeed from "~/assets/group-3.png";
import riverPortfolio from "~/assets/group-1.png";
import { Link } from 'react-router'
import { useState } from 'react';
import PortfolioSlide from "~/components/PortfolioSlide";
import ArrowLeft from '~/assets/arrow-left.svg?react';
import calaxy16 from "~/assets/calaxy16.png";
import calaxy15 from "~/assets/calaxy15.png";

export default function Portfolio() {
        const [selectedItem, setSelectedItem] = useState(0);
    
        function nextSlide() {
            setSelectedItem(selectedItem + 1);
        }
    
        function previousSlide() {
            setSelectedItem(selectedItem - 1);
        }

        const portfolioItems = [
            { 
                title: "Calaxy v1.8", 
                subTitle: "Chat Chat Chat", 
                details: "Calaxy chat was already a robust direct message platform with unique cryptocurrency and nft exchange capabilities. However as a rapidly growing platform, there was a need to support a more robust chat experience that would continue to drive user engagement. In Calaxy version 1.8 we addressed this need with a complete but seemless system overhaul, releasing a trove of new features, and improving preformance simultaneously.",  
                listTitle: "New Features Include:",
                list: [
                    "Audio Messges",
                    "Emoji Reactions",
                    "Emoji Messages",
                    "Message Editing",
                    "Message Deletion",
                    "Message Replies",
                    "Message Pinning",
                    "Mentions and Tagging",
                    "Share Posts in Chat",
                    "Integrated GIF Search",
                ],
                link: "https://calaxy.com",
                img: directMessage },
            { 
                title: "Calaxy v1.7", 
                subTitle: "Calaxy Worlds and Solana Support",
                details: "Introducing Worlds, by Calaxy! \"Worlds\" are mini social apps that anyone can create and share. They are a powerful new way for creators and fans to inteact and discover one another. Worlds can be public or private. They can be open to any, or opened via invite, subscription, or token ownership. In addition to Worlds, we also added support for the Solana Network, allowing users to hold, transfer, and pay with Solana tokens directly in the Calaxy app. This release also includes a number of performance improvements and bug fixes.",
                listTitle: "New Features Include:",
                list: [
                    "User Created World Launcher",
                    "Open, Invite-Only, Subscription, and Token Access Modes",
                    "World Monetization Options allowing world creators to receive a percentage of all transactions",
                    "World creators can ban an unban users from their world",
                    "User wallets can now hold Solana tokens",
                    "Users can transfer Solana tokens to other users",
                    "Users can pay with Solana tokens",
                    "Users can mint Solana NFTs",
                    "Bug Fixes and Stability Improvements"
                ],
                link: "https://calaxy.com",
                videoId: "v5d0CvIGm1c",
            },
            { 
                title: "Calaxy v1.6", 
                subTitle: "Magic Link Wallets, Address Book",
                details: "Calaxy v1.6 introduced a new wallet system that allows users to create and access their wallets using Magic Link, making it easier than ever to manage digital assets. A wallet can be set up with one button, or users can continue to opt to manage their keyphrase themselves. Additionally, we added an address book feature, enabling users to save and manage their contacts for seamless transactions and interactions.",
                listTitle: "New Features Include:",
                list: [
                    "One-Button Wallet Creation powered by Magic Link",
                    "Wallet Address Book for easy contact management",
                    "Asset Options Quick menu shows all actions available for a given asset (send, buy, view transactions etc.)",
                    "Bug Fixes and Stability Improvements"
                ],
                link: "https://calaxy.com",
                img: calaxy16
            },
            { 
                title: "River Lyons Tattoo", 
                subTitle: "Tattoo Artist Portfolio", 
                details: "River Lyons is a very talented tattoo artist in the Portland area who wanted a portfolio webiste to help him network and get in touch with clients. The client's budget was tight, he wanted to be able to maintain and improve his site without assitance, but he didn't know what platform to choose or how to get started. I recommended WordPress, which is low cost and simple to learn. I built and launched an mvp of the site and provided training to ensure River would be able to maintain his site moving forward.", 
                listTitle: "Key Features:",
                list: [
                    "Custom WordPress Theme",
                    "Portfolio Gallery",
                    "Contact Form",
                    "Social Links",
                    "SEO Optimized"
                ],
                link: "https://riverlyons.com",
                img: riverPortfolio },
            { 
                title: "Calaxy v1.5", 
                subTitle: "DM External Phone Numbers, FaceID", 
                details: "In order to streamline the user experience and optimize the sign in process, we added FaceID and Touch ID support. This allows users to sign in with a single tap, making it easier than ever to access their accounts. Additionally, we added the ability to send direct messages to external phone numbers, allowing users to connect with friends and family who may not be on the Calaxy platform. In addition to these new features, we also made a number of performance improvements resulting in a 2 second reduction in app load time.", 
                listTitle: "New Features Include:",
                list: [
                    "FaceID and Touch ID support for quick sign in",
                    "Authentication no longer required for non wallet actions",
                    "Direct messaging to external phone numbers",
                    "Crypto and NFTs can be sent to external phone numbers",
                    "2 second reduction in app load time",
                ],
                link: "https://calaxy.com",
                img: calaxy15 
            },
            { title: "Calaxy Feed", subTitle: "Social Media Feed", details: "", img: calaxyFeed },
            { title: "Wallet", subTitle: "Web3 Wallet", details: "", img: wallet },
            { title: "Map Pins", subTitle: "Map Pins Application", details: "", img: mapPins }
        ];

    return (
        <div className="flex flex-col relative p-10 mt-10 lg:mt-[120px] border border-zinc-500 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-slate-950 opacity-60"></div>
            <div className="flex-col z-30">
                <div className="flex justify-between items-center mb-10">
                    <div id="portfolio" className="flex text-white text-2xl sm:text-3xl md:text-6xl font-bold">
                        Recent Work
                    </div>

              <div className="flex items-center gap-x-6 lg:mr-20">
                  <ArrowLeft className={`cursor-pointer ${ selectedItem > 0 ? 'size-8 md:size-11 text-amber-200' : 'text-zinc-500 size-6 md:size-8 pointer-events-none'}`} onClick={previousSlide} />
                  <ArrowRight className={`cursor-pointer  ${ selectedItem < 4 ? 'size-8 md:size-11 text-amber-200' : 'text-zinc-500 size-6 md:size-8 pointer-events-none'}`} onClick={nextSlide} />
              </div>

                </div>

                <div className='flex relative w-full h-180 mt-16'>
                    {
                        portfolioItems.map((item, index) => (
                            <PortfolioSlide 
                                key={index} 
                                title={item.title} 
                                subTitle={item.subTitle} 
                                details={item.details} 
                                img={item.img} 
                                listTitle={item.listTitle} 
                                list={item.list} 
                                link={item.link}
                                videoId={item.videoId}
                                visible={selectedItem === index} />  
                        ))
                    }

                {portfolioItems[selectedItem].link &&
                    <div className="flex absolute bottom-0 left-0 right-0 justify-center">
                        <a href={portfolioItems[selectedItem].link} className="cursor-pointer mt-10 px-10 py-4 text-lg text-amber-200 border-amber-200 border rounded-xl" rel='noopener noreferrer' target='_blank'>
                            View Project
                        </a>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}