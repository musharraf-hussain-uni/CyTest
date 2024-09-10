class accountPage {
    navigateTo(menu) {
        return cy.get(`li a[href*='${menu}']`);
    }

}


export default new accountPage();