const express = require('express');

const {createNewWorkOut, viewAllWorkouts, deleteWorkout, updateWorkOut, getSingleWorkout, confirmWorkOut, getClosedWorkout} = require('../controllers/workoutController');


const router = express.Router();


router.get('/', viewAllWorkouts);

router.get('/:id', getSingleWorkout);

router.get('/closed/closedWorks', getClosedWorkout);


// Post
router.post('/', createNewWorkOut);

// Delete
router.delete('/:id', deleteWorkout);

// Update
router.patch('/:id', updateWorkOut);

// Confirm
router.patch('/close/:id', confirmWorkOut);



module.exports = router;