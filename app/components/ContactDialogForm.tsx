import React, {useEffect, useState} from "react";
import emailjs from "@emailjs/browser";
import PaperPlane from "~/assets/paper-plane.svg?react";


export default function ContactDialogForm(props: {onClose?: () => void}) {
    const publicEmailJSKey = import.meta.env.VITE_PUBLIC_EMAILJS_KEY;
    const serviceId = import.meta.env.VITE_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_PUBLIC_CONTACT_TEMPLATE_ID;

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ details, setDetails ] = useState("");
    const [ canSubmit, setCanSubmit ] = useState(false);

    function updateName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }
    function updateEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }
    function updateDetails(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setDetails(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        emailjs.send(serviceId, templateId, {title: "Business Inquiry", name: name, time: Date.now(), message: details, email: email}).then(
            (response) => {
                window.alert("Thanks for reaching out! We'll get back to you shortly.");
            },
            (error) => {
                window.alert("Sorry, something went wrong. Please try again.");
            },
        );
    }

    useEffect(() => {
        setCanSubmit(name.length > 0 && email.length > 0 && details.length > 0);
    }, [name, email, details]);

    useEffect(() => {
        emailjs.init({
            publicKey: publicEmailJSKey,
        });
    }, []);

  return (
    <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
        <form className="text-white md:text-xl w-full" onSubmit={handleSubmit}>
          <div className="text-white">Name</div>
          <input type="text" className="bg-zinc-900 border border-zinc-700 rounded-xl mt-2 py-2 px-3 w-full" onChange={updateName} value={name} />
          <div className=" text-white mt-4 md:mt-6">Email</div>
          <input type="text" className="bg-zinc-900 border border-zinc-700 rounded-xl mt-2 py-2 px-3 w-full" onChange={updateEmail} value={email} />
          <div className=" text-white mt-4 md:mt-6">Details</div>
          <textarea className="bg-zinc-900 border border-zinc-700 rounded-xl mt-2 w-full py-2 px-3 h-30 md:h-40" onChange={updateDetails} value={details}/>
          <button type="submit" className={`flex text-white bg-blue-500 rounded-4xl w-full mt-4 md:mt-6 cursor-pointer py-3 items-center justify-center justify-self-center select-none ${
              !canSubmit ? 'opacity-50 pointer-events-none' : ''
          }`
          } >
              <div>Send Message</div>
              <PaperPlane className="ml-2 size-6" />
          </button>
      </form>

      <button className="mt-4 text-white border border-zinc-700 rounded-4xl py-2 pointer-events-auto cursor-pointer" onClick={props.onClose}>
        Cancel
      </button>
    </div>

  );
}