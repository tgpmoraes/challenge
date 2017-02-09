var express = require('express')
var router = express.Router()

var ImoveisController = require('../controller/ImoveisController')

//Utilizado o conceito de MVC, onde utilizo Model e o Controller
router.get    ('/properties',       ImoveisController.findAll.bind(ImoveisController))
router.get    ('/properties/:_id',  ImoveisController.findOne.bind(ImoveisController))
router.post   ('/properties',       ImoveisController.create.bind(ImoveisController))

module.exports = router