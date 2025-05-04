import type { Route } from "./+types/home";
import { Welcome } from "~/pages/Welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mishra Clark | Senior Full Stack Engineer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
