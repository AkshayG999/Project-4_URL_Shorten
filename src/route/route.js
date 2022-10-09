const express = require('express')
const urlController = require('../controller/urlController')
const router = express.Router();

router.get('/test-api',function(req,res){
    res.send("Test Api ")
})

router.post('/url/shorten',urlController.createShortUrl)

router.get("/:urlCode",urlController.fetchUrl)


module.exports=router