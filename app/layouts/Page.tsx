import React from 'react';
import Background from "~/components/Background";
import Header from "~/components/Header";

export default function Page(props: { children?: React.ReactNode}) {
    return (
        <main className="relative flex flex-col w-screen min-h-full overflow-clip">
            <Background />

            <div className="z-20 max-md:px-5 max-[1400px]:px-16 min-[1400px]:px-32 py-10">
                <Header/>

                {props.children}
            </div>
        </main>
    );
}