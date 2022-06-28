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


router.get('/getplayers/:id', async (req, res) => {
    Players.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


router.post('/addplayers',  async (req, res) => {
    var newplayer = new Players({
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


  
        await Players.updateMany({'_id': req.params.id},
        {
            $set: req.body
        })
        .then(result => {
            res.json({msg: 'Player Updated Successfully'});
        }) 
        .catch(error => res.json(error));
    })



module.exports = router;

