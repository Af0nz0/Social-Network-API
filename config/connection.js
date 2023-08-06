const mongoose = require("mongoose");

const dbName = 'socialmediaDB';
// Wrap around local connection
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);

// Export 
module.exports = mongoose.connection;
