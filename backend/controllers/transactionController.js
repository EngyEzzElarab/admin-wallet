const Transaction = require('../models/Transaction');

const getAllTransactionsForAUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const transactions = await Transaction.find({ userId }).exec();
    return res.json(transactions);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({}).exec();
    return res.json(transactions);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

module.exports = {
  getAllTransactions,
  getAllTransactionsForAUser,
};
