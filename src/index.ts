import { Elysia } from "elysia";

const app = new Elysia().get("/", () => {
  console.log("Test log");
  return "Hello, Elysia!";
}).listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
