 const orderModel = require('../models/orderModel');
 
 exports.createOrder =(req, res, next) => {
    console.log(req.body, 'DATA');


    // orderModel.create()
    
    res.json(
        {
            success:true,
            message: "order works!"
        }
    )
 }