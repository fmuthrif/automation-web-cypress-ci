import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// GIVEN SECTION
Given("I am on the login page", () => {
  cy.visit("/web/index.php/auth/login");
  cy.get("h5").should("contain", "Login");
});

// WHEN SECTION
When("I enter {string} and {string}", (username, password) => {
  cy.get("input[name='username']").type(username);
  cy.get("input[name='password']").type(password);
});

When("I click the login button", () => {
  cy.get("button[type='submit']").click();
});

When("I click the logout button", () => {
  cy.xpath("//i[contains(@class,'oxd-userdropdown-icon')]").click();
  cy.xpath("//a[contains(@href,'/logout')]").click();
});

// THEN SECTION
Then("I should see the dashboard page", () => {
  cy.url().should("include", "/dashboard");
  cy.get("h6").should("contain", "Dashboard");
});

Then("I should see an error message {string}", (errorMessage) => {
  cy.get("p").should("contain", errorMessage);
});

Then("I should be redirected to the login page", () => {
  cy.url().should("include", "/web/index.php/auth/login");
  cy.get("h5").should("contain", "Login");
});
