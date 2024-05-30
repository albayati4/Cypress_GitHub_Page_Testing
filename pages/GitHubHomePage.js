class GitHubHomePage {
  // Locators
  visit() {
    cy.visit("https://github.com/");
  }

  getLogo() {
    return cy.get("header .octicon-mark-github");
  }

  getHeaderMenuButton() {
    return cy.get(".Button-content").eq(0);
  }
  getHeaderMenuItems() {
    return cy.get(".d-lg-flex > li");
  }

  getSearchInput() {
    return cy.get(".flex-items-center.mr-4.rounded > button");
  }

  getSignInButton() {
    return cy.get(".top-0 > div > div > div > a");
  }

  getSignUpButton() {
    return cy.get(".top-0 > div > div > a");
  }
  // Methods
}

export default GitHubHomePage;
