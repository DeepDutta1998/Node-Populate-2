const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const SubCategorySchema=new Schema({
    categoryName:{
        type:Schema.Types.ObjectId,
        ref:'category'
    },
    subCategory:{
        type:String,
        require:true
    }
},{
    timestamps:true,
    versionKey:false
});
module.exports=new mongoose.model("subCategory",SubCategorySchema);