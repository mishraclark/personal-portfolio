import React from 'react';
import Background from "~/components/Background";

export default function Page(props: { children: React.ReactNode}) {
    return (
        <main className="bg-slate-950 relative flex flex-col w-screen min-h-full overflow-clip">
            <Background />

            <div className="z-20 max-md:px-5 max-[1400px]:px-16 min-[1400px]:px-32 py-10">
                {props.children}
            </div>
        </main>
    );
}