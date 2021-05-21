const router = require("express").Router();
const Workout = require("../models/workout");

// ACCORDING TO API.JS WILL NEED

// GET RECENT WORKOUT FOR HOME PAGE

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

// PUT TO ADD AN EXCERCISE

router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

// POST TO CREATE WORKOUT

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

// GET FOR WORKOUTS IN RANGE FOR DASH
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    // SORT NEW TO OLD
    { $sort: { day: -1 } },
    { $limit: 7 },
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    // NOW SORT OLD TO NEW FOR GRAPH
    { $sort: { day: 1 } },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router;
