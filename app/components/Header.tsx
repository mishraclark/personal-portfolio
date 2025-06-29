import { Link } from 'react-router'
import HeaderNavLink from "~/components/HeaderNavLink";
import React from "react";
import aboutIcon from "~/assets/identification.svg";
import contactIcon from "~/assets/envelope.svg";
import portfolioIcon from "~/assets/rectangle-stack.svg";
import servicesIcon from "~/assets/computer-desktop.svg";
import portraitIcon from "~/assets/stardew-portrait-icon.png";

const Header: React.FC<{mode?: "light" | "dark" }> = ({ mode = "dark"}) => {
    return (
        <div className="flex justify-between w-full items-center z-20">
            <Link to="/">
                <div className="flex flex-col gap-y-2 items-center">
                    <img src={portraitIcon} className="size-10" />
                    <span className={`max-sm:hidden text-3xl font-bold ${mode == 'dark' ? 'text-white' : 'text-slate-700'}`}>
                        Mishra
                    </span>
                </div>

            </Link>

            <div className={`flex gap-6 md:gap-10 font-semibold md:text-lg ${mode == 'dark' ? 'text-white' : 'text-slate-700'}`}>
                <HeaderNavLink to="/services" title="Services" icon={servicesIcon} />
                <HeaderNavLink to="/portfolio" title="Portfolio" icon={portfolioIcon} />
                <HeaderNavLink to="/contact" title="Contact" icon={contactIcon} />
                <HeaderNavLink to="/about" title="About" icon={aboutIcon} />
            </div>
        </div>
    );
}

export default Header;