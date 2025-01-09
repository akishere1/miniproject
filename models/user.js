const mongoose = require('mongoose');
require('dotenv').config(); 

// MongoDB Atlas connection string
// const connectionString = process.env.DB_CONNECTION_STRING || 'mongodb+srv://tryhariomsk:5zmmGkYobOq1RxBS@cluster0.jas61.mongodb.net/?retryWrites=true&w=majority';
const connectionString = process.env.DB_CONNECTION_STRING || 'mongodb+srv://tryhariomsk:5zmmGkYobOq1RxBS@cluster0.jas61.mongodb.net/?retryWrites=true&w=majority&tls=true';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'greenlens', // Replace with your database name
  tlsAllowInvalidCertificates: true, // Disable certificate validation temporarily
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));
  
// Define a sample schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// // Connect to MongoDB Atlas
// mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'your-database-name',  // Replace with your actual database name
// })
// .then(() => console.log('Connected to MongoDB Atlas'))
// .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));