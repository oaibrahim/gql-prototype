const { booksModel } = require('../../model/model.js');

//Sending the info through the resolver. In this case no manipulation is made.
exports.booksResolver = () =>  booksModel;
