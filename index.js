const express = require('express');
const session = require('express-session');
const authController = require('./controllers/authController.js');
const { isLoggedIn } = require('./middleware/authMiddleware.js');
const userRoutes = require('./routes/userRoutes');



const app = express();

app.use(express.json());

app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/auth', authController);
app.use('/users', userRoutes);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});