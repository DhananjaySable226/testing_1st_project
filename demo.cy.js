describe('template spec', () => {
    it('passes', () => {

        cy.visit('https://www.saucedemo.com/v1/').wait(5000)
        cy.get('.login_logo').should('be.visible');
        cy.get('.bot_column').should('be.visible');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').contains('LOGIN').click();

        cy.get('.btn_inventory').contains('ADD TO CART').click();
        cy.get('.btn_primary').contains('ADD TO CART').click();

        cy.get('.shopping_cart_badge').contains('2').click();


        cy.get('.btn_secondary').contains('REMOVE').click();

        cy.get('.btn_action').contains('CHECKOUT').click();

        cy.get('#first-name').type('dhananjay');
        cy.get('#last-name').type('sable');
        cy.get('#postal-code').type('422604');
        cy.get('.btn_primary').contains('CONTINUE').click();

        cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').click();

        cy.get('.inventory_details_back_button').contains('<- Back').click({force: true});

        cy.get('.btn_action ').contains('FINISH').click();


        cy.get('.pony_express').should('be.visible');

    })
})
