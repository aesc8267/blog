import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    ...prefix("pages",[
        index("./pages/page1.tsx"),
        route("page2","./pages/page2.tsx")
    ])

] satisfies RouteConfig;
