export default function PortfolioBlock(props:{title: string, subTitle: string, img: string}) {
    return (
      <div className="flex flex-col w-full h-[384px] cursor-pointer">
          <div className="w-full flex overflow-clip items-center justify-center rounded-2xl h-[270px] bg-zinc-600">
              <img src={props.img} alt="" className="ml-2 object-center w-11/12" />
          </div>

          <div className="flex flex-col p-5 gap-y-2">
              <div className="text-white text-2xl">{props.title}</div>
              <div className="text-zinc-500">{props.subTitle}</div>
          </div>

      </div>
    );
}