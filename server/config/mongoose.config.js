const mongoose = require('mongoose');

mongoose.connect("mongodb://127.00.1:27017/zenco-structures-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("*** The mongoose has been found"))
    .catch(err => console.log("Error, could not find mongoose", err))

    