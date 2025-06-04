const jwt = require('jsonwebtoken');
const { User } = require('../models');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: 'Erro ao registrar usuário' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error();
    }
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.send({ user, token });
  } catch (error) {
    res.status(401).send({ error: 'Credenciais inválidas' });
  }
};

const getMe = async (req, res) => {
  res.send(req.user);
};

module.exports = { register, login, getMe };