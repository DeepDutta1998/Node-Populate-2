const router=require('express').Router();
const homeController=require('../controller/home.controller')
router.get('/',homeController.home)
router.get('/category-form',homeController.categoryForm);
router.post('/add-category',homeController.AddCategory);
router.get('/sub-category-form',homeController.subCategory);
router.post('/add-sub-category',homeController.AddSubCategory);
router.get('/product-form',homeController.productForm);
router.post('/add-product',homeController.addProduct);
router.get("/show",homeController.show)
module.exports=router;