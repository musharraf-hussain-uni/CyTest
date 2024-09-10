import login from "../pages/login";
describe('Test Homepage', () => {

  //visit url first
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  });

  context('Header', () => {
    it('to test header', () => {
      //test the slogan text
      login.headerSloganText;
    })
  });

  context('Navigation', () => {
    it('To test the navigation list', () => {

      //navigate
      login.navigateToAboutUs();
      login.navigateToServices();
      login.navigateToAdminPage();
    })
  });

  context('login form', () => {
    it('To test the customer login without input any data', () => {

      //blank form
      login.enterUserName;
      login.enterPassword;
      login.loginBtn.click();
      login.showErrMsg;
    })
  });

  context('login User without register', () => {
    it('To test the customer login with the data to check it should error to recognize', () => {

      login.enterUserName('musharraf')
      login.enterPassword('123')
      login.loginBtn.click();
      login.showErrMsgData;
    })

    it('Register user page', () => {

      login.leftRegPanel;
      login.registerBtn.click();
    })

    it('To check the registration without data getting error?', () => {

      login.registerBtn.click();
      login.createRegBtn.click();
    })

    let userArray = [];
    it('create user', () => {

      login.registerBtn.click()

      cy.fixture('registration.json').then((registerData) => {

        userArray[0] = registerData.first_name;
        userArray[1] = registerData.last_name;
        userArray[2] = registerData.address;
        userArray[3] = registerData.city;
        userArray[4] = registerData.state;
        userArray[5] = registerData.zip_code;
        userArray[6] = registerData.phone_number;
        userArray[7] = registerData.ssn;
        userArray[8] = registerData.username;
        userArray[9] = registerData.password;
        userArray[10] = registerData.confirm_password;

        //create user 
        login.fillCustomerInputs(userArray);
      });

      login.customerBtn.click()
      login.logOutBtn.click();
    })

    it('Now login', () => {

      cy.wrap(userArray).should('have.length.greaterThan', 0).then(() => {
        login.enterUserName(userArray[8]); // Using the username from userArray
        login.enterPassword(userArray[9]); // Using the password from userArray
      });
      login.loginBtn.click();
      // Again logout after login
      login.logOutBtn.click();
    })
  });
})