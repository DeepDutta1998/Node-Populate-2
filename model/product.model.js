const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const productSchema=new Schema({
    categoryName:{
        type:Schema.Types.ObjectId,
        ref:'category'
    },
    subCategory:{
        type:Schema.Types.ObjectId,
        ref:'subCategory'
    },
    productName:{
        type:String,
        require:true
    },
    productPrice:{
        type:Number,
        require:true
    }
},{
    timestamps:true,
    versionKey:false
});
module.exports=new mongoose.model("product",productSchema);