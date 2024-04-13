describe('Demo2 Test', () => {

    beforeEach(() => {
        cy.visit('https://development.d2jup677fkamnr.amplifyapp.com/auth/sign-in')
    })
    it('TC_01', () => {
        cy.get('.col-lg-8').should('be.visible')
    })
    it('TC_02', () => {
        cy.get('.font20').should('be.visible')
    })
    it('TC_03', () => {
        cy.get('.mt-5 > :nth-child(1) > div').should('be.visible')
    })
    it('TC_04', () => {
        cy.get('#phoneNumber').type('dhanajay')
    })
    it('TC_05', () => {
        cy.get('#phoneNumber').should('be.visible')
    })
    it('TC_06', () => {
        cy.get('#phoneNumber').type(' ');
        cy.get('.btn_submit_save > span').click()
        cy.get('.invalid-feedback > .ng-star-inserted').contains('Phone Number is required.').should('be.visible')

    })

    it('TC_07', () => {
        cy.get('#phoneNumber').type(123456789)
        cy.get('.btn_submit_save > span').click()
        cy.get('.ng-trigger > .ng-tns-c2308121496-0').should('be.visible')
    })

    it('TC_08', () => {
        cy.get('#phoneNumber').type(9529809957)
        cy.get('.btn_submit_save > span').click()
        cy.get('.ng-trigger > .ng-tns-c2308121496-0').should('be.visible')
    })

    it('TC_09', () => {
        cy.get('#phoneNumber').type(9529809957)
        cy.get('.btn_submit_save > span').click()
        cy.get('.input-group').should('be.visible')
    })

    it('TC_10', () => {
        cy.get('#phoneNumber').type(9529809957)
        cy.get('.btn_submit_save > span').click()
        cy.get('.eyeIcon').should('be.visible')
        cy.get('.input-group').type(1234)
        cy.get('.eyeIcon').click()
        cy.get('.btn_submit_save ').click()
        cy.get('.toast-error > .ng-tns-c2308121496-1').should('be.visible')
    })

    it('TC_11', () => {
        cy.get('#phoneNumber').type(9529809957)
        cy.get('.btn_submit_save > span').click()
        cy.get('.input-group').type(1234)
        cy.get('.btn_Cancel').click()
    })
    it('TC_12', () => {
        cy.get('.btn_submit_save > span').contains('Login').should('be.visible')
    })
    it('TC_13', () => {
        cy.get('.btn_Cancel').contains('Cancel').should('be.visible')
    })
    it('TC_14', () => {
        cy.get('.contentColor').first().contains(`You must be authorized to use this platform. If you don't know how to log in, request your admin to set up an account for you. This is a secured and protected system.`)
        .should('be.visible')
    })
    it.only('TC_15',()=>{
        cy.get('.contentColor').
            contains(`You need a valid account for your organization to access the system.`).
            should('be.visible')
    })

})