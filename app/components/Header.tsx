import HeaderNavLink from "~/components/HeaderNavLink";
import React, { useMemo } from "react";
import aboutIcon from "~/assets/identification.svg";
import contactIcon from "~/assets/envelope.svg";
import portfolioIcon from "~/assets/rectangle-stack.svg";
import servicesIcon from "~/assets/computer-desktop.svg";
import portraitIcon from "~/assets/portrait4-icon.png";
import { useScrollPosition } from "~/hooks/useScrollPosition";
import { useWindowSize } from "~/hooks/useWindowSize";

const Header: React.FC<{mode?: "light" | "dark" }> = ({ mode = "dark"}) => {
    
    const scrollY = useScrollPosition();

    const windowSize = useWindowSize();

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

    const headerOffset = useMemo(() => {
        if (typeof windowSize.width !== "number") return 20;
        return windowSize.width > 768 ? 40 : 20;
    }, [windowSize.width]);

    return (
        <div className={`flex z-[1000] top-0 max-md:inset-x-5 max-[1400px]:inset-x-16 min-[1400px]:inset-x-32 justify-between items-center border-zinc-500 ${scrollY > headerOffset && 'fixed bg-slate-950 border-b border-l border-r'} px-5 py-3 rounded-b-lg transition-all duration-300`}>
            <div onClick={scrollToTop} className="cursor-pointer">
                <div className="flex flex-col gap-y-2 items-center">
                    <img src={portraitIcon} className="size-10" />
                    <span className={`max-sm:hidden text-3xl font-bold ${mode == 'dark' ? 'text-white' : 'text-slate-700'}`}>
                        Mishra
                    </span>
                </div>

            </div>

            <div className={`flex gap-6 md:gap-10 font-semibold md:text-lg ${mode == 'dark' ? 'text-white' : 'text-slate-700'}`}>
                <HeaderNavLink to="about" title="About" icon={aboutIcon} />
                <HeaderNavLink to="skills" title="Skills" icon={servicesIcon} />
                <HeaderNavLink to="portfolio" title="Portfolio" icon={portfolioIcon} />
                <HeaderNavLink to="contact" title="Contact" icon={contactIcon} />
            </div>
        </div>
    );
}

export default Header;