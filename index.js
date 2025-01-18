const express = require('express');
const findUniqCharRoute = require('./routes/findUniqCharRoute');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/', findUniqCharRoute);

console.log(process.env.PORT);
const port=process.env.PORT || 5000;
app.listen(port || 5000, () => {
      console.log('server is running at the port 5000')
})

