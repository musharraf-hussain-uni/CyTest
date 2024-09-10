class BankOperations {
    get openAcc_dropdown() {
        return cy.get('#openAccountForm #type');
    }
    openAccDrop() {
        this.openAcc_dropdown;
    }

    get openAccOp0() {
        return cy.get('#openAccountForm #type').select('0');
    }
    get openAccOp1() {
        return cy.get('#openAccountForm #type').select('1');
    }

    get newAcc() {
        return cy.get("#openAccountForm input[type='button']");
    }

    // Methods related to Transfer Funds
    get transferFundsAmount() {

        return cy.get('input[id="amount"]').type('500');
    }
    enterTransferAmount() {
        this.transferFundsAmount;
    }

    get fromAccount() {
        return cy.get('select[id="fromAccountId"]').select('12345');

    }
    selectFromAccount() {
        this.fromAccount;
    }

    get toAccount() {
        return cy.get('select[id="toAccountId"]').select('67890');
    }
    selectToAccount() {
        this.toAccount;
    }

    get sendTransfer() {
        return cy.get('input[type="button"]').click();
    }
    submitTransfer() {
        this.sendTransfer;
    }





    // Methods related to Bill Pay
    enterPayeeName(payeeName) {
        return cy.get('input[name="payee.name"]').type(payeeName);
    }

    enterPayeeAddress(address) {
        return cy.get('input[name="payee.address.street"]').type(address);
    }

    enterPayeeCity(city) {
        return cy.get('input[name="payee.address.city"]').type(city);
    }

    enterPayeeState(state) {
        return cy.get('input[name="payee.address.state"]').type(state);
    }

    enterPayeeZip(zip) {
        return cy.get('input[name="payee.address.zipCode"]').type(zip);
    }

    enterPayeePhone(phone) {
        return cy.get('input[name="payee.phoneNumber"]').type(phone);
    }

    enterAccountNumber(accountNumber) {
        return cy.get('input[name="payee.accountNumber"]').type(accountNumber);
    }

    confirmAccountNumber(accountNumber) {
        return cy.get('input[name="verifyAccount"]').type(accountNumber);
    }

    enterPaymentAmount(amount) {
        return cy.get('input[name="amount"]').type(amount);
    }

    selectFromAccount(account) {
        return cy.get('select[name="fromAccountId"]').select(account);
    }

    submitBillPayment() {
        return cy.get('input[type="submit"]').click();
    }
}



export default new BankOperations();