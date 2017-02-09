var ImoveisModel = require('../model/ImoveisModel')
var Promise = require('bluebird')

function ImoveisController(Model) {
	this.Model = Promise.promisifyAll(Model)
}

ImoveisController.prototype.create = function(req, res) {

	var data = req.body;

	this.Model.createAsync(data)
	.then(function(result) {
		res.json(result)
	})
	.catch(function(err) {
		res.status(500)
	})
}

ImoveisController.prototype.findOne = function(req, res) {

	_id = req.params._id

	this.Model.findOneAsync(_id)
	.then(function(result) {
		res.json(result)
	})
	.catch(function(err) {
		console.log(err)
	})
}

ImoveisController.prototype.findAll = function(req, res) {

	ax = req.param('ax')
	ay = req.param('ay')
	bx = req.param('bx')
	by = req.param('by')

	this.Model.findAllAsync(ax, ay, bx, by)	
	.then(function(result) {
		res.json(result)
	})
	.catch(function(err) {
		console.log(err)
	})
}

module.exports = new ImoveisController(ImoveisModel)