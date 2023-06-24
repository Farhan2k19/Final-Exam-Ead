const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const port=process.env.PORT || 5000;
const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1:27017/Final-Exam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

//require recipe
const recipe=require('./models/recipe');


//crud oprations for the recipe
//get all recipes
app.get('/showRecipes',(req,res)=>{
    recipe.find().then(recipes=>{
        res.json(recipes);
    }).catch(err=>res.status(404).json({success:false}));
}
);

app.post('/addRecipe',(req,res)=>{
    const newRecipe=new recipe({
        title:req.body.title,
        ingredients:req.body.ingredients,
        instructions:req.body.instructions,
        description:req.body.description,
    });
    newRecipe.save().then(recipe=>res.json(recipe));
}
);

app.put('/updateRecipe/:id',(req,res)=>{
    recipe.findByIdAndUpdate(req.params.id,req.body).then(recipe=>{
        res.json(recipe);
    }).catch(err=>res.status(404).json({success:false}));
}
);
app.delete('/deleteRecipe/:id',(req,res)=>{
    recipe.findByIdAndDelete(req.params.id).then(recipe=>res.json(recipe)).catch(err=>res.status(404).json({success:false}));
}
);



  app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
  }
    );
