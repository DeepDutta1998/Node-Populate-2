const categoryModel = require('../model/category.model');
const subCategory=require('../model/subCategory.model');
const product=require('../model/product.model')
class HomeController{
    /**
     * @method:home
     * @description:home page open
     */
     home(req,res){
        res.render("home",
        {
            page_title:"home page"
        })
     }
    /**
     * @method:categoryFrom
     * @description:show categoryForm
     */
    async categoryForm(req,res){
        try{
          res.render("category",{
            page_title:"category form page"
          })
        }catch(err){
            throw err
        }
    }
    /**
     * @method:AddCategory
     * @description: user added CatagoryName and type
     */
    async AddCategory(req,res){
        try{
          let saveData=await categoryModel.create(req.body);
          if(saveData && saveData._id){
            console.log(saveData);
            console.log("category added successfully");
           res.redirect('/sub-category-form')
          }
        }catch(err){
            throw err
        }
    }
    /**
     * @method:subCategory
     * @description: show sub-category form
     */
    async subCategory(req,res){
        try{
           let Allcategory=await categoryModel.find({});
           res.render("subCategory",{
            page_title:"sub-category page",
            Allcategory
           })
        }catch(err){
            throw err
        }
    }
    /**
     * @method:AddSubCategory
     * @description: add sub category name
     */
    async AddSubCategory(req,res){
        try{
            let saveData=await subCategory.create(req.body);
            if(saveData && saveData._id){
              console.log(saveData);
              console.log("sub-category added successfully");
              res.redirect('/product-form')
            }
        }catch(err){
            throw err
        }
    }
    /**
     * @method:productForm
     * @description: open the productForm page
     */
    async productForm(req,res){
        try{
            let Allcategory=await categoryModel.find({});
            let AllSubCategory=await subCategory.find({});
          res.render("product",{
            page_title:"product page",
            AllSubCategory,
            Allcategory
          })
        }catch(err){
            throw err
        }
    }
    /**
     * @method:addProduct
     * @description: add product 
     */
    async addProduct(req,res){
        try{
            let saveData=await product.create(req.body);
            if(saveData && saveData._id){
              console.log(saveData);
              console.log("product  added successfully");
             res.redirect('/show')
            }
        }catch(err){
            throw err
        }
    }
    /**
     * @method:show
     * @description: show all data
     */
    async show(req,res){
        try{
          product.find().populate("subCategory").populate("categoryName").exec((err,data)=>{
            if(!err){
                // console.log(data);
                res.render("show",{
                    page_title:"show page",
                    response:data
                })
            }else{
                console.log(err);
            }
          })
        }catch(err){
            throw err
        }
    }
}
module.exports=new HomeController();