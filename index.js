const express = require('express');
const { route } = require('./routes/route');
const app = express();


app.use('/',route);

const port=5000;
app.listen(port || 5000, () => {
      console.log('server is running at the port 5000')
})


