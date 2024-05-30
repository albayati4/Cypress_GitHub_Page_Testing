class GitHubLoginPage {
  // Locators
  visit() {
    cy.visit("https://github.com/login");
  }

  getHeaderLogo() {
    return cy.get(".header-logo");
  }

  getFormHeader() {
    return cy.get("h1");
  }

  getUsernameLabel() {
    return cy.get('label[for="login_field"]');
  }

  getUsernameInput() {
    return cy.get("#login_field");
  }

  getPasswordLabel() {
    return cy.get('label[for="password"]');
  }

  getPasswordInput() {
    return cy.get("#password");
  }

  getForgotPasswordLink() {
    return cy.get('a[href="/password_reset"]');
  }

  getSignInWithPasskeyButton() {
    return cy.get(".Button-label").eq(1);
  }

  getCreateAccountLink() {
    return cy.get("#login > div.login-callout.mt-3 > p > a");
  }

  getSignInButton() {
    return cy.get(".js-sign-in-button");
  }

  getFooterLinks() {
    return cy.get(".list-style-none > li");
  }

  getErrorMessage() {
    return cy.get("#js-flash-container .flash-error");
  }
  // Methods
}

export default GitHubLoginPage;
