// wait for DOM to be ready before running
let submitButton;
setTimeout(() => {
    submitButton = document.getElementById('submitButton')
    submitButton.disabled = true
}, 100)

const onInputChange = () => {
    const mobileNumber = document.getElementById('mobile-number')
    const fullName = document.getElementById('fullname')
    const userName = document.getElementById('username')
    const password = document.getElementById('password')
    submitButton.disabled = !mobileNumber.value || !fullName.value || !userName.value || !password.value
}

const disableLogIn = () => {
    const phoneNumber = document.getElementById('phoneNumber')
    const password = document.getElementById('password')
    submitButton.disabled = !phoneNumber.value || !password.value 
}
const disableLink = () => {
    const sendLogin = document.getElementById('sendLogin')
    submitButton.disabled = !sendLogin.value 
}
