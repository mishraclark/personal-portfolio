import { Link } from 'react-router'
import HeaderNavLink from "~/components/HeaderNavLink";

export default function Header() {
    return (
        <div className="flex justify-center md:justify-between w-full items-center z-20">
            <Link to="/">
                <span className="max-[768px]:hidden text-3xl font-bold text-white">
                    Mishra
                </span>
            </Link>

            <div className="flex gap-6 md:gap-10 text-white md:text-lg">
                <HeaderNavLink to="/services" title="Services" />
                <HeaderNavLink to="/portfolio" title="Portfolio" />
                <HeaderNavLink to="/contact" title="Contact" />
                <HeaderNavLink to="/about" title="About" />
            </div>
        </div>
    );
}