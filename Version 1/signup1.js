const form = document.getElementById("form");
const mailid = document.getElementById("email");
const username = document.getElementById("uname");
const password = document.getElementById("pwd");
const cpassword = document.getElementById("cpwd");
const valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const checkbox = document.getElementById("checkbox");
var a = 1;
form.addEventListener('submit', e => {
    e.preventDefault();
    checkinput();
});

function checkinput() {
    const mailinput = mailid.value.trim();
    const usernameinput = username.value.trim();
    const passwordinput = password.value.trim();
    const cpasswordinput = cpassword.value.trim();
    const checkboxinput = checkbox;
    var array = JSON.parse(localStorage.getItem("Details"));

    if (mailinput == "") {
        setError(mailid, "Please Fill the Mail ID");
    } else if (!valid.test(mailinput)) {
        setError(mailid, "Please Enter the Valid Mail ID");
    } else {
        setSuccess(mailid, "");
        if (usernameinput == "") {
            setError(username, "Please Fill the Username");
        } else {
            setSuccess(username, "");
            if (passwordinput == "") {
                setError(password, "Please Fill the Password");
            } else {
                setSuccess(password, "");
                if (cpasswordinput == "") {
                    setError(cpassword, "Please Fill the Confirm Password");
                } else {
                    setSuccess(cpassword, "");
                    if (passwordinput != cpasswordinput) {
                        setError(cpassword, "Passwords must be Same");
                    } else {
                        setSuccess(cpassword, "");
                        //window.location.assign("www.google.com");
                        if (!checkboxinput.checked) {
                            setError(checkbox, "Please Accept Terms & Conditions");
                        } else {
                            setSuccess(checkbox, "");
                            //window.location.assign("www.google.com");
                            if (array == null) {
                                let array = [];
                                let obj = {
                                    email: mailinput,
                                    username: usernameinput,
                                    password: passwordinput,
                                    passwords: cpasswordinput
                                };
                                array.push(obj);
                                localStorage.setItem("Details", JSON.stringify(array));
                                alert("Register Successfullly");     
                                window.location.href("login1.html");                      

                            } else {
                                var n = array.length;
                                for (i = 0; i < n; i++) {
                                    if (mailinput === array[i].email ||  mailinput === array[i].username) {
                                        a = 0;
                                        console.log(array[i].email);
                                        console.log("1");
                                        break;
                                    }
                                }
                                if (a == 1) {

                                    let obj = {
                                        email: mailinput,
                                        username: usernameinput,
                                        password: passwordinput,
                                        passwords: cpasswordinput
                                    };
                                    array.push(obj)
                                    console.log(array);
                                    localStorage.setItem("Details", JSON.stringify(array));
                                    alert("Register Successfully");
                                    window.location.href("login1.html");
                                }
                                else {
                                    alert("Email Id Already Exist");
                                    window.location.href("login1.html");
                                }
                            }
                        }
                    }
                }
            } 
        }
    }
    function setError(input, message) {
        const formhead = input.parentElement;
        const paragraph = formhead.querySelector("p");
        formhead.className = "mb-3 mt-3.error"; //error css
        paragraph.innerText = message;
    }

    function setSuccess(input, message) {
        const formhead = input.parentElement;
        const paragraph = formhead.querySelector("p");
        formhead.clasname = "mb-3 mt-3 success";
        paragraph.innerText = message;
    }
}