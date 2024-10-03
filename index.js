const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const sequelize = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8090;

// Middleware
app.use(bodyParser.json());

// Use the routes
app.use('/api', todoRoutes);

// Sync the database
sequelize.sync().then(() => {
    console.log('Database & tables created!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});