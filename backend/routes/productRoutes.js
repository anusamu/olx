const express=require ('express');
const router=express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}));
const productModel=require('../models/productData')

router.get('/',async(req,res)=>{
    try {
        const products=await productModel.find()
        res.status(200).send(products);
    } catch (error) {
        res.status(404).send('product not found');
        
    }
});


router.post('/add', async(req,res)=>{
    try {
        const course=req.body;
        const newProducts=new productModel(course);
        await newProducts.save();
        res.status(200).send('product added successfully');
    } catch (error) {
        console.error(error); // Log the actual error
        res.status(404).send('Error adding course');
    }
});
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await productModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send('product updated successfully');
    } catch (error) {
        res.status(404).send('Error updating course');
    }
});
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await productModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send('product deleted successfully');
    } catch (error) {
        res.status(404).send('Error deleting course');
    }
});
router.get('/location', async (req, res) => {
    try {
      const location = req.params.location;
      const items = await productModel.find({ location });
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: "Error fetching items" });
    }
  });
module.exports = router;