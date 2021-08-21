const express = require('express');
const router = require("express").Router();
// Import model
const db = require('../models');

//Route for GET "/api/workouts/"
router.get('/', async (req, res) => {
	try {
		const result = await db.Workout.find({});
		res.json(result);
	} catch (err) {
		res.status(400).json(err);
	}
});

//Route for POST "api/workouts/"
router.post('/', async ({ body }, res) => {
	try {
		const result = await db.Workout.create(body);
		res.json(result);
	} catch (err) {
		res.status(400).json(err);
	}
});

//Route for PUT "/api/workouts/workout_id"
router.put('/:id', async ({ params, body }, res) => {
	try {
		let savedExercises = [];
		//Find the previous workout by given ID
		const prevWorkout = await db.Workout.findById(params.id);
		//Get the previous exererises
		savedExercises = prevWorkout.exercises;
		//Add the new workout
		totalExercises = [ ...savedExercises, body ];
		res.json(totalExercises);
		//Update the database
		await db.Workout.findByIdAndUpdate(params.id, { exercises: totalExercises });
	} catch (err) {
		res.status(400).json(err);
	}
});

//Route for GET "/api/workouts/range"
router.get('/range', async (req, res) => {
	try {
		const result = await db.Workout.find({});
		res.json(result);
	} catch (err) {
		res.status(400).json(err);
	}
});

//Export router
module.exports = router;