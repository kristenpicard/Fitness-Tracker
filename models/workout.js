const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// USED EXCERCISE.HTML FOR THESE ITEMS
const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  distance: {
    // miles
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  duration: {
    // minutes
    type: Number,
  },
  weight: {
    // lbs
    type: Number,
  },
  sets: {
    // number
    type: Number,
  },
  reps: {
    // number
    type: Number,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
