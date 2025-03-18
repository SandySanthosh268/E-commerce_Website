 const orderModel = require('../models/orderModel');
 

 //Create order - /api/v1/order
 exports.createOrder = async(req, res, next) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item) => (item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';

   const order = await orderModel.create({cartItems,amount, status})


    // orderModel.create()
    
    res.json(
        {
            success:true,
            order
        }
    )
 }