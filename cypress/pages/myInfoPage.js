class MyInfoPage {
    selectorList() {
        const selectors ={
            editEmployeeDiv: '.orangehrm-edit-employee',
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            nickNameField: ".oxd-input--active",
            genericField: '.oxd-input--active',
            dataField: "[placeholder='yyyy-dd-mm']",
            closeDate: '.oxd-grid-item',
            addSsnNumber: ".oxd-input--active",
            addSinNumber: ".oxd-input--active",
            submitButton: "[type='submit']",
            genericCombobox: '.oxd-select-text--arrow',
            selectOptionNationalityCombobox: '.oxd-select-dropdown > :nth-child(6)',
            selectOptionMaritalCombobox: '.oxd-select-dropdown > :nth-child(2)',
            dateOfBirth: '.bi-calendar',
            addDateOfBirth: "[placeholder='yyyy-dd-mm']",
            closeDateBirth: '.oxd-grid-item',
            radioGender: '.oxd-radio-input--active',
            genericCombobox: '.oxd-select-text--arrow',
            radioGender: '.oxd-radio-input--active',
            selectTypeBlood: '.oxd-select-dropdown > :nth-child(6)',
            testField: "[options='']",
            addButton: '.oxd-button--text',
            addAttachmentDiv: '.orangehrm-attachment',
            loadButton: '.oxd-file-button',
            textArea: "[placeholder='Type comment here']"
        }
        return selectors
    }

    checkEmployeeDiv() {
        cy.get(this.selectorList().editEmployeeDiv)
    }

    fillPersonalDetails(firstName, middleName, lastName,) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, licenseExpiryDate, ssnNumber, sinNumber) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorList().dataField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorList().closeDate).eq(4).click()
        //cy.get(this.selectorList().addSsnNumber).eq(8).clear().type(ssnNumber)
        //cy.get(this.selectorList().addSinNumber).eq(9).clear().type(sinNumber)
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(dateOfBirth) {
        cy.get(this.selectorList().genericCombobox).eq(0).click()
        cy.get(this.selectorList().selectOptionNationalityCombobox).click()
        cy.get(this.selectorList().genericCombobox).eq(1).click()
        cy.get(this.selectorList().selectOptionMaritalCombobox).click()
        cy.get(this.selectorList().dateOfBirth).eq(1).click()
        cy.get(this.selectorList().addDateOfBirth).eq(1).clear().type(dateOfBirth)
        cy.get(this.selectorList().closeDateBirth).eq(7).click()
        cy.get(this.selectorList().radioGender).eq(0).click()
    }



        /* 
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

        cy.get(this.selectorList().genericCombobox).eq(2).click()
        cy.get(this.selectorList().selectTypeBlood).click()
        cy.get(this.selectorList().testField).clear().type("Test123")
        cy.get(this.selectorList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

        cy.get(this.selectorList().addButton).click()
        cy.get(this.selectorList().addAttachmentDiv)
        cy.get(this.selectorList().loadButton).click()
        cy.get(this.selectorList().textArea).clear().type("Test123456789")
        cy.get(this.selectorList().submitButton).eq(2).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close') */

}
export default MyInfoPage