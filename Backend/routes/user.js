// const express = require('express');
import express from "express"
import { login, register } from "../controller/user.js";
const router = express.Router();

// const UserController = require('./controllers/UserController'); // Assuming you have a UserController

// Login route
router.post('/login', login);

// Register route
router.post('/register', register);

export default router

// module.exports = router;