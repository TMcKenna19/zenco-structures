const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/zenco-structures-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("*** The mongoose has been found"))
    .catch(err => console.log("Error, could not find mongoose", err))

    