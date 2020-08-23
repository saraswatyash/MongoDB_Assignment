const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const User_routes=require('./routes/user_route');
const Category_routes=require('./routes/category_route');
const Product_routes=require('./routes/product_route');
const app= express();
mongoose.connect('mongodb://localhost/Ecom', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connection made to the MongoDB!!');
});
app.use(bodyParser.json());
app.use(Category_routes);
app.use(User_routes);
app.use(Product_routes);
app.use(require('./Error/Error'));
app.listen( process.env.port || 3001, '127.0.0.1', () => {
    console.log('Listening for request at PORT 3001');
})
