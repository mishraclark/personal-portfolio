import arrowRight from '~/assets/arrow-right.svg'
import PortfolioBlock from "~/components/PortfolioBlock";

export default function Portfolio() {
    return (
        <div className="flex flex-col relative p-10 mt-[120px] mx-32 z-20">
            <div className="absolute inset-0 bg-slate-950 opacity-60"></div>
            <div className="flex-col z-30">
                <div className="flex justify-between items-center">
                    <div className="flex text-white text-6xl font-bold">
                        My Portfolio
                    </div>
                    <div className="flex gap-6">
                        <div className="text-xl text-amber-200">See All</div>
                        <img src={arrowRight} alt="arrow-right" className="size-6" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 mt-10">
                    <PortfolioBlock title="Title" subTitle="SubTitle" img="https://picsum.photos/200/300" />
                    <PortfolioBlock title="Title" subTitle="SubTitle" img="https://picsum.photos/200/300" />
                    <PortfolioBlock title="Title" subTitle="SubTitle" img="https://picsum.photos/200/300" />
                    <PortfolioBlock title="Title" subTitle="SubTitle" img="https://picsum.photos/200/300" />
                    <PortfolioBlock title="Title" subTitle="SubTitle" img="https://picsum.photos/200/300" />
                    <PortfolioBlock title="Title" subTitle="SubTitle" img="https://picsum.photos/200/300" />
                </div>
            </div>
        </div>
    );
}