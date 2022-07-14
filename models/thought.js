const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema =  require('./Reaction')

const ThoughtSchema = new Schema (
  {
    thoughtText: {
      type: String,
      required: true,
      //must be between 1-280 characters
    },  
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;