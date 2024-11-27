require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDb = require('./db');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Connect to the database
connectDb();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: process.env.ORIGIN, // Set to the frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow credentials
};
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Test route
app.get('/', (req, res) => {
  res.send('Hello World! code with praveen');
});

// Start the server
app.listen(port, () => {
  console.log(`Allowed Origin: ${process.env.ORIGIN}`);
  console.log(`Server is listening on port ${port}`);
});
