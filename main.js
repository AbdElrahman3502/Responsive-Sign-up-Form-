console.log("Hello");

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let confirm = document.getElementById("confirm");

function clicked() {
  if (name.value != "" && email.value != "" && password.value != "" && confirm.value != "") {
    if (password.value === confirm.value) {
      alert(`Done Successfuly \n Your Name is : ${name.value} , Your Email is : ${email.value}`);
      let inputs = [name,
        email,
        password,
        confirm];
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      };
    } else {
      alert("Please Enter Correct Password");
    }
  }
  else {
    alert("Oops, There are error");
  }
};