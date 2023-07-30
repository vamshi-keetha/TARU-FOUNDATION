//create router to handle user api requests
const exp = require('express');
const userApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");


//import middliware verifytoken(this token keeps the data private and does not call the route until the token is verified)
const verifyToken = require("./middlewares/verifyToken");


//import bcryptjs for password hashing
const bcryptjs = require("bcryptjs");


//import jsonwebtoken to create token 
const jwt = require("jsonwebtoken");
const express = require('express');


//import dotenv file 
require("dotenv").config();


var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");


//configure cloudinary
cloudinary.config({

    //Data stored in in '.env' file 
    cloud_name: "onlinephotos",
    api_key: 671459964836768,
    api_secret: "nIhe334njSNO6VjpnpPxCDUAo_Q",
    secure: true,
})


//config cloudinary storage
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: "vnr2022",
            public_id: file.fieldname + "-" + Date.now(),
        };
    },
});


//config multer
var upload = multer({ storage: cloudinaryStorage });


//to extract the body of request object
userApp.use(exp.json())


//USER ROUTES


//Creating user REST API

//create a route to handle '/getusers' path
userApp.get("/getusers", verifyToken, expressAsyncHandler(async (request, response) => {

    //let userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");

    //get all users
    let users = await userCollectionObject.find().toArray();

    //send response to admin
    response.send({ message: "Users list", payload: users });

}));


//create a route to handle '/login'
userApp.post("/login", expressAsyncHandler(async (request, response) => {

    //let userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");

    //get user credentials obj from client
    let userCredObj = request.body

    //search for user by username
    let userOfDb = await userCollectionObject.findOne({ username: userCredObj.username });

    //if username not existed 
    if (userOfDb == null) {
        response.send({ message: "Invalid username" });
    }
    //if username existed 
    else {
        //compare the passwords
        let status = await bcryptjs.compare(userCredObj.password, userOfDb.password);
        //if passwords are matched
        if (status == false) {
            response.send({ message: "Invalid password" });
        }
        //if passwords are matched
        else {
            //create token 
            let token = jwt.sign({ username: userOfDb.username }, 'abcdef', { expiresIn: 30 });
            //send token to client
            response.send({ message: "success", payload: token, userObj: userOfDb });
        }
    }

}));


//create a route to handle '/createuser'
userApp.post('/createuser', upload.single("photo"), expressAsyncHandler(async (request, response) => {

    //get link from cloudinary
    console.log(request.file.path);


    //let userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");

    //get userObject from client and convert into object
    let newUserObj = JSON.parse(request.body.userObj);

    //search for user by username
    let userOfDb = await userCollectionObject.findOne({ username: newUserObj.username });

    //if user existed 
    if (userOfDb != null) {
        response.send({ message: "Username has already taken...Please choose other username" });
    }
    //if user not existed
    else {
        //hash password
        let hashedPassword = await bcryptjs.hash(newUserObj.password, 6);
        //replace plain password with hashed password in newUserObject
        newUserObj.password = hashedPassword;
        //add profile image link to newUserObj
        newUserObj.profileImg = request.file.path;
        //insert newUser
        await userCollectionObject.insertOne(newUserObj);
        //send response to user
        response.send({ message: "New user created successfully" });
    }

}));


//create a route to handle '/createproduct'
userApp.post('/createproduct', upload.single("photo"), expressAsyncHandler(async (request, response) => {

    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");

    //get product obj from req
    let productObj = JSON.parse(request.body.userObj)

    productObj.profileImg = request.file.path;

    //insert productObj
    let result = await productCollectionObject.insertOne(productObj);

    //send respone
    response.send({ message: "product created successfully" });

}));



//create a route to handle '/updateuser'
userApp.put('/updateuser', expressAsyncHandler(async (request, response) => {

    //let userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");

    //get modified user obj
    let modifiedUser = request.body;

    //update data
    await userCollectionObject.updateOne({ username: modifiedUser.username }, { $set: { email: modifiedUser.email, city: modifiedUser.city } });

    //send response
    response.send({ messgae: "User details is modified Successfully" });

}));


//create a route to handle '/updatecartdata'
userApp.put('/updatecartdata', expressAsyncHandler(async (request, response) => {

    //let userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");

    //get modified user obj
    let modifiedUser = request.body;

    //update data
    await userCollectionObject.updateOne({ username: modifiedUser.username }, { $set: { productsincart: modifiedUser.productsincart } });

    //send response
    response.send({ messgae: "Cart details is Updated Successfully" });

}));



//create a route to handle '/removeuser/:username'
userApp.delete('/removeuser/:username', expressAsyncHandler(async (request, response) => {

    //let userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");

    //get username from url parameter
    let userName = request.params.username;

    //get user by username
    let user = await userCollectionObject.findOne({ username: userName });

    //if user not existed
    if (user == null) {
        response.send({ message: "User is not existed" });
    }
    //if user existed
    else {

        await userCollectionObject.deleteOne({ username: userName });
        response.send({ messgae: "User Deleted Successfully" });
    }

}));


//private route for testing
userApp.get('/test', verifyToken, (request, response) => {
    response.send({ message: "This reply is from private route" });
})


//export userApp
module.exports = userApp;