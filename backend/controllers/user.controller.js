const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const UserModel= require('../models/user.model')

// get user
module.exports.getUser = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// create user
module.exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email déjà utilisé" });
    } else {
      res.status(500).json({ message: "Erreur serveur" });
    }
  }
};

//add a user
module.exports.setUser = async (req, res) => {
  if (!req.body.username) {
    res.status(400).json({ message: "Merci d'ajouter un nom" });
  }
  const user = await UserModel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(200).json(user);
};

// edit user
module.exports.editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;

    // Vérifiez si l'utilisateur existe
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Ce profil n'existe pas" });
    }

    // Si vous mettez à jour le mot de passe, assurez-vous de le hacher
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    // Mettez à jour l'utilisateur
    const updateUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur', error });
  }
};
