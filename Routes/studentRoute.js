const express = require('express');
const studentmodele = require('./mondel/studentmodel');
const router = express.Router();
var mongodb = require('mongodb');

router.use(express.json());


router.get('/',async(req,res)=>{
  try {
    const data = await studentmodele.find()
    res.send(data);
    
  } catch (error) {
    console.log(error);
  }
});




//route to add data
router.post( '/add',async(req,res)=>{
    try {
        
        var item = req.body;
        await studentmodele(item).save();
        res.send("Data Is Added!")
    } catch (error) {
        console.log(error);
    }
}
);
// route to update
router.put('/edit:id',async(req,res)=>{
   try {
     const id = req.params.id;
     const item = req.body;
     await studentmodele.findByIdAndUpdate(id,item);
     res.send("Data Is Updated!" );
   } catch (error) {
 console.log(error);
   }
      
})
//route to delete
router.delete("/delete:id",async(req,res)=>{
   try {
    const id = req.params.id;
    await studentmodele.deleteOne({id:new mongodb.ObjectId( id)})
    res.send('Item Deleted!');
   } catch (error) {
    console.log(error);
    res.send(error);

   }
})
 





module.exports =router;