const jwt = require("jsonwebtoken");
require("dotenv").config();


//write a middleware to verify token
const verifyToken=(request,response,next)=>{

    //get bearer token
    let bearerToken = request.headers.authorization;
    //check is token is existed or not
    if(bearerToken==undefined){
        response.send({message:"Unauthorized request"})
    }
    //extract token
    let token = bearerToken.split(" ")[1];

    //if token is null
    if(token===null){
        return response.send({message:"Unauthorized request"})
    }
    try{
        //verify token
        jwt.verify(token,process.env.SECRET_KEY);
        //forward request to peivate route
        next()
    }
    catch(err){
        return response.send({message:"Session expired..Relogin to continue"});
    }
    
}

//export 
module.exports=verifyToken;