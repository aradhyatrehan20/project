// const User = require('../models/User'); // Assuming you have a User model
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



export const register = async (req, res) => {

    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User  registered successfully' });
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Error registering user' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    console.log("user: ", user)
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret'); // Use a secure secret
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
};