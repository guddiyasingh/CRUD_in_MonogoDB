use("CrudDb")

db.createCollection("courses")
db.courses.insertOne({
    name:"Harry web dev free course",
    price: 0,
})