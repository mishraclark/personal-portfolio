import { Link } from "react-router";

export default function HeaderNavLink(props: {to: string, title: string}) {
    return (
      <Link to={props.to}>
          <span className="hover:opacity-100 opacity-70 cursor-pointer">
            {props.title}
          </span>
      </Link>
    );
}