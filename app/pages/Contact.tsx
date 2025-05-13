import Page from "~/layouts/Page";
import buildTogether from "~/assets/build-together.jpg";
import React from "react";
import ContactForm from "~/components/ContactForm";

export default function Contact() {
    return (
        <Page children={
            <div className="relative flex py-32 mt-10">
                <div className="bg-slate-900 opacity-70 absolute inset-y-0 w-screen max-md:-left-5 max-[1400px]:-left-16 min-[1400px]:-left-32"></div>
                <div className="z-20 grid grid-cols-2 gap-x-20 items-center">
                    <div className="flex-col text-white text-7xl">
                        <div>Let's build something</div>
                        <div className="font-semibold mt-6">great together</div>

                        <ContactForm />
                    </div>

                    <div className="rounded-3xl overflow-clip">
                        <img src={buildTogether} alt="build-together" className="object-cover" />
                    </div>

                </div>

            </div>
        }/>
    )
}