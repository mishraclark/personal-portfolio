import arrowRight from "~/assets/arrow-right.svg";

export default function ServicePanel(props:{title: string, img: string}) {
    return (
        <div
            className="flex md:p-10 p-5 w-full bg-slate-900 border border-slate-700 items-center justify-between rounded-md min-[1440px]:w-[692px] hover:bg-slate-800">
            <div className="flex items-center">
                <div className="size-16 rounded-xl overflow-clip">
                    <img src={props.img} alt={props.title} className="object-cover" />
                </div>
                <div className="text-white ml-4 md:ml-8 text-xl w-30 md:text-4xl">{props.title}</div>
            </div>

            <img src={arrowRight} alt="arrow-right" className="size-[32px] md:size-[44px]" />
        </div>
    );
}