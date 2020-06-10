function validate() {
    let email = document.getElementById("email").value
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.match(pattern)) {
        document.getElementById("message").innerHTML = "Your Email has been received."
        document.getElementById("message").style.color = "green"
    } else if (email === "") {
        document.getElementById("message").innerHTML = "Enter your email!!!!"
        document.getElementById("message").style.color = "orange"
    } else {
        document.getElementById("message").innerHTML = "Please enter a valid email address."
        document.getElementById("message").style.color = "red"
    }
}