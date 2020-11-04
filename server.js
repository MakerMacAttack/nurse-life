const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const postsRoutes = require('./routes/posts');
<<<<<<< HEAD
const db = require('./db/connection');
=======
const usersRoutes = require('./routes/users');
const db = require('./db/connection')
>>>>>>> 8a7336a81f664bde63e5f40119199f04e247f3b1
const PORT = process.env.PORT || 3000

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api', postsRoutes);
app.use('/api', usersRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))