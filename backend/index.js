/// @ts-checkk
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb+srv://engyelarab:PemxtPyRrJVqPdKP@cluster0.nm8miby.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));



const userController = require('./controllers/userController');
const transactionController = require('./controllers/transactionController');
// user-related routes
try {
  app.get('/users/:id', userController.getUserById);
}
catch (error){
  return res.status(500).json({ message: 'Server error', error: err });
}
try {
app.get('/users', userController.getAllUsers);
}
catch (error){
  return res.status(500).json({ message: 'Server error', error: err });
}
try {
  app.post('/users/:id/adjust-balance',userController.adjustBalance)
  }
  catch (error){
    return res.status(500).json({ message: 'Server error', error: err });
  }

// transaction-related routes
try {
 app.get('/users/:id/transactions', transactionController.getAllTransactionsForAUser)
}
  catch (error){
    return res.status(500).json({ message: 'Server error', error: err });
  }

  try {
      app.get('/transactions', transactionController.getAllTransactions)
}
     catch (error){
       return res.status(500).json({ message: 'Server error', error: err });
     }



app.get('/', (req,res)=>{
    res.send('Hello There')
})

app.listen(3000, ()=>{
    console.log('server is listening on port 3000')
})