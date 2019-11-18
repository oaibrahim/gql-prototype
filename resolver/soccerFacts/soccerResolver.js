const { soccerModel }  = require('../../model/model.js');

//Cleaning up the data
exports.cleanUpSoccerFacts = () => {
   for(var i=0; i<soccerModel.length; i++){
        soccerModel[i].name = soccerModel[i].name.replace(/\d+/g, '');
   }
   return soccerModel;
};