const exp = require('express');
const productApp  = exp.Router();
const expressAsyncHandler = require('express-async-handler');


//to extract the body of request object
productApp.use(exp.json())


//creating product REST API

//create a route to handle '/getproducts'
productApp.get('/getproducts',expressAsyncHandler(async(request,response)=>{

    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");

    //read allproducts 
    let product = await productCollectionObject.find().toArray()

    //check if no products are present in the collection
    if(product.length==0){
        response.send({message:"No products to show"})
    }
    //if products present in the collection
    else{
        response.send({message:"All products",payload:product});
    }

}));


//create a route to handle a specific product '/getproduct/id'
productApp.get('/getproduct/:id',expressAsyncHandler(async(request,response)=>{
    
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");
    
    //get productId from url parameter
    let pid = (+request.params.id);
    
    //get product by id
    let product = await productCollectionObject.findOne({productId:pid});

    //if product not existed
    if(product==null){
        response.send({message:"Product is not existed"});
    }
    //if product existed
    else{
        response.send({messgae:"Product existed",payload:product});
    }

}));


//create a route to handle '/createproduct'
productApp.post('/createproduct',expressAsyncHandler(async(request,response)=>{
    
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");

    //get product obj from req
    let productObj = request.body

    //insert productObj
    let result = await productCollectionObject.insertOne(productObj);

    //send respone
    response.send({message:"product created successfully"});

}));


//create a route to handle '/uodateproduct'
productApp.put('/updateproduct',expressAsyncHandler(async(request,response)=>{
    
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");

    //get modified product obj
    let modifiedProduct = request.body;

    //update data
    await productCollectionObject.updateOne({productId:modifiedProduct.productId},{$set:{...modifiedProduct}});

    //send response
    response.send({messgae:"Product details is modified Successfully"});

}));


//create a route to handle '/removeproduct/id'
productApp.delete('/removeproduct/:id',expressAsyncHandler(async(request,response)=>{

    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");

    //get productId from url parameter
    let pid = (+request.params.id);

    //get product by id
    let product = await productCollectionObject.findOne({productId:pid});

    //if product not existed
    if(product==null){
        response.send({message:"Product is not existed"});
    }
    //if product existed
    else{

        await productCollectionObject.deleteOne({productId:pid});
        response.send({messgae:"Product Deleted Successfully"});
    }

}));


//export productApp
module.exports=productApp;