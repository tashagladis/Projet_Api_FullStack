const mongoose = require('mongoose') ;
const config = require("../configs")
const url = config.database.url;

exports.dbConnect = () => {
mongoose.connect(url , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("succefully connected to the database");
}).catch(err => {
    console.log("error connection to the database", err);
    process.exit();
});
};