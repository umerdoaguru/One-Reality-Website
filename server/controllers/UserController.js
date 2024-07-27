const express = require("express");
const { db } = require("../db");
const bcrypt = require("bcrypt");
const JWT = require('jsonwebtoken');


const register = async (req, res) => {
  try {
    const { name, email,password } = req.body;

    // Validations
    const requiredFields = [name, email, password];

    if (requiredFields.some((field) => !field)) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Hash the "password" and "cpassword"
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    // Check if the user already exists
    const checkUserQuery = "SELECT * FROM registered_data WHERE email = ?";

    db.query(checkUserQuery, [email], (err, result) => {
      if (err) {
        console.error("Error checking if user exists in MySQL:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        // Check if there are any rows in the result
        if (result.length > 0) {
          return res.status(400).json({
            error: "User already exists.",
          });
        } else {
          // User not found, proceed with registration
          const insertUserQuery = `
            INSERT INTO registered_data  (
              user_name, email,password
            ) VALUES (?, ?, ?)
          `;

          const insertUserParams = [name, email,hashedPassword];

          db.query(
            insertUserQuery,
            insertUserParams,
            (insertErr, insertResult) => {
              if (insertErr) {
                console.error("Error inserting user:", insertErr);
                res.status(500).json({ error: "Internal server error" });
              } else {
                console.log("User registered successfully");
                return res.status(200).json({
                  success: true,
                  message: "User registered successfully",
                });
              }
            }
          );
        }
      }
    });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};
const login = async (req, res) => {
  try {
     const {email, password} = req.body

     //Validation 
     if(!email || !password){
      return res.status(404).send({
        success: false,
        message: "Invaild email or password ",
      });
     }
     // check user in mysql 
     const checkUserQuery = "SELECT * FROM registered_data WHERE email =?";
     db.query(checkUserQuery,[email],async(err,results)=>{
      if(err){
        console.log("Error checking  user in mysql",err);
      }
      if(results.length===0){
        return res.status(404).send({
          success:false,
          message:"email is not  registered"
        })
      
      }
      const user = results[0];
    

      //compare  passwords
      const match = await bcrypt.compare(password,user.password);
      if(!match){
        return  res.status(404).send({
          success: false,
          message: "Invaild password ",
        });
        
        
      }
     
     //generate  token 
     const token = await JWT.sign({id: user.id}, process.env.JWT_SECRET,{ expiresIn: "7d"});

     res.status(200).send({
      success: true,
      message : "Login sucessfully",
      user:{
        id: user.user_id,
        name:user.user_name,
        email:user.email,
       
      },
      token,
     });
    });
    }

  catch (error) {
  console.log(error);
  res.status(500).send({success:false , message:"error in login ", error})
  }
};
const getuserdata = async (req, res) => {
  try {
   
    const sql = "SELECT * FROM contact  ORDER BY id DESC";

    const userdata = await new Promise((resolve, reject) => {
      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    res.status(200).json(userdata);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const user_data = async (req, res) => {
  
    const {
    
    		name,	email,	subject,	message	

    } = req.body;
    
  
    const sql = `INSERT INTO contact (name,email,subject,message) VAlUES (?,?,?,?)`;
    db.query(
      sql,
      [
        name,	email,	subject,	message	
  
      ],
      (err, results) => {
        if (err) {
          res.status(500).json({ error: "Error of Data" });
        } else {
          res.status(201).json({
            success: true,
            message: "Thank you for submitting the form! Our team will connect with you as soon as possible. ",
          });
        }
      }
    );
  };

  
  module.exports = {user_data,getuserdata,register,login};