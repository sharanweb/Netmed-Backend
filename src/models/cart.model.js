const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        product_id: 
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"combi",
            required:false
        },
        user_id: 
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:false
        },
        nos: {type:Number, default:1}
        
        
    },
    {
        versionKey:false,
        timestamps:true
    }
)

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;