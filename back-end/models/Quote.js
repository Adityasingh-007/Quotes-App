const mongoose=require('mongoose')

let QuoteSchema=new mongoose.Schema({

        author :{
            type:String,
            require:true,
            trim:true
        },
        text:{
            type:String,
            require:true,
            trim:true
        }
})

let Quot = new mongoose.model('Quotes',QuoteSchema)

module.exports=Quot;