let input = Array.from(document.querySelectorAll("input "));
let bntSubmit = document.querySelector(".btn2");
let spanNotvalid = document.querySelectorAll(".spanNotvalid");
input.forEach((ele, i) => {
  ele.addEventListener("blur", () => {
    // translate label
    ele.value != ""
      ? (document.querySelector(`.${ele.classList[1]}Label`).style.transform =
        "translateY(-9px)")
      : console.log("🤐");
  });

  // validat if inputes valid or no
  ele.addEventListener("keyup", () => {
    if (ele.value != "" && ele.value.length < 3) {
      spanNotvalid[i].innerHTML = "not Valid";
    } else {
      spanNotvalid[i].innerHTML = "";
    }
  });
});



// validat if inpute password ==re-password or no

function checkPassword() {
  if (input[4].value !== input[5].value) {
    e.preventDefault()
    alert('password not equal re-password')

  }
}
bntSubmit.addEventListener("click", checkPassword);




// set users to local storage
let users = [];
function populateStorage() {
  var user = {
    firstName: input[0].value,
    lastName: input[1].value,
    email: input[2].value,
    password: input[3].value,
  };
  users.push(user);
  var storeUsers = localStorage.setItem("Users", JSON.stringify(users));
}
bntSubmit.addEventListener("click", populateStorage);


