![Image](https://www.cypress.io/cypress_logo_social.png)

## Date: 5/29/2024

### By: Abdullah Albayati

### Testing Front end GitHub Pages

#### Validating 5 test cases for all the components of the GitHub Home and Login pages.

#### Creator Linkedin page

[Abdullah Albayati](https://www.linkedin.com/in/albayati-abdullah/)

---

#### This project was creatated and executed with the use of JaveScript, Node.js, Cypress, CSS selectors and POM.

---

### _Getting Started_

- In all test cases we are required to visit 2 pages [GitHub Home Page](https://github.com/) and [GitHub Login Page](https://github.com/login)
- So I Created 2 methods in my Page Object Model called visit and it returns `cy.visit()` to handel visiting this website for each test case.
- I Created a separate folder called Pages with a GitHubHomePage.js and GitHubLoginPage files inside to be able to use POM (Page Object Model)
- In my both pages I created a class and I added all my locators and methods then I exported this class with
  ```JavaScript
  export default GitHubHomePage
  export default GitHubLoginPage
  ```
- In order to use this page I had to imported in my 03-project.cy.js and create a new instance of this object to use it.

  ```JavaScript
  import GitHubHomePage from "../../../pages/GitHubHomePage";
  import GitHubLoginPage from "../../../pages/GitHubLoginPage";
  const homePage = new GitHubHomePage();
  const loginPage = new GitHubLoginPage();
  ```

- I used each to handel validating multiple detalis with their text from an array

  ```JavaScript
     const expectedMenuItems = ["Product", "Solutions", "Open Source", "Pricing"];
    homePage.getHeaderMenuButton().click();
    homePage.getHeaderMenuItems().each((item, index) => {
      cy.wrap(item).should("contain.text", expectedMenuItems[index]);
    });
  ```

- I used `homePage.getExpectedLocator.should("be.visible")` or loginPage to check if a something is visible.

- I used `homePage.getExpectedLocator.type('expected input') ` or loginPage to type anything in the input fields.

### _Screenshots_

![Image](https://i.ibb.co/LnK3rrR/Screenshot-2024-05-29-at-8-40-04-PM.png)
