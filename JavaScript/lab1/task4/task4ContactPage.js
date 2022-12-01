

let  nameContainer=document.getElementById('name')
let  birthContainer=document.getElementById('birth')
let  ageContainer=document.getElementById('age')

let nameOFuser;
let birth;



do {
    nameOFuser =prompt('enter your name');
}
while (!isNaN(+nameOFuser));
nameContainer.innerHTML = `${nameOFuser}`




let dateNow =new Date()
do { 
    birth=prompt('enter your birth by number and must greater than 2010');
  }
  while (isNaN(+birth) || +birth>2010);


birthContainer.innerHTML = `${birth}`
ageContainer.innerHTML = `${dateNow.getFullYear()- birth}`





 