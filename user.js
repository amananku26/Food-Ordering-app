window.onload = function () {
    var form = document.querySelector('form')
    form.addEventListener('submit', registerUser)
}

function registerUser() {
    event.preventDefault()
    var elems = event.target.querySelectorAll('input')

    var username = elems[0].value
    var password = elems[1].value

    var payload = {
        username: username,
        password: password
    }

    console.log(username, password)
    localStorage.setItem('user', JSON.stringify(payload))
    var xhr = new XMLHttpRequest();

    xhr.open('POST', "https://reqres.in/api/register")

    xhr.onload = function () {
        console.log(this.response)
        if (this.status === 200) {
            handleSuccessLogin(JSON.parse(this.response))
        } else {
            handleError(JSON.parse(this.response))
        }
    }

    xhr.onerror = function () {
        alert('onerror')
    }

    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')

    xhr.send(JSON.stringify(payload))

}

function handleSuccessLogin(response) {

    location.href = "dash.html"
    var token = response.token

    var pay = {
        token: token
    }
    localStorage.setItem('token', JSON.stringify(pay))
    console.log(token)

}

function handleError(response) {

    var error = response.error
    alert(error)
}


function getUserList() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=1')

    xhr.send()

    xhr.onload = function () {

        var response = JSON.parse(this.response)
        console.log(response)
        console.log(response.data)

    }

}