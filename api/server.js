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

  app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
  }
    );
