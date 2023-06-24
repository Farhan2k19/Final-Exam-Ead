const { default: mongoose} = require('mongoose');
const moongoose = require('mongoose');

const schema= moongoose.Schema;

const recipeSchema =new schema({
    title:{type:String,required:true},
    ingredients:{type:String,required:true},
    instructions:{type:String,required:true},
    description:{type:String,required:true},
    
   
});


module.exports = mongoose.model('Recipe', recipeSchema);

