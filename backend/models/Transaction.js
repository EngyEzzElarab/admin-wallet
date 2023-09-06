const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  id: Number,
  userId: String,
  amount: Number,
  type: { type: String, enum: ['deposit', 'withdrawal'] },
  timestamp: String,
});

module.exports = mongoose.model('Transaction', transactionSchema);
