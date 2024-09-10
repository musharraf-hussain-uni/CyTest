describe('Fixture testing', () => {
    it('To test fixture', () => {

        cy.fixture("example.json").then((data) => {
            const username = data.user_data
            const password = data.pass_data
            cy.log(username)
            cy.log(password)
        })
    });

    it('second method', function () {
        // Load fixture data and alias it
        cy.fixture("example.json").as('userData');

        // Access the fixture data using `this`
        cy.get('@userData').then((userData) => {
            const username = userData.user_data;
            const password = userData.pass_data;

            cy.log(username);
            cy.log(password);
        });
    });
})