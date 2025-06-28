export default function TestimonialSlide(props: {img: string, quote: string, name: string, title: string, visible: boolean}) {
    return (
        <div className={`absolute max-md:flex flex-col md:grid grid-cols-2 md:gap-x-10 gap-y-5 transform transition-all duration-350 ease-in-out h-[800px] md:h-[450px] lg:h-[600px] ${props.visible ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
            <div className="md:h-full flex items-center">
                <div className="relative flex max-w-[408px] h-[400px] lg:h-[500px] min-[1400px]:h-[540px] rounded-3xl overflow-clip items-center justify-center">
                    <img src={props.img} alt="" className="object-cover size-full" />
                </div>
            </div>

            <div className="flex flex-col text-[100px]">
                <div className="text-white text-[50px] lg:text-[100px] font-serif font-bold">"</div>
                <div className="text-white text-2xl lg:text-4xl min-[1400px]:text-5xl font-semibold">
                    { props.quote }
                </div>
                <div className="absolute bottom-0 mt-10">
                    <div className="flex flex-col">
                        <div className="text-white text-2xl">{props.name}</div>
                        <div className="text-zinc-500 text-xl">{props.title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}