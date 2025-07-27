import ArrowRight from "~/assets/arrow-right.svg?react";
import { Link } from "react-router";
import CodeBracket from "~/assets/code-bracket.svg?react";

export default function SkillBlock(props:{title: string, icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>}) {
    return (
       <div className="text-white aspect-square max-w-36 justify-center flex flex-col items-center bg-slate-900 border border-slate-700 rounded-lg shadow-lg p-6">
        
        <div className="flex justify-center items-center mb-4 bg-slate-800 rounded-full p-3">
            <props.icon className="size-11" />
        </div>
            

            <div className="opacity-70">
                {props.title}
            </div>
       </div>
    );
}