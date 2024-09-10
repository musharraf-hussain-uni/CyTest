import login from "../pages/login";
import accountPage from "../pages/account";
describe('To test the Customer bank account', () => {
    beforeEach(() => {
        cy.fixture('example.json').as('userData');
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    });

    it('to test left panel menu works', () => {

        cy.get('@userData').then((userData) => {
            // Login after register user
            login.loginTextUser.type(userData.user_data); // Using fixture data for username
            login.loginTextPass.type(userData.pass_data); // Using fixture data for password
            login.loginBtn.click();

            accountPage.navigateTo('openaccount').click();
            cy.url().should('include', '/openaccount.htm');
            cy.get('li a').should('contain.text', 'Open New Account');

            accountPage.navigateTo('overview').click();
            cy.url().should('include', '/overview.htm');
            cy.get('li a').should('contain.text', 'Accounts Overview');

            accountPage.navigateTo('transfer').click();
            cy.url().should('include', '/transfer.htm');
            cy.get('li a').should('contain.text', 'Transfer Funds');

            accountPage.navigateTo('billpay').click();
            cy.url().should('include', '/billpay.htm');
            cy.get('li a').should('contain.text', 'Bill Pay');


            accountPage.navigateTo('findtrans').click();
            cy.url().should('include', '/findtrans.htm');
            cy.get('li a').should('contain.text', 'Find Transactions');


            accountPage.navigateTo('updateprofile').click();
            cy.url().should('include', '/updateprofile.htm');
            cy.get('li a').should('contain.text', 'Update Contact Info');

            accountPage.navigateTo('requestloan').click();
            cy.url().should('include', '/requestloan.htm');
            cy.get('li a').should('contain.text', 'Request Loan');
        })
    })

})