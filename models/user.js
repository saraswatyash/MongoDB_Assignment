const mongoose=require('mongoose');
const schema=mongoose.Schema;
const User_schema=schema({
    Name:
    {
        type:String,
        required:[true,'required']
    },
    Email:
    {
        type:String,
        required:[true,'required']
    },
    Password:
    {
        type:String,
        required:[true,'required']
    },
    PurchaseHistory:
    {
        type:String,
        default:null
    }
})
const User=mongoose.model('User',User_schema);
module.exports=User;