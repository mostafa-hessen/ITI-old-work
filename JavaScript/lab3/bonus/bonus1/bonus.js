// bonus 1
let onlyLetters = document.querySelector(".onlyLetter");


function onlyAlphabets() {
var regex = /^[a-z]*$/i;
if (regex.test(onlyLetters.value)&&onlyLetters.value!='') {

   alert('nice job')
    return true;
} else {
    document.getElementById("notification").innerHTML = "Alphabets Only";
    return false;
}
}