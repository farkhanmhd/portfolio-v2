import { projects } from "../content/projects";
import { Hero } from "./hero";
import { SelectedWork } from "./selected-work";

export const HomePage = () => (
  <div className="pb-16">
    <Hero />
    <SelectedWork projects={projects} />
  </div>
);
