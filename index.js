const express = require('express');
const app = express();
const router = require('./src/routes');
const port = 5000;

app.use(express.json());
app.use('/api/v1/', router);
app.get('/', (req, res) => {
  res.send('Hello Developers');
});
app.listen(port, () => {
  console.log(`Server is listen on  ${port}`);
});
