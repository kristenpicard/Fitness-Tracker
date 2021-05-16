const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// LOOKED OFF OF EXCERCISE.HTML FOR THESE ITEMS
const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  distance: {
    // miles
  },
  date: {
    type: Date,
    default: Date.now,
  },
  duration: {
    // minutes
  },
  weight: {
    // lbs
  },
  sets: {
    // number
  },
  reps: {
    // number
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
