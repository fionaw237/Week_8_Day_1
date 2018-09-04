use zoo;
db.dropDatabase();

db.animals.insertOne({
  name: "Janet",
  type: "Polar Bear"
});

db.animals.insertOne({
  name: "Norman",
  type: "Capybara",
  age: 5
});

db.animals.deleteOne({name: "Janet"});
