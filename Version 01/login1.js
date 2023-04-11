const mailid = document.getElementById("email");
const password = document.getElementById("pwd");

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const mailinput = mailid.value.trim();
    const passwordinput = password.value.trim();
    // const valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var array = JSON.parse(localStorage.getItem("Details")); // Stored SignUp Details
    var key = 0;

    var n = array.length;



    if (mailinput == "") {
        setError(mailid, "Enter the Mail Address or Username");

    } else {
        setSuccess(mailid, "");
        if (passwordinput == "") {
            setError(password, "Please Enter the Password");
        } else {
            setSuccess(password, "");

            for (var i = 0; i < n; i++) {
                if (mailinput == array[i].email) {

                    key = 1;
                    if (passwordinput == array[i].password) {

                        setSuccess(password, "");
                        alert("Login Successfully");
                        window.location.href = "file:///F:/BADHRI/Aspire%20Tasks/HTML%20%26%20CSS/Movie%20Ticket%20Booking/Movie%20Now%20Showing.html";
                        break

                    } else {
                        setError(password, "Invalid Passwordd");
                    }
                } else if (mailinput == array[i].username) {
                    key = 1;
                    if (passwordinput == array[i].password) {
                        alert("Login Successfully");
                        window.location.href = "file:///F:/BADHRI/Aspire%20Tasks/HTML%20%26%20CSS/Movie%20Ticket%20Booking/Movie%20Now%20Showing.html";
                        break;
                    } else {
                        setError(password, "Invalid Passsword");
                    }
                }
            }
            if (key == 0) {
                setError(mailid, "Invalid Mail or Username")
            }
            else {
                setSuccess(mailid, "")
            }

        }
    }


    function setError(input, message) {
        const formhead = input.parentElement;
        const paragraph = formhead.querySelector("p");
        formhead.className = "mb-3 mt-3.error";
        paragraph.innerText = message;
    }

    function setSuccess(input, message) {
        const formhead = input.parentElement;
        const paragraph = formhead.querySelector("p");
        formhead.className = "mb-3 mt-3.success"; 
        paragraph.innerText = message;
    }

}