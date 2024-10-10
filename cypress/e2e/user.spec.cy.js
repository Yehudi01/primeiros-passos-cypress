import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboard.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {

  it('User Info Update - Success  ', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDeshboardPage()

    menuPage.accessMyInfo()

    myInfoPage.checkEmployeeDiv()
    myInfoPage.fillPersonalDetails('first Name', 'middle Name', 'last Name', 'nick Name')
    myInfoPage.fillEmployeeDetails('employeeId', 'otherId', 'driverLicenseNumber', '2024-07-02', 'ssnNumber', 'sinNumber')
    myInfoPage.fillStatus('2000-04-10')
    myInfoPage.saveForm()
  })
})