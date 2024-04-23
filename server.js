require("dotenv").config();
// -----> allows .env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");
// This pulls our Mongoose connection into application

const Note = require("./models/note");
const notesController = require("./controllers/notesController.js");

const Drink= require("./models/drinks");
const drinkController = require("./controllers/drinkController.js");

const Fruits= require("./models/fruits");
const fruitController = require("./controllers/fruitController.js");


const cors = require("cors");
// ---> Recieving reqs on cross-origins **
app.use(express.json());
// Express doesnt naturally convert our data to json
app.use(cors());
connectToDb();
// This initializes our connectToDB() function
// -------------------------------------------------reQs


app.get("/", (req, res) => {
  res.send("This is a Landing Page");
});

// Obj: We want to establish CRUD routes for our Notes Model
app.get("/notes", notesController.fetchAllNotes);
// -----------------> GET all Notes - [Read]
app.get("/notes/:id", notesController.fetchNote);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/notes", notesController.createNote);
// -----------------> Create a Notes - [Create / POST]
app.put("/notes/:id", notesController.updateNote);
// -----------------> Update a Specific Note - [Update]
app.delete("/notes/:id", notesController.deleteNote);
// -----------------> Delete a Specific Note - [Delete]


// -------------------------------------------------Routing

// Obj: We want to establish CRUD routes for our Drinks Model
app.get("/drinks", drinkController.allDrinks);

app.get("/drinks/:id", drinkController.fetchDrink);

app.post("/drinks", drinkController.createDrink);

app.put("/drinks/:id", drinkController.updateDrink);

app.delete("/drinks/:id", drinkController.deleteDrink);




// Obj: We want to establish CRUD routes for our fruits Model
app.get("/fruits", fruitController.allFruits);

app.get("/fruits/:id", fruitController.fetchFruit);

app.post("/fruits", fruitController.createFruit);

app.put("/fruits/:id", fruitController.updateFruit);

app.delete("/fruits/:id", fruitController.deleteFruit);


app.listen(PORT, () => {
  console.log(`Express Server Listening on port num: ${PORT}`);
});
// -------------------------------------------------Server