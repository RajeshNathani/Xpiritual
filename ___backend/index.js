const { json } = require('express');
const express = require('express');
const userRouter = require('./routes/user')
const User = require('./models/user');

require('./models/db');

require('dotenv').config();

const cors = require('cors')

const app = express();

app.use(cors({origin:true}))

app.use(express.json())
app.use(userRouter)


app.get('/', (req, res) => {
  res.json({success:true});
});

app.listen(8000, () => {
  console.log('Port is listening');
});

//mongodb+srv://Prakhar217:<password>@nodeexpressprojects.k0dow.mongodb.net/?retryWrites=true&w=majority
