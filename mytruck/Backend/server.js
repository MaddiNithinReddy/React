import express from 'express';
import User from './User.js';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

mongoose.connect('mongodb://localhost:27017/Truck')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.post('/signup', async (req, res) => {
  try {
    const existingUser = await User.findOne({ mail: req.body.mail });
    if (existingUser) {
      return res.json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    res.json({ message: 'Signup successful' });
  } catch (err) {
    console.error(err);
    res.json({ message: 'Error saving user' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ mail: req.body.mail });
    if (!user) {
      return res.json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign(
      { id: user._id, mail: user.mail },
      'your_jwt_secret_key',
      { expiresIn: '1h' }
    );
    res.json({
      message: 'Login successful',
      token: token
    });
  } catch (err) {
    console.error(err);
    res.json({ message: 'Server error' });
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
