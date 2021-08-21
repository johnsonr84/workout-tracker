const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: true,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true,
                required: true,
				lowercase: true,
            },
            duration: {
                type: Number,
                trim: true,
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
            distance: {
                type: Number,
                trim: true,
            },
        },
    ],
},
    {
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        },
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + (exercise.duration || 0);
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;