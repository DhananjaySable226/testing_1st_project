describe('Demo2 Test', () => {

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/v1/')
    })

    it('TC_01', () => {
        cy.get('.login_logo').should('be.visible')

    })
    it('TC_02', () => {
        cy.get('[data-test="username"]').click().should('be.visible').type(' ');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible')

    })
    it('TC_03', () => {
        cy.get('[data-test="password"]').click().should('be.visible').type(' ');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible')

    })
    it('TC_04', () => {
        cy.get('[data-test="password"]').click().should('be.visible').type(' ');
        cy.get('[data-test="username"]').click().should('be.visible').type(' ');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible')

    })
    it('TC_05', () => {
        cy.get('[data-test="username"]').click().should('be.visible').type('dhanu');
        cy.get('[data-test="password"]').click().should('be.visible').type(' ');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible');
    })
    it('TC_06', () => {
        cy.get('[data-test="username"]').click().should('be.visible').type(' ');
        cy.get('[data-test="password"]').click().should('be.visible').type('sable');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible');
    })

    it('TC_07', () => {
        cy.get('[data-test="username"]').click().should('be.visible').type(123456);
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible');
    })


    it('TC_08', () => {
        cy.get('[data-test="password"]').click().should('be.visible').type(123456);
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible').contains(' Username is required');
    })
    it('TC_09', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('[data-test="username"]').click().should('be.visible').type(12345);
        cy.get('[data-test="password"]').click().should('be.visible').type(' ');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible').contains(' Username and password do not match any user in this service');
    })

    it('TC_10', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('[data-test="username"]').click().should('be.visible').type(12345);
        cy.get('[data-test="password"]').click().should('be.visible').type(768768);
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible').contains('Username and password do not match any user in this service');
    })

    it('TC_11', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('[data-test="username"]').click().should('be.visible').type("dhananjay");
        cy.get('[data-test="password"]').click().should('be.visible').type(768768);
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible').contains('Username and password do not match any user in this service');
    })

    it.only('12_TC', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('[data-test="username"]').click().should('be.visible').type("dhananjay");
        cy.get('[data-test="password"]').click().should('be.visible').type("sable");
        cy.get('#login-button').click();

    })















    it('TC_16', () => {
        cy.get('.bot_column').should('be.visible')
    })





})
