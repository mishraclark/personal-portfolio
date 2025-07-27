import ContactDialogForm from "~/components/ContactDialogForm";

export default function ContactDialog(props: {open?: boolean, onClose?: () => void}) {
    return (
        props.open ? 
            <div className="fixed inset-0 flex items-center justify-center z-100 bg-[#00000090]" onClick={props.onClose}>
                <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-xl font-semibold mb-4 text-white">Contact Me</h2>
                    <p className="mb-4 text-zinc-400">Feel free to reach out for any inquiries or collaborations!</p>
                    <ContactDialogForm onClose={props.onClose} />
        
                </div>
            </div> 
        : null // Placeholder for dialog visibility logic
    );
}