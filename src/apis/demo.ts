export type Config = { host: string; path: string };
export type Query = { id: string };
export type Body = {};
export type Response = { name: string; secondName: string; email: string };
export const Check = {
  config: { host: "http://localhost", path: "/user" },
  query: { id: "1" },
  body: {},
};
