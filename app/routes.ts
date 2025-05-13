import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("services", "./pages/Services.tsx"),
    route("portfolio", "./pages/Portfolio.tsx"),
    route("contact", "./pages/Contact.tsx"),
    route("about", "./pages/About.tsx"),
] satisfies RouteConfig;
