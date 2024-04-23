const Fruit = require('../models/fruits')


const allFruits = async(req,res)=>{
   const fruits = await Fruit.find();

    res.json({fruits: fruits})
};


const fetchFruit = async (req, res) => {
    const fruitId = req.params.id;
   
    const fruit= await Fruit.findById(fruitId);
   
    res.json({ fruit: fruit });
    
  };


  const createFruit = async (req, res) => {
    
    console.log(`BODY: ${req.body}`);
    const name = req.body.name;
    const inventury = req.body.inventury;
    // const {title,body} = req.body
    
    const fruit= await Fruit.create({
      name: name,
      inventury: inventury,
    });
    // --------------------------------(2)
    res.json({ fruit: fruit});
    // --------------------------------(3)
  };
  
  const updateFruit = async (req, res) => {
    
    const fruitId = req.params.id;
   
    const { name, inventury } = req.body;
   
    const fruit = await Fruit.findByIdAndUpdate(fruitId, {
      name: name,
      inventury: inventury,
    }, {new:true});

    res.json({ fruit: fruit });
   
   
  };
  
  const deleteFruit = async(req, res) => {
     
      const fruitId = req.params.id
    
    await Fruit.findByIdAndDelete(fruitId)
     
    res.json({success: "Record has been deleted successfully"})
  }
  
  module.exports = {
    allFruits,
    fetchFruit,
    createFruit,
    updateFruit,
    deleteFruit

}
