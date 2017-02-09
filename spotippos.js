var fs = require('fs');
var provinces = JSON.parse(fs.readFileSync('provinces.json', 'utf8'));

var spot = []

//Função para identificar qual spotippos o imóvel pertence
function spotippos(x, y) {
	switch(true) {
		case (provinces.Gode.boundaries.upperLeft.x <= x && x <= provinces.Gode.boundaries.bottomRight.x &&
			  provinces.Gode.boundaries.bottomRight.y <= y && y <= provinces.Gode.boundaries.upperLeft.y &&
			  provinces.Ruja.boundaries.upperLeft.x <= x && x <= provinces.Ruja.boundaries.bottomRight.x &&
			  provinces.Ruja.boundaries.bottomRight.y <= y && y <= provinces.Ruja.boundaries.upperLeft.y):
			spot = ["Gode", "Ruja"]
			break
		case (provinces.Gode.boundaries.upperLeft.x <= x && x <= provinces.Gode.boundaries.bottomRight.x &&
			  provinces.Gode.boundaries.bottomRight.y <= y && y <= provinces.Gode.boundaries.upperLeft.y):
			spot = ["Gode"]
			break
		case (provinces.Ruja.boundaries.upperLeft.x <= x && x <= provinces.Ruja.boundaries.bottomRight.x &&
			  provinces.Ruja.boundaries.bottomRight.y <= y && y <= provinces.Ruja.boundaries.upperLeft.y):
			spot = ["Ruja"]	
			break
		case (provinces.Jaby.boundaries.upperLeft.x <= x && x <= provinces.Jaby.boundaries.bottomRight.x &&
			  provinces.Jaby.boundaries.bottomRight.y <= y && y <= provinces.Jaby.boundaries.upperLeft.y):
			spot = ["Jaby"]
			break
		case (provinces.Scavy.boundaries.upperLeft.x <= x && x <= provinces.Scavy.boundaries.bottomRight.x &&
			  provinces.Scavy.boundaries.bottomRight.y <= y && y <= provinces.Scavy.boundaries.upperLeft.y):
			spot = ["Scavy"]	
			break			
		case (provinces.Groola.boundaries.upperLeft.x <= x && x <= provinces.Groola.boundaries.bottomRight.x &&
			  provinces.Groola.boundaries.bottomRight.y <= y && y <= provinces.Groola.boundaries.upperLeft.y):
			spot = ["Groola"]
			break
		default:
			spot = ["Nova"]
	}
	return spot
}

module.exports = spotippos