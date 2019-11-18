const { booksResolver } = require('./books/booksResolver.js');
const { cleanUpSoccerFacts } = require('./soccerFacts/soccerResolver.js');

console.log(cleanUpSoccerFacts());

//Constructing the resolver object that will be
exports.resolvers = {
    Query: {
        books: booksResolver,
        soccerTeam: cleanUpSoccerFacts
    }
};