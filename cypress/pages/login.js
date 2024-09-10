// import login_data from "../fixtures/example.json"

class loginPage {

    //header slogan text
    get headerText() {
        return cy.get('.caption').should('contain', 'Experience the difference')
    }
    headerSloganText() {
        this.headerText;
    }

    //navigation lists
    navigationList(itemText) {
        return cy.get(".leftmenu > li > a").contains(itemText).click();
    }
    navigateToAboutUs() {
        this.navigationList('About Us');
    }
    navigateToServices() {
        this.navigationList('Services');
    }
    navigateToAdminPage() {
        this.navigationList('Admin Page');
    }



    get leftRegPanel() {
        return cy.get("#loginPanel > p")
    }



    //login field selector and method
    get loginTextUser() {
        return cy.get("form input[name='username']")
    }
    get loginTextPass() {
        return cy.get("form input[name='password']")
    }
    enterUserName(userName) {
        this.loginTextUser.type(userName);
    }
    enterPassword(password) {
        this.loginTextPass.type(password);
    }


    //customer input error msg without data
    get customerInputErr() {
        return cy.get('.error')
            .should('be.visible')
            .should('text', 'Please enter a username and password.')
    }
    showErrMsg() {
        this.customerInputErr;
    }

    //customer input error msg without data
    get customerInputErrData() {
        return cy.get('.error')
            .should('be.visible')
            .should('text', 'The username and password could not be verified.')
    }
    showErrMsgData() {
        this.customerInputErr;
    }

    //Customer register form input data to create user
    get customerInput() {
        return cy.get("#customerForm > table .input")
    }

    // Method to fill customer input fields with provided data
    fillCustomerInputs(userArray) {
        this.customerInput.each((singleElement, index) => {
            // Check if there's input data for the current index
            if (index < userArray.length) {
                cy.wrap(singleElement).type(userArray[index]);
            }
        });
    }
    get customerBtn() {
        return cy.get("#customerForm > table .button")
    }



    get registerBtn() {
        return cy.get("p a[href*='register']");
    }

    get loginBtn() {
        return cy.get("form input[type='submit']");
    }

    get createRegBtn() {
        return cy.get("form table input[type='submit']");
    }

    get logOutBtn() {
        return cy.get("a[href*='logout']");
    }



};
export default new loginPage();