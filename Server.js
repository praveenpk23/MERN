// const express = require('express')
// const app = express();
// const PORT = 2000;
// const helmet = require('helmet');
// const MongoDBConnection = require('./Config/db');
// const cors = require('cors');
// const corsOptions = {
//     origin: 'https://mern-pk.onrender.com/', // Only this domain can access the API
//     methods: ['GET', 'POST'], // Only allow GET and POST requests
//     allowedHeaders: ['Content-Type','Authorization'], // Only allow Content-Type header
//     Credential: true // Allow cookie to be sent
// };
// app.use(cors(corsOptions));     


// const allowedOrigins = ['https://majestic-tartufo-94d666.netlify.app/']; // Only allow this origin

// // Custom CORS middleware
// app.use((req, res, next) => {
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//         res.setHeader('Access-Control-Allow-Origin', origin);
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//         res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//         res.setHeader('Access-Control-Allow-Credentials', 'true');
//         next();
//     } else {
//         res.status(403).json({ error: "CORS Error: Access denied" }); // Custom error response
//     }
// });


// app.use(helmet());
// app.use(express.json());
// MongoDBConnection();
// app.get('/', (req, res) => {
//     res.json({ message: 'Hello, World!', status: 200 })
// });

// app.get('/about',(req,res)=>{
//     res.send("Nama company thann  , Bossuh")
// })

// app.post('/post',(req,res)=>{
//     const {Your_name,Your_lover_name} = req.body;
//     res.json({message:`Hello ${Your_name} , wish your love successfull with ${Your_lover_name}`})
// })
// app.get('/search', (req, res) => {
//     const { name, age } = req.query; // Extract query parameters
//     res.json({ message: `Searching for ${name}, Age: ${age}` });
// });
// app.get('/users/:id', (req, res) => {
//     const { id } = req.params; // Extract URL parameters
//     res.json({ message: `User ID: ${id}` });
// });
// app.use((req,res)=>{
//     res.status(404).send("404 Not Found, Dumb Ass! 😆");
// })






// app.listen(PORT,()=>{
//     console.log( `Server running on ${PORT}`)
// })


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./Config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/Users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
