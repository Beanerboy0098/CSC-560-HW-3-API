//playerController.js
const express = require('express');
const router = express.Router();

const Players = require('../models/Players');

router.get('/getplayers', async (req, res) => {
    const players = await Players.find({});
    try {
       res.send(players);
     } catch (error) {
       res.status(500).send(error);
     }
 })





router.post('/addplayers', async (req, res) => {
    var newplayer = new Players({
        Name: req.body.Name,
        Position: req.body.Position,
        Games_Played: req.body.Games_Played,
	    Goals: req.body.Goals,
        Assists: req.body.Assists,
        Penalty_Minutes: req.body.Penalty_Minutes,
        Power_Play_Goals: req.body.Power_Play_Goals,
        Power_Play_assists: req.body.Power_Play_assists,
        Shots_on_Goal: req.body.Shots_on_Goal,
        Goals_Against: req.body.Goals_Against,
        Shots_Against: req.body.Shots_Against,
        Wins: req.body.Wins,
        Loses: req.body.Loses

    })
    newplayer.save((err, Players) => {
        if(err){
            res.json({msg: 'Failed to add player'});
        }
        else{
            res.json({msg: 'Player added successfully'});
        }
    })
 })

 router.delete('/deleteplay/:id', async (req, res) => {

    await Players.deleteOne({"_id": req.params.id})
       .then(result => {
          if(result.deletedCount === 0){
            res.json({msg: 'No record was deleted'});
          }
          else{
            res.json({msg: 'Player successfully deleted'});
          }
       })
       .catch(error => res.json(error))
 })

router.put('/updateplay/:id', async (req, res) => {

    
  
        await Players.updateMany({"_id": req.params.id},
        {
            
            $set: req.body
        })
        .then(results => {
            res.json({msg: 'Player Updated Successfully'});
        }) 
        .catch(error => res.json(error));
    })

    
 //Alphabeltize the database
 router.get('/getalphabet', async (req, res) => {
    await Players.find().sort({"Name":-1})
       .then(results => {
          res.json(results);
       })
       .catch(error => console.error(error))
 })


 router.get('/getplayermostshots', async (req, res) => {
    await Players.find().sort({"Shots_on_Goal":-1}).limit(1)
       .then(result => {
          res.json(result);
       })
       .catch(error => console.error(error))
 })

 router.get('/getplayermostpenaltyminutes', async (req, res) => {
    await Players.find().sort({"Penalty_Minutes":-1}).limit(1)
       .then(result => {
          res.json(result);
       })
       .catch(error => console.error(error))
 })


 router.get('/getplayerleastshotsgoal', async (req, res) => {
    await Players.find({Shots_on_Goal:{$gte:0}}).sort({Shots_on_Goal:1}).limit(1)
       .then(result => {
          res.json(result);
       })
       .catch(error => console.error(error))
 })


 router.get('/getorderofplayershotsagainst', async (req, res) => {
  await Players.find({Shots_Against:{$gte:0}}).sort({Shots_Against:1})
       .then(results => {
          res.json(results);
       })
       .catch(error => console.error(error))
 })

module.exports = router;

