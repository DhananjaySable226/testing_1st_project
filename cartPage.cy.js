describe('Demo2 Test', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').contains('LOGIN').click();
    })

    it('TC_01',()=>{
        cy.get('.btn_primary').should('be.visible')
    })

    
    it('TC_02',()=>{
        cy.get('.btn_primary').contains('ADD TO CART').should('be.visible')
    })

    it('TC_03',()=>{
        cy.get('.btn_primary').contains('ADD TO CART').click()
        cy.get('.btn_primary').contains('ADD TO CART').click()
        cy.get('.btn_primary').contains('ADD TO CART').click()
    })

    it('TC_04',()=>{
        cy.get('[data-icon="shopping-cart"]').should('be.visible')
    })
    
    it('TC_05',()=>{
        cy.get('.btn_primary').contains('ADD TO CART').click()
        cy.get('.btn_primary').contains('ADD TO CART').click()
        cy.get('.btn_primary').contains('ADD TO CART').click()

        cy.get('.fa-layers-counter').contains('3').should('be.visible')
    })
    it('TC_06',()=>{
        cy.get('.btn_primary').contains('ADD TO CART').click()
        cy.get('.btn_primary').contains('ADD TO CART').click()
        cy.get('.btn_primary').contains('ADD TO CART').click()

       cy.get('.fa-layers-counter').click()
    })

    it('TC_07',()=>{

        cy.get('[data-icon="shopping-cart"]').click()
        cy.get('.subheader').contains('Your Cart').should('be.visible')
    })
    it('TC_08',()=>{

        cy.get('[data-icon="shopping-cart"]').click()
        cy.get('.cart_quantity_label').contains('QTY').should('be.visible')
    })
    it.only('TC_09',()=>{

        cy.get('[data-icon="shopping-cart"]').click()
        cy.get('.cart_desc_label').contains('DESCRIPTION').should('be.visible')
    })




})