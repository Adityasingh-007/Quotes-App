const mongoose=require('mongoose')
const Quot=require('./models/Quote')

let dummyQuotes=[

    {
        author:"Aditya singh",
        text:"Give it to good and go to sleep"
    },
    {
        author:"Andrew tate",
        text:"What colour is your buggaati"
    },
    {
        author:"Mike tyson",
        text:"I'm the god in the ring"
    },
    {
        author:"monu",
        text:"Daant bhadkediye jaayenge"
    }
]

async function seedDb(){
    await Quot.deleteMany({})
    await Quot.insertMany(dummyQuotes);
    console.log("db seeded")
}

module.exports=seedDb
