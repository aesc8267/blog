import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Fun1 } from "../pages/page1";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Welcome />
      <Fun1 />
    </div>
  );
}
