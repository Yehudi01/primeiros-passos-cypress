import userData from '../fixtures/userData.json'

describe('Orange HRM Test', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']", 
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    editEmployeeDiv: '.orangehrm-edit-employee',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    closeDate: '.oxd-grid-item',
    submitButton: "[type='submit']"
  }

  it.only('User Info Update - Success  ', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.editEmployeeDiv)
    cy.get(selectorList.firstNameField).clear().type("Thomas")
    cy.get(selectorList.middleNameField).clear().type("Carl")
    cy.get(selectorList.lastNameField).clear().type("Anderson")
    cy.get(selectorList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('DriversLicenseNumberTest')
    cy.get(selectorList.dateField).eq(0).clear().type("2024-04-07")
    cy.get(selectorList.closeDate).eq(4).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  
  it('Login - Fail  ', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})