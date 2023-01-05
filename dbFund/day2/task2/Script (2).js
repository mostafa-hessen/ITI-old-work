show collections
db.createCollection("student")


db.student.insertOne({
    firstName: "mostafa", lastName: "hussien", age: 22, 
    courseGrades: [{ courseId:123, grad: "100"  }, { courseId: 2321, grad: "50" }], isFire: false
})

db.createCollection("faculty")
 
db.faculty.insertOne({
    facultyName:"scince",address:"123 asuit"
})


db.createCollection("course")
 
db.course.insertOne({
   courseName:"chemstry",finalMark:"100t"
})

db.student.find({}).pretty()
db.faculty.find({}).pretty()
db.course.find({}).pretty()




