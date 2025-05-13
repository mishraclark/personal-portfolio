export default function Header() {
    return (
        <div className="flex justify-center md:justify-between w-full items-center">
            <span className="max-[768px]:hidden text-3xl font-bold text-white">
                Mishra
            </span>
            <div className="flex gap-6 md:gap-10 text-white md:text-lg">
                <span className="hover:opacity-100 opacity-70 cursor-pointer">
                    Services
                </span>
                <span className="hover:opacity-100 opacity-70 cursor-pointer">
                    Portfolio
                </span>
                <span className="hover:opacity-100 opacity-70 cursor-pointer">
                    Contact
                </span>
                <span className="hover:opacity-100 opacity-70 cursor-pointer">
                    About
                </span>
            </div>
        </div>
    );
}