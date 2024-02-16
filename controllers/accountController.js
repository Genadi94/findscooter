import express from "express";
const router = express.Router();
import bcryptjs from "bcryptjs";
import jsonwebtoken from 'jsonwebtoken';
import Account from "../models/accountModel.js";


router.post('/signup',(req,res) => {});

router.post('/verify', (req,res) =>{});

router.post('/login', (req,res) => {});

router.get('/getAccounts', (req,res) => {});


export default router ;