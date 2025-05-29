import arrowRight from '~/assets/arrow-right.svg';
import PortfolioBlock from "~/components/PortfolioBlock";
import directMessage from "~/assets/direct-message.png";
import wallet from "~/assets/wallet.png";
import mapPins from "~/assets/map-pins.png";
import calaxyProfile from "~/assets/calaxy-profile.png";
import calaxyFeed from "~/assets/calaxy-feed.png";
import riverPortfolio from "~/assets/river-portfolio.png";
import { Link } from 'react-router'

export default function Portfolio() {
    return (
        <div className="flex flex-col relative p-10 mt-10 lg:mt-[120px]">
            <div className="absolute inset-0 bg-slate-950 opacity-60"></div>
            <div className="flex-col z-30">
                <div className="flex justify-between items-center">
                    <div className="flex text-white text-2xl sm:text-3xl md:text-6xl font-bold">
                        My Portfolio
                    </div>
                <Link to="/portfolio">
                    <div className="flex gap-x-2 sm:gap-x-6 items-center">
                        <div className="sm:text-2xl text-lg text-amber-200">See All</div>
                        <img src={arrowRight} alt="arrow-right" className="size-6" />
                    </div>
                </Link>

                </div>

                <div className="md:grid max-[1400px]:grid-cols-2 min-[1440px]:grid-cols-3 gap-10 mt-10">
                    <PortfolioBlock title="Calaxy Chat" subTitle="Direct Message Application" img={directMessage} />
                    <PortfolioBlock title="riverlyons.com" subTitle="Tattoo Artist Portfolio" img={riverPortfolio} />
                    <PortfolioBlock title="Calaxy Wallet" subTitle="Multi-chain crypto wallet" img={wallet} />
                    <PortfolioBlock title="MapPins" subTitle="Custom OpenStreetMap Pin Creator" img={mapPins} />
                    <PortfolioBlock title="Calaxy Home Feed" subTitle="Social Media PWA" img={calaxyFeed} />
                    <PortfolioBlock title="Calaxy Profile" subTitle="Public Social Media Profile Page" img={calaxyProfile} />
                </div>
            </div>
        </div>
    );
}