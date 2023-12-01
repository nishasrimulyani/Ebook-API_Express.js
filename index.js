const express = require('express');
const userRoutes = require('./routes/userRoutes');


const app = express();

app.use(express.json());


app.use('/users', userRoutes);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});