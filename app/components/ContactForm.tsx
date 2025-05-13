import React, {useEffect, useState} from "react";
import emailjs from "@emailjs/browser";


export default function ContactForm() {
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
      <form className="mt-20 text-black text-3xl w-full" onSubmit={handleSubmit}>
          <div className="text-3xl text-white">Name</div>
          <input type="text" className="bg-white rounded-2xl mt-2 py-4 px-6 w-full" onChange={updateName} value={name} />
          <div className="text-3xl text-white mt-10">Email</div>
          <input type="text" className="bg-white rounded-2xl mt-2 py-4 px-6 w-full" onChange={updateEmail} value={email} />
          <div className="text-3xl text-white mt-10">Details</div>
          <textarea className="bg-white rounded-2xl mt-2 w-full py-4 px-6 h-50" onChange={updateDetails} value={details}/>
          <button type="submit" className={`flex text-white bg-blue-700 rounded-4xl w-full mt-10 cursor-pointer py-3 justify-center justify-self-center select-none ${
              !canSubmit ? 'opacity-50 pointer-events-none' : ''
          }`
          } >
              <div>Send</div>
          </button>
      </form>
  );
}