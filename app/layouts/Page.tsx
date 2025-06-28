import React from 'react';
import Background from "~/components/Background";
import Header from "~/components/Header";

export default function Page(props: { children?: React.ReactNode, mode?: "light" | "dark"}) {
    return (
        <main className="relative flex flex-col w-screen min-h-full overflow-clip select-none">
            <Background mode={props.mode} />

            <div className="z-20 max-md:px-5 max-[1400px]:px-16 min-[1400px]:px-32 py-10">
                <Header mode={props.mode} />

                {props.children}
            </div>
        </main>
    );
}