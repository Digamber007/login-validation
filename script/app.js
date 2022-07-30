

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

const form = id("form"),
      username = id("username"),
      password = id("password"),      
      errorMsg = classes("error-message"),
      successIcon = classes("success-icon"),
      failureIcon = classes("failure-icon");

// Adding the submit event Listener

form.addEventListener("submit", (event) => {
  event.preventDefault();


  engine(username, 0, "Username cannot be blank");
  engine(password, 1, "Password cannot be blank");
});

// engine function which will do all the works

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } 
  else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green", "Login succesful !";
    // alert("Login succesful !")
    location.href = 'logout.html?dis=yes';

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};



