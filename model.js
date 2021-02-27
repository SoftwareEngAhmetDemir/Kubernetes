const mongoose = require('mongoose');

mongoose.connect('mongodb://my-service:80/test',
{useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });


module.exports =  Cat
