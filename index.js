const express = require('express');
const findUniqCharRoute = require('./routes/findUniqCharRoute');
const app = express();

app.use(express.json());

app.use('/', findUniqCharRoute);

const port=5000;
app.listen(port || 5000, () => {
      console.log('server is running at the port 5000')
})

