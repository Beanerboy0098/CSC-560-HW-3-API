var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
const PlayerSchema = new Schema( {
    Name: {
        type: String
    },
Position : {
        type: String
    },
    Games_Played: {
        type: Number
    },
    
Goals: {
        type: Number
       
    },


Assists: {
        type: Number
    },


Penalty_Minutes: {
        type: Number
    },

Power_Play_Goals: {
        type: Number
    },


Power_Play_assists: {
        type: Number
    },

Shots_on_Goal: {
        type: Number
    },

Goals_Against: {
        type: Number
    },

Shots_Against: {
        type: Number
    },

Wins: {
        type: Number
    },

Loses: {
        type: Number
    }

   
});

module.exports = mongoose.model("Players", PlayerSchema,"Players");