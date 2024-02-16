import express from "express";
const router = express.Router();
import bcryptjs from "bcryptjs";
import jsonwebtoken from 'jsonwebtoken';
import Account from "../models/accountModel.js";


router.post('/signup',(req,res) => {
    //1.Get the user credentials 
    const {firstName, lastName,email,password} = req.body;

    //2. Check if mail is available
    Account.findAll({where:  {email:email}}) 
    .then(async results => {
        if(results.length == 0) {
          //3. Handle password 
          const hash = await bcryptjs.hash (password, 10)
         //4. Generate verivication code
         const code = Math.floor(1000 + Math.random() * 9000)
         //5. Store the new account in db
         Account.create({
            firstName:firstName,
            lastName: lastName,
            email: email,
            password: hash,
            verificationCode : code,
            isVerified : false
         })
         //6.Response 
         .then(account_created =>{
            return res.status(200).json ({
                message: account_created
            })
         })
         .catch(error =>{
            console.log(error);
            return res.status(500).json ({
            message:error
           })
         })
        } else {
            return res.status(401).json ({
                message: 'Username is no available, please try another email'
            })
        }
    })
    .catch(error => {
        console.log(error);
        return res.status(500).json ({
            message:error
        })
    })
    
});

router.post('/verify', (req,res) =>{});

router.post('/login', (req,res) => {});

router.get('/getAccounts', (req,res) => {});


export default router ;