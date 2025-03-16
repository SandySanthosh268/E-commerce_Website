const productModel = require('../models/productModel');

//Get products API - /api/v1/products
exports.getProducts = async(req, res, next) => {

    const products = await productModel.find({});



    res.json({
        success: true,
        products

    })
}

//Get Single products API - /api/v1/product/:id

exports.getSingleProducts = async(req, res, next) => {

    try{
        const product = await productModel.findById(req.params.id);
        res.json({
            success: true,
            product
    
        })



    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Product with that ID'
    
        })

    }





    console.log(req.params.id, 'ID')
    const product = await productModel.findById(req.params.id);



    res.json({
        success: true,
        product

    })
}