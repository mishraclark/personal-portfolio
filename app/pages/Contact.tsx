import Page from "~/layouts/Page";
import buildTogether from "~/assets/build-together.jpg";
import React from "react";
import ContactForm from "~/components/ContactForm";

export default function Contact() {
    return (
        <Page children={
            <div className="flex py-32 justify-center">
                <div className="opacity-70 absolute inset-y-0 max-md:-left-5 -z-1 flex justify-center">
                        <img src={buildTogether} alt="build-together" className="object-cover" />

                </div>
                <div className="z-20 flex-col gap-x-20 items-center">
                    <div className="flex-col text-white text-7xl">
                        <div>Let's build something</div>
                        <div className="font-semibold mt-6">great together</div>

                        <ContactForm />
                    </div>

                    <div className="rounded-3xl overflow-clip hidden">
                        <img src={buildTogether} alt="build-together" className="object-cover" />
                    </div>

                </div>

            </div>
        }/>
    )
}