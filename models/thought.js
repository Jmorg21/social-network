const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
const { stringify } = require('querystring');
const dateFormat = require('../utils/dateFormat');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Need a message.',        
            minlength: 1, 
            maxlength: 280
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true, 
            ref: 'User'
        },
        reactions: [ReactionSchema],        
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
    },
    username: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MM DD, YYY [at] hh: mm a')
    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought; 