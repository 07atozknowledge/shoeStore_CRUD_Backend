 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;
 
 const ShoeSchema = new Schema({
   title: {
     type: String,
     required: true,
     trim:true
   },

   price: {
    type: String,
    required: true,
    trim:true
  },

   image: {
     type: String,
     required: true,
     
   }

  

 });

 const Shoe = mongoose.model("Shoe", ShoeSchema );
 
 module.exports = Shoe;  