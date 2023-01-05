use mydb
db.createCollection("student")
show collections
db.student.insertOne({
    firstName: "mostafa", lastName: "hussien", age: 22, faculty: { name: "scinse", address: "assuit" },
    grades: [{ courseName: "it", grad: "100", pass: true }, { courseName: "chemistry", grad: "50", pass: false }], isFire: false
})


db.student.insertMany([
    { firstName: "mostafa", lastName: "hussien", age: 22, faculty: { name: "scinse", address: "assuit" }, grades: [{ courseName: "it", grad: "100", pass: true }, { courseName: "chemistry", grad: "50", pass: false }], isFire: null }
    , { firstName: "jehan", lastName: "isma3il", age: 18, faculty: { name: "scinse", address: "bis" }, grades: [{ courseName: "it", grad: "100", pass: true }, { courseName: "chemistry", grad: "50", pass: false }], isFire: false }
    , { firstName: "ahmed", lastName: "hussien", age: 19, faculty: { name: "physics", address: "assuit" }, grades: [{ courseName: "it", grad: "10", pass: true }, { courseName: "chemistry", grad: "50", pass: false }], isFire: true }
])


//All Students
db.student.find({}).pretty()

//Student with specific First Name
db.student.find({firstName:"ahmed"}).pretty()

//All fired students. 
db.student.find({isFire:true}).pretty()

//Display student with specific First Name, and display his First Name, Last name, IsFired fields only. 
db.student.find({firstName:"ahmed" },{age:0,faculty:0,grades:0,id:0}).pretty()


//Update the student with specific FirstName, and change his LastName. 

db.student.updateMany({firstName:"ahmed" },{$set:{lastName:"khaled"}})
db.student.find({firstName:"ahmed" }).pretty()

// delet all firedstudent
db.student.deleteMany({firstName:"ahmed"})

// delete all firedstudent
db.student.deleteMany({firstName:"ahmed"})


//delete collection student
db.student.drop()
 


//bonus 

//Students who his First Name=Ahmed, or Last Name= Ahmed. 
db.student.find({ $or:[ {firstName: "ahmed"} ,{lastName:"isma3il"} ] }).pretty()

//Students with Age less than 21. 
db.student.find({ age: { $lt:21}}).pretty()


//Students that their First name isn't "Ahmed". 
db.student.find({firstName :{$ne:"ahmed"}}).pretty()

//Students with Age more than or equal to 21, and their faculty isn't NULL. 
db.student.find({ $and:[ {age: { $gte:21}} ,{isFire:null} ] }).pretty()



