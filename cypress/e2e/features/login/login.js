import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("I enter {string} and {string}", (username, password) => {
  cy.get("input[name='username']").type(username);
  cy.get("input[name='password']").type(password);
});

When("I click the login button", () => {
  cy.get("button[type='submit']").click();
});

Then("I should see the dashboard page", () => {
  cy.url().should("include", "/dashboard");
  cy.get("h6").should("contain", "Dashboard");
});

Then("I should see an error message {string}", (errorMessage) => {
  cy.get("p").should("contain", errorMessage);
});