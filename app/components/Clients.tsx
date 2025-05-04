import lg from '~/assets/lg-128.png'
import hedera from '~/assets/hedera-logo-white.png'
import calaxy from '~/assets/calaxy-logo.png'
import launchbadge from '~/assets/launchbadge-logo.svg'

export default function Clients() {
    return (
        <div className="w-full mt-10 lg:mt-[120px] bg-slate-900 flex py-5 md:py-15 lg:h-[200px] items-center opacity-70 justify-center z-20">

        <div className="grid grid-cols-2 lg:flex lg:gap-20 gap-5 md:gap-16 items-center">

            <div className="flex justify-center items-center">
                <img src={lg} alt="lg-logo" className="md:h-24 -my-5 h-20" />
            </div>

            <div className="flex justify-center items-center">
                <img src={hedera} alt="hedera-logo" className="min-[1400px]:h-20 md:h-15 h-10" />
            </div>
            <div className="flex justify-center items-center">
                <img src={calaxy} alt="calaxy-logo" className="min-[1400px]:h-16 md:h-12 h-8" />
            </div>

            <div className="flex justify-center items-center">
                <img src={launchbadge} alt="launchbadge-logo" className="min-[1400px]:h-16 md:h-12 h-8" />
            </div>

        </div>

    </div>
    );
}