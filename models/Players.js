var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
const PlayerSchema = new Schema( {
    Name: {
        type: String,
        required: true
    },
Position : {
        type: String,
        required: true
    },
    Games_Played: {
        type: Number,
        required: true
    },
    
Goals: {
        type: Number,
        required: true
       
    },


Assists: {
        type: Number,
        required: true
    },


Penalty_Minutes: {
        type: Number,
        required: true
    },

Power_Play_Goals: {
        type: Number,
        required: true
    },


Power_Play_assists: {
        type: Number,
        required: true
    },

Shots_on_Goal: {
        type: Number,
        required: true
    },

Goals_Against: {
        type: Number,
        required: false
    },

Shots_Against: {
        type: Number,
        required: false
    },

Wins: {
        type: Number,
        required: false
    },

Loses: {
        type: Number,
        required: false
    }

   
});

module.exports = mongoose.model("Players", PlayerSchema,"Players");