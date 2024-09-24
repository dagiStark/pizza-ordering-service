const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { models } = require('../models');
const { validate } = require('../middlewares/validate');
const { registerSchema } = require('../utils/validators');

const router = express.Router();

router.post('/register', validate(registerSchema), async (req, res) => {
  const { name, email, password, role, restaurantId } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await models.User.create({ name, email, password: hashedPassword, role, restaurantId });
  
  res.status(201).send(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await models.User.findOne({ where: { email } });
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }
  
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.send({ token });
});

module.exports = router;
