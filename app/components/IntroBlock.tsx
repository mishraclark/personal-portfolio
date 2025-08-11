import { twMerge } from "tailwind-merge";

export default function IntroBlock(props: {
  title: string;
  subTitle: string;
  className?: string;
}) {
  return (
    <div className={twMerge("flex flex-col", props.className)}>
      <div className="text-zinc-400 md:text-2xl md:w-[130px] w-20">
        {props.title}
      </div>

      <div className="text-white text-2xl md:text-7xl font-bold mt-3">
        {props.subTitle}
      </div>
    </div>
  );
}
