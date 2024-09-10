class Registration {

    fillCustomerInputs(inputData) {
        this.customerInput.each((singleElement, index) => {
            // Check if there's input data for the current index
            if (index < inputData.length) {
                cy.wrap(singleElement).type(inputData[index]);
            }
        });
    }

}
export default new Registration();