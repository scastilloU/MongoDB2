const mongoose = require('mongoose');

// Connection URL and database name
mongoose.connect('mongodb+srv://user3:Welcome1@mydatabase1.xhiy1cl.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const dbName = 'MyDataBase2';

// Define a MongoDB model for your data
const Task = mongoose.model('Task', {
  name: String,
  email: String,

});

// Data to insert into the database
const dataToInsert = {
  name: 'Sergio Castillo',
  email: 'sergio.castillo@ucreativa.com',
  
};

// Connect to the server and insert data
mongoose.connection.once('open', () => {
  console.log('Connected successfully to MongoDB');
  const db = mongoose.connection.db;

  // Get the collection (or create it if it doesn't exist)
  const collection = db.collection('tasks');

  // Insert a single document
  collection.insertOne(dataToInsert, (insertErr, result) => {
    if (insertErr) {
      console.error('Error inserting document:', insertErr);
    } else {
      console.log('Document inserted successfully');
    }

    // Close the connection
    mongoose.connection.close();
  });
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});
