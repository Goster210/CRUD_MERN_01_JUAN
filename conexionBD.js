const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cruduno').then(db=> console.log('la base de datos esta conectada')).catch(err => console.error(err));
module.exports = mongoose