const express = require('express');
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());

// add connection to config file
require("./server/config/mongoose.config"); 

app.use(express.json(), express.urlencoded({extended: true})); // <- post request code 

// add in conntection to our routes 
// MAKE SURE THIS IS BELOW THE CODE FOR POST REQUESTS 
require("./server/routes/lead.routes")(app);

app.listen(port, () => console.log(`*** Running on port ${port}`));