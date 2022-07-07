var express = require("express");
var router = express.Router();
var person = require("../models/person");

/* GET phonebook all users listing. */
router.get("/phonebook", async (req, res) => {
  await person.find({}).exec((error, result) => {
    if (error) res.status(500).send(error);
    res.send(result);
  });
});

/* POST add new user */
router.post("/phonebook", async (req, res) => {
  try {
    const data = new person({
      name: req.body.name,
      age: req.body.age,
      phone_number: req.body.phone_number,
      group: req.body.group,
    });

    await data.save((error, result) => {
      if (error) res.status(500).send(error);
      else {
        console.log(result);
        res.json(result);
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

/* DELETE request */
router.delete("/phonebook/:id", async (req, res) => {
  await person.deleteOne({ _id: req.params.id }).exec((error, result) => {
    if (error) res.status(500).send(error);

    console.log(result);
    res.send({ message: "user deletion successful" });
  });
});

/* PATCH reqest to update the user */
router.patch("/phonebook/:id", async (req, res) => {
  await person
    .findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      age: req.body.age,
      phone_number: req.body.phone_number,
      group: req.body.group,
    })
    .exec((error, result) => {
      if (error) res.status(500).send(error);

      console.log(result);
      res.send({ message: "user updation successful" });
    });
});

module.exports = router;
