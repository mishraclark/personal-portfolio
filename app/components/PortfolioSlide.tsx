import YouTube from 'react-youtube';
import React from 'react';

export default function PortfolioSlide(props: {title: string, subTitle: string, img?: string, details: string, listTitle?: string, list?: string[], link?: string, videoId?: string, visible: boolean}) {
    const videoAspectRatio = () => {
        if(window.innerWidth < 768) {
            return {height: '365', width: '640'};
        }   else {
            return {height: '780', width: '1280'};
        }
    };
    
    return (
        <div className={'absolute flex flex-col w-full transition-opacity duration-200' + (props.visible ? 'opacity-100' : ' opacity-0')}>
            
            { props.img &&
                <div className="w-full flex overflow-clip justify-center items-center rounded-2xl h-[140px] md:h-[270px] bg-zinc-600">
                    <img src={props.img} alt="" className='w-full' />
                </div>
            }

            {
                props.videoId && props.visible &&
                <div className='h-[140px] md:h-[270px] w-full flex justify-center'>
                    <div className='h-270px w-full rounded-2xl overflow-clip justify-center items-center flex' >

                        <YouTube
                            videoId={'v5d0CvIGm1c'}
                            opts={{
                            height: videoAspectRatio().height,
                            width: videoAspectRatio().width,
                            playerVars: {   
                                    loop: 1,
                            }
                            }}
                            onReady={(event) => {
                                event.target.playVideo();
                                event.target.setVolume(0);
                            }}
                        />
                    </div>
                </div>

            }

 

            <div className="lg:grid grid-cols-2 gap-x-16 mt-12 md:p-5 gap-y-2">
                <div className="flex flex-col gap-y-2">
                    <div className="text-white text-2xl font-semibold">{props.title}</div>
                    <div className="text-white text-lg">{props.subTitle}</div>


                    <div className="text-zinc-500 text-sm">
                        {props.details}
                    </div>
                </div>

 

                <div className="hidden lg:flex flex-col gap-y-2">
                    {props.listTitle && <h1 className="font-semibold text-2xl text-white">{props.listTitle}</h1>}

                    {props.list && 
                        <div className="text-zinc-500 text-sm flex flex-col">
                            <ul className="list-disc pl-5">
                                {props.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
                   
            </div>
    
        </div>
    );
}   