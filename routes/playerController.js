//playerController.js
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const {Players} = require('../models/players');

router.get('/api/Players', (req, res) => {
Players.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
    
});


router.get('/api/Player/:id', (req, res) => {
    Players.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


router.post('/api/Players/add', (req, res) => {
    const emp = new Players({
        Name: req.body.Name,
        Position: req.body.Position,
        Games_Played: req.body.Games_Played,
	  Goals: req.body.Goals,
        Assists: req.body.Assists,
        Penalty_Minutes: req.body.Penalty_Minutes,
        Power_Play_Goals: req.body.Power_Play_Goals,
        Power_Play_assists: req.body.Power_Play_assists,
        Shots_on_Goal: req.body.Shots_on_Goal

    });
    emp.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Player Added Successfully', addPlayer: data})
        } else {
           console.log(err);
        }
    });
});

router.put('/api/Players/update/:id', (req, res) => {


    const emp = {
        Name: req.body.Name,
        Position: req.body.Position,
        Games_Played: req.body.Games_Played,
	  Goals: req.body.Goals,
        Assists: req.body.Assists,
        Penalty_Minutes: req.body.Penalty_Minutes,
        Power_Play_Goals: req.body.Power_Play_Goals,
        Power_Play_assists: req.body.Power_Play_assists,
        Shots_on_Goal: req.body.Shots_on_Goal
    };
    Players.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Player Updated Successfully', updatePlayer: data})
        } else {
            console.log(err);
        }
    });
});

router.delete('/api/Players/:id', (req, res) => {

    Players.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Player deleted', deletePlayer: data})
        } else {
            console.log(err);
        }
    });
});

module.exports = router;

