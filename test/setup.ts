import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom/vitest";
// import * as Matchers from "@testing-library/jest-dom/matchers";

// extends Vitest's expect method with methods from react-testing-library
// expect.extend(Matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
