var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/bike@1.0.9/node_modules/bike/inject.js
require("source-map-support").install();

// src/index.ts
var import_fastify = __toESM(require("fastify"));
var app = (0, import_fastify.default)();
app.get("/", async () => {
  return { msg: "hello world example" };
});
app.get("/v1/hello", async () => {
  return { msg: "world" };
});
console.log("Server listen: http://localhost:5000");
function fibonacci(n) {
  if (n == 0 || n == 1)
    return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
async function start() {
  console.time("js");
  fibonacci(43);
  console.timeEnd("js");
}
start();
app.listen({ port: 5e3 });
//# sourceMappingURL=index.js.map
