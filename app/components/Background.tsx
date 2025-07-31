import vector1 from "~/assets/vector-1.png";
import vector2 from "~/assets/vector-2.png";
import vector3 from "~/assets/vector-3.png";
import vector4 from "~/assets/vector-4.png";
import React from "react";

const Background: React.FC<{mode?: "light" | "dark" }> = ({ mode = "dark"}) =>  {
    return (
        <div className={`absolute -inset-10 ${mode == 'dark' ? 'bg-slate-950' : 'bg-orange-100'}`}>
            <img src={vector1} alt="vector-1" className="absolute md:-top-10 top-0 right-10" />
            <img src={vector2} alt="vector-2" className="absolute top-[640px] -left-10" />
            <img src={vector3} alt="vector-3" className="absolute top-[1728px] right-10" />
            <img src={vector4} alt="vector-4" className="absolute top-[3140px] -left-10" />
            <img src={vector2} alt="vector-2" className="absolute top-[5440px] -left-10" />
            <img src={vector3} alt="vector-3" className="absolute top-[6728px] right-10" />
        </div>
    );
}

export default Background;