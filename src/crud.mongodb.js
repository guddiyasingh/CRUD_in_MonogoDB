use("CrudDb")

db.createCollection("courses")
db.courses.insertOne({
    name:"Harry web dev free course",
    price: 0,
    assignments:12,
    projects:45
})

db.courses.insertOne({
    name: "Harrys web dev free  course",
    price:12000,
    assignments: 12,
    projects:45

})