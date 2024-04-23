const Drink = require('../models/drinks')


const allDrinks = async(res,req)=>{
   const drinks = await Drink.find();
    res.json({drinks: drinks})
}


const fetchDrink = async (req, res) => {
    const drinkId = req.params.id;
   
    const drink = await Drink.findById(drinkId);
   
    res.json({ drink: drink });
    
  };


  const createDrink = async (req, res) => {
    
    console.log(`BODY: ${req.body}`);
    const title = req.body.title;
    const body = req.body.body;
    // const {title,body} = req.body
    
    const drink= await Drink.create({
      title: title,
      body: body,
    });
    // --------------------------------(2)
    res.json({ drink: drink});
    // --------------------------------(3)
  };
  
  const updateDrink = async (req, res) => {
    
    const drinkId = req.params.id;
   
    const { title, body } = req.body;
   
    const drink = await Drink.findByIdAndUpdate(drinkId, {
      title: title,
      body: body,
    }, {new:true});
   
    // const updatedDrink = await Drink.findById(drinkId);
    // res.json({ drink: updatedDrink });
  };
  
  const deleteDrink = async(req, res) => {
     
      const drinkId = req.params.id
    
    await Drink.findByIdAndDelete(drinkID)
     
    res.json({success: "Record has been deleted successfully"})
  }
  
  module.exports = {
    allDrinks,
    fetchDrink,
    createDrink,
    updateDrink,
    deleteDrink

}
