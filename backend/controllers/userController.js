const User = require('../models/User'); 
const Transaction = require('../models/Transaction');
//
const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'name balance').exec();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

const adjustBalance = async (req, res) => {
  const userId = req.params.id;
  const { amount, type } = req.body;

  try {
    const user = await User.findById(userId, 'balance');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let newBalance = user.balance;
    if (type == 'deposit') {
      newBalance += amount;
    } else if (type == 'withdrawal') {
      newBalance -= amount;
    } else {
      return res.status(400).json({ message: 'Invalid adjustment type' });
    }
    
    const newTransaction = new Transaction({
      userId,
      amount,
      type,
      timestamp: new Date().toLocaleDateString('en-EG'),
    });

    const savedTransaction = await newTransaction.save();
    await User.findByIdAndUpdate(userId, { balance: newBalance });

    return res.json({
      message: 'Balance adjusted successfully in user',
      newBalance,
      transaction: savedTransaction,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to adjust balance and create transaction', error });
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  adjustBalance,
};
