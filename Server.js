const express = require('express')
const app = express();
const PORT = 2000;
const helmet = require('helmet');
// const cors = require('cors');
// const corsOptions = {
//     origin: 'https://mern-pk.onrender.com/', // Only this domain can access the API
//     methods: ['GET', 'POST'], // Only allow GET and POST requests
//     allowedHeaders: ['Content-Type','Authorization'], // Only allow Content-Type header
//     Credential: true // Allow cookie to be sent
// };
// app.use(cors(corsOptions));     


const allowedOrigin = 'https://majestic-tartufo-94d666.netlify.app';

app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (origin === allowedOrigin) {
        res.setHeader('Access-Control-Allow-Origin', allowedOrigin); // Allow only Netlify
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        if (req.method === 'OPTIONS') {
            return res.sendStatus(204); // Preflight request success
        }
    } else {
        return res.status(403).json({ error: "CORS Error: Access denied" });
    }

    next();
});



app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!', status: 200 })
});

app.get('/about',(req,res)=>{
    res.send("Nama company thann  , Bossuh")
})

app.post('/post',(req,res)=>{
    const {Your_name,Your_lover_name} = req.body;
    res.json({message:`Hello ${Your_name} , wish your love successfull with ${Your_lover_name}`})
})

app.use((req,res)=>{
    res.status(404).send("404 Not Found, Dumb Ass! 😆");
})





app.listen(PORT,()=>{
    console.log( `Server running on ${PORT}`)
})