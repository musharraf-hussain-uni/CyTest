import login from "../pages/login";
import accountPage from "../pages/account";
import BankOperations from "../pages/BankOperations";

const generateRandomUsername = () => {
    const randomNum = Math.floor(Math.random() * 1000);
    return `musharraf${randomNum}`;
};

let randomUsername = '';
let userPassword = '';

describe('To test various bank operations', () => {
    before(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        // Register a new user with a random username
        cy.fixture('registration.json').then((registerData) => {
            randomUsername = generateRandomUsername(); // Generate random username
            userPassword = registerData.password; // Store password for later use
            registerData.username = randomUsername; // Replace with random username

            login.registerBtn.click();
            const userArray = [
                registerData.first_name,
                registerData.last_name,
                registerData.address,
                registerData.city,
                registerData.state,
                registerData.zip_code,
                registerData.phone_number,
                registerData.ssn,
                registerData.username,
                registerData.password,
                registerData.confirm_password
            ];
            login.fillCustomerInputs(userArray);
            login.customerBtn.click();
            login.logOutBtn.click();
        })
    });


    beforeEach(() => {
        // Login with the randomly registered username
        cy.log('Logging in with user:', randomUsername);
        login.enterUserName(randomUsername); // Use the random username
        login.enterPassword(userPassword); // Use the stored password
        login.loginBtn.click();

    });

    it.only('To test the open account form', () => {
        accountPage.navigateTo('openaccount').click();
        cy.url().should('include', '/openaccount.htm');
        cy.get('li a').should('contain.text', 'Open New Account');

        BankOperations.openAccDrop();
        BankOperations.openAccOp0.should('have.value', '0').contains('CHECKING');
        BankOperations.openAccOp1.should('have.value', '1').contains('SAVINGS');
        BankOperations.newAcc.click();
    });

    it('To test the Transfer Fund', () => {
        accountPage.navigateTo('transfer').click();
        cy.url().should('include', '/transfer.htm');
        cy.get('li a').should('contain.text', 'Transfer Funds');

        BankOperations.enterTransferAmount();
        BankOperations.selectFromAccount();
        BankOperations.selectToAccount();
        BankOperations.submitTransfer(); // Submits the transfer
    });

    it('Should pay a bill', () => {
        accountPage.navigateTo('billpay').click();
        cy.url().should('include', '/billpay.htm');
        cy.get('li a').should('contain.text', 'Bill Pay');

        BankOperations.enterPayeeName('John Doe');
        BankOperations.enterPayeeAddress('123 Main St');
        BankOperations.enterPayeeCity('Cityville');
        BankOperations.enterPayeeState('CA');
        BankOperations.enterPayeeZip('12345');
        BankOperations.enterPayeePhone('555-555-5555');
        BankOperations.enterAccountNumber('12345678');
        BankOperations.confirmAccountNumber('12345678');
        BankOperations.enterPaymentAmount('50');
        BankOperations.selectFromAccount('1');
        BankOperations.submitBillPayment();

        cy.get('.success').should('contain.text', 'Bill Payment Complete');
    });

    afterEach(() => {
        // Logout after each test
        cy.log('Logging out');
        login.logOutBtn.click();
    });
});