var mongo = require('../Db/mongo')
var mongoSequence = require('mongo-sequence');
var imoseq = mongoSequence(mongo,'imoveis');
var spot = require('../spotippos')
var valida = require('../validaimoveis')

var mensagem = ''

function ImoveisModel() {

}

ImoveisModel.prototype.create = function(data, callback) {

	//A função valida, foi feita para atender os requisitos de inserção
	mensagem = valida(data.x, data.y, data.title, data.price, data.description, 
					  data.beds, data.baths, data.squareMeters)
	//Após as validações, é feito a inserção do registro
	if ( mensagem == 'Ok') {
		imoseq.getNext(function(err,sequence) {
			if (!err) {
				mongo.collection('imoveis').update({  _id: mongo.ObjectId	('589b244209a8d15b190b9998')}, 
					{'$push': {
						properties: { 
							'id': sequence, 
							'title': data.title,
							'price': data.price,
							'description': data.description,
							'lat': data.x,
							'long': data.y,
							'beds': data.beds,
							'baths': data.baths,
							'squareMeters': data.squareMeters,
							'provinces': spot(data.x, data.y)
						}
					}
				},callback)
			}
		})
	//A reposta para o usuário será de acordo com os critérios não atendidos
	} else {
		callback(null, mensagem)
	}
}

//Busca por id do imóvel
ImoveisModel.prototype.findOne = function(_id, callback) {
	mongo.collection('imoveis').find({'properties.id': parseInt(_id)},{'properties.$': 1}, callback)
}

//Busca por perímetro
ImoveisModel.prototype.findAll = function(ax, ay, bx, by, callback) {

	mongo.collection('imoveis').aggregate([
    { $match: { $and: [
     						{properties: 
     							{ 
     								$elemMatch: { 
     												"lat": {$gte:parseInt(ax),$lte:parseInt(bx)} 
     											} 
     							} 
     						}, 
                       		{properties: 
                       			{ 
                       				$elemMatch: { 
                       								"long": {$lte:parseInt(ay),$gte:parseInt(by)} 
                       							} 
                       			} 
                       		} 
                       	] 
                } 
    }, 
    { $unwind : "$properties" },
    { $match: { $and: [ 
     						{"properties.lat" : 
     							{$gte:parseInt(ax),$lte:parseInt(bx)} 
     						}, 
     						{"properties.long" : 
     							{$lte:parseInt(ay),$gte:parseInt(by)} 
     						} 
     					] 
     			} 
    },
    { $group : { _id : "$_id", foundProperties: { '$sum': 1 }, properties : { $addToSet : "$properties" } }}], callback)
}

module.exports = new ImoveisModel()