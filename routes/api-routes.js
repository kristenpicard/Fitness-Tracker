const router = require("express").Router();
const Workout = require("../models/workout");

// ACCORDING TO API.JS WILL NEED

// GET RECENT WORKOUT

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// PUT TO ADD AN EXCERCISE

// router.put("/api/workouts", ({ body }, res) => {
//   //   Transaction.insertMany(body)
//   //     .then((dbTransaction) => {
//   //       res.json(dbTransaction);
//   //     })
//   //     .catch((err) => {
//   //       res.status(400).json(err);
//   //     });
// });

// POST TO CREATE WORKOUT

// router.post("/api/workouts", ({ body }, res) => {
//   //   Transaction.create(body)
//   //     .then((dbTransaction) => {
//   //       res.json(dbTransaction);
//   //     })
//   //     .catch((err) => {
//   //       res.status(400).json(err);
//   //     });
// });

// GET FOR WORKOUTS IN RANGE

// router.get("/api/workouts/range", (req, res) => {
//   //   Transaction.find({})
//   //     .sort({ date: -1 })
//   //     .then((dbTransaction) => {
//   //       res.json(dbTransaction);
//   //     })
//   // .catch((err) => {
//   //   res.status(400).json(err);
//   // });
// });

module.exports = router;
