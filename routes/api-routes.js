const router = require("express").Router();
const Workout = require("../models/workout");

// ACCORDING TO API.JS WILL NEED

// GET RECENT WORKOUT

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// PUT TO ADD AN EXCERCISE

router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate({
    _id: req.params.id,
  })
    // I KNOW THERE IS MORE TO THIS?  NEED TO FIGURE OUT DURATION
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// POST TO CREATE WORKOUT

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET FOR WORKOUTS IN RANGE
// FEEL LIKE THERE SHOULD BE MORE TO THIS ROUTE?
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
