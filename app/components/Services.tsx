import webDesign from '~/assets/web-design.png'
import appDesign from '~/assets/app-design.png'
import blockchain from '~/assets/blockchain.jpg'
import ServicePanel from "~/components/ServicePanel";

export default function Services() {
    return (
        <div className="flex flex-col lg:flex-row w-full mt-10 lg:mt-[150px] gap-x-20 gap-y-6 justify-center items-center">
            <div className="flex flex-col text-center">
                <div className="text-white text-3xl md:text-6xl">
                    My Services
                </div>

                <div className="text-zinc-500 w-[320px] min-[1400px]:w-[420px] mt-6 md:text-2xl">
                    Whether you are looking to launch a simple website, a progressive web application, or a blockchain
                    integrated service, I've got you covered!
                </div>
            </div>

            <div className="flex flex-col gap-y-7 max-[1440px]:w-full">
                <ServicePanel title="Website Design" img={webDesign} />
                <ServicePanel title="Application Design" img={appDesign} />
                <ServicePanel title="Blockchain Integration" img={blockchain} />
            </div>

        </div>
    );
}