import vector1 from "~/assets/vector-1.png";
import vector2 from "~/assets/vector-2.png";
import vector3 from "~/assets/vector-3.png";
import vector4 from "~/assets/vector-4.png";

export default function Background() {
    return (
        <div className="absolute inset-0 border border-amber-50">
            <img src={vector1} alt="vector-1" className="absolute md:-top-20 -top-10 right-0" />
            <img src={vector2} alt="vector-2" className="absolute top-[600px] -left-20" />
            <img src={vector3} alt="vector-3" className="absolute top-[1688px] right-0" />
            <img src={vector4} alt="vector-4" className="absolute top-[3100px] -left-20" />
        </div>
    );
}