import { Link } from "react-router";

export default function HeaderNavLink(props: {to: string, title: string, icon: string}) {
    return (
      <Link to={props.to}>
          <div className="flex flex-col items-center gap-y-1 hover:opacity-100 opacity-70 cursor-pointer">
              <img src={props.icon} className="size-10" />
              <span className="max-sm:hidden">
                {props.title}
              </span>
          </div>
      </Link>
    );
}