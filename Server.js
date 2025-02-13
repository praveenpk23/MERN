const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./Config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

// Middleware
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from your React frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow GET, POST, PUT, DELETE requests
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow Content-Type and Authorization headers
    credentials: true // Allow cookies to be sent
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/users', userRoutes); // Ensure the route is correctly defined

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
