import { mount } from "@cypress/react";
import App from "./App";

it("first test", () => {
  mount(<App></App>);
  cy.get(".btn").click();
});
