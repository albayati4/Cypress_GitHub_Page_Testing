/// <reference types="cypress" />

import GitHubHomePage from "../../../pages/GitHubHomePage";
import GitHubLoginPage from "../../../pages/GitHubLoginPage";

describe("Cypress Class_Practice04 - GitHub Home and Login pages", () => {
  const homePage = new GitHubHomePage();
  const loginPage = new GitHubLoginPage();
  it("TASK-1: Validate the GitHub Home Page Logo and Header Menu Items", () => {
    homePage.visit();
    homePage.getLogo().should("be.visible");
    const expectedMenuItems = ["Product", "Solutions", "Open Source", "Pricing"];
    homePage.getHeaderMenuButton().click();
    homePage.getHeaderMenuItems().each((item, index) => {
      cy.wrap(item).should("contain.text", expectedMenuItems[index]);
    });
  });
  it("TASK-2: Validate the GitHub Home Page Search and Signing Header Items", () => {
    homePage.visit();
    homePage.getSearchInput().should("have.attr", "placeholder", "Search or jump to...");
    homePage.getSignInButton().should("contain.text", "Sign in");
    homePage.getSignUpButton().should("contain.text", "Sign up");
  });

  it("TASK-3: Validate the GitHub Login Page Sign in Form", () => {
    homePage.visit();
    homePage.getSignInButton().click({ force: true });
    loginPage.getHeaderLogo().should("be.visible");
    loginPage.getFormHeader().should("contain.text", "Sign in to GitHub");
    loginPage.getUsernameLabel().should("contain.text", "Username or email address");
    loginPage.getUsernameInput().should("be.visible").and("be.enabled");
    loginPage.getPasswordLabel().should("contain.text", "Password");
    loginPage.getPasswordInput().should("be.visible").and("be.enabled");
    loginPage.getForgotPasswordLink().should("contain.text", "Forgot password?");
    loginPage.getSignInWithPasskeyButton().should("contain.text", "Sign in with a passkey");
    loginPage.getCreateAccountLink().should("contain.text", "Create an account");
    loginPage.getSignInButton().should("have.value", "Sign in");
  });

  it("TASK-4: Validate the GitHub Login Page Footer Links", () => {
    homePage.visit();
    homePage.getSignInButton().click({ force: true });
    loginPage.getFooterLinks().should("have.length", 6);
    const expectedFooterLinks = [
      "Terms",
      "Privacy",
      "Docs",
      "Contact GitHub Support",
      "Manage cookies",
      "Do not share my personal information",
    ];
    loginPage.getFooterLinks().each((link, index) => {
      cy.wrap(link).should("contain.text", expectedFooterLinks[index]);
    });
  });

  it("TASK-5: Validate the GitHub Login Page Invalid Login Attempt", () => {
    homePage.visit();
    homePage.getSignInButton().click({ force: true });
    loginPage.getUsernameInput().type("johndoe");
    loginPage.getPasswordInput().type("test1234");
    loginPage.getSignInButton().click();
    loginPage.getErrorMessage().should("contain.text", "Incorrect username or password.");
  });
});
