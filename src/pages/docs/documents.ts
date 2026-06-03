export type Document = {
  pagePath: string;
  name: string;
  children?: Document[];
};
export const documents: Document[] = [
  { pagePath: "/docs/welcome", name: "Welcome" },
  { pagePath: "/docs/introduction", name: "Introduction" },
  {
    pagePath: "/docs/projects-and-files",
    name: "Projects and Files",
    children: [],
  },
  {
    pagePath: "/docs/component-and-design",
    name: "Component and Design",
    children: [],
  },
];
