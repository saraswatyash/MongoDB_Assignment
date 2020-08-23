const mongoose=require('mongoose');
const schema=mongoose.Schema;
Category_schema=new schema({
    Name:
    {
        type:String
    }
})
const Category=mongoose.model('Category',Category_schema);
module.exports=Category;