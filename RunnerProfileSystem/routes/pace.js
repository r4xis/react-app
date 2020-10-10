const express = require("express")
const router = express.Router()
const csv = require("csvtojson");


router.get("/", (req, res) => {
  csv()
    .fromFile("./pace.csv")
    .then(function(jsonArrayObj){
      res.json(jsonArrayObj)
    })
    
})

module.exports = router