 
//  crud operation
 use("CrudDb")


//  create
// db.createCollection("courses")
// db.courses.insertOne({
//     name:"Harry web dev free course",
//     price: 0,
//     assignments:12,
//     projects:45
// })
//insert
// db.courses.insertOne({
//     name: "Harrys web dev free  course",
//     price:12000,
//     assignments: 12,
//     projects:45

// })

// db.courses.insertMany(


//     [
//   {
//     "name": "Harrys Web Dev Free Course - Beginner",
//     "price": 12000,
//     "assignments": 12,
//     "projects": 45
//   },
//   {
//     "name": "Harrys Web Dev Free Course - Advanced",
//     "price": 13000,
//     "assignments": 15,
//     "projects": 50
//   },
//   {
//     "name": "Harrys Web Dev Free Course - Frontend Track",
//     "price": 12500,
//     "assignments": 10,
//     "projects": 40
//   },
//   {
//     "name": "Harrys Web Dev Free Course - Backend Mastery",
//     "price": 13500,
//     "assignments": 14,
//     "projects": 48
//   },
//   {
//     "name": "Harrys Web Dev Free Course - Fullstack Path",
//     "price": 15000,
//     "assignments": 20,
//     "projects": 60
//   },
//   {
//     "name": "Harrys Web Dev Free Course - HTML & CSS Focus",
//     "price": 11000,
//     "assignments": 8,
//     "projects": 35
//   },
//   {
//     "name": "Harrys Web Dev Free Course - JS Intensive",
//     "price": 14500,
//     "assignments": 18,
//     "projects": 55
//   },
//   {
//     "name": "Harrys Web Dev Free Course - React Special",
//     "price": 16000,
//     "assignments": 22,
//     "projects": 65
//   },
//   {
//     "name": "Harrys Web Dev Free Course - Node.js Track",
//     "price": 14000,
//     "assignments": 16,
//     "projects": 50
//   },
//   {
//     "name": "Harrys Web Dev Free Course - Bootcamp Edition",
//     "price": 15500,
//     "assignments": 25,
//     "projects": 70
//   }
// ]

// )

// let a =db.courses.find({price: 0})
// // console.log(a.count())
// console.log(a.toArray())

// update

// db.courses.updateOne({price:
//      0},{$set:{price: 100}})

// db.courses.updateMany({price: 1000})   




db.courses.insertOne(
{
  name: "sue",
  age: 26,
  status: "pending"
}

)

db.courses.find(
  {age: {$gt: 18}},
  {name: 1, address: 1}
)

db.courses.updateMany(

  { age: {$It:18 } },
  {$set: {status: "reject"}}

)
db.courses.deleteMany(

  {status: "reject"}
)