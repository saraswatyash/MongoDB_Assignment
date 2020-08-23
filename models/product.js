const mongoose=require('mongoose');
const schema=mongoose.Schema;
const Category=require('./category');
const Product_schema=new schema({
        ProductName:
        {
            type:String,
            required:[true]
        },
        Description:
        {
            type:String,
            required:[true]
        },
        Price:
        {
            type:Number,
            required:[true]
        },
        Category:
        {
            type: schema.Types.ObjectId,
            ref: 'Category'
        },
        Quantity:
        {
            type:Number,
            default:1
        }
})
const Product=mongoose.model('Product',Product_schema);
module.exports=Product;