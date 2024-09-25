import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
const { models } = require("../models");
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  // TO DO latter
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password didn't match!" });
    }
    const user = await User.find({ username });
    if (user.length >= 1) {
      return res.status(400).json({ error: "username already exists!" });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ Error: "Failed to create new user" });
    }
  } catch (error) {
    res.status(500).json({ Error: "Internal server error" });
  }
};

export const register = async (req, res) => {
  const { name, email, password, role, restaurantId } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await models.User.create({
    name,
    email,
    password: hashedPassword,
    role,
    restaurantId,
  });

  res.status(201).send(user);
};

export const login = async (req, res) => {
  // finished login
  try {
    const { email, password } = req.body;
    const user = await models.User.findOne({ where: { email } });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    generateTokenAndSetCookie(user.id, res);
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ Error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  // finished logout
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
