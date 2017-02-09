//A função valida, foi feita para atender os requisitos de inserção

var os = require('os');

retorno = ''

function validaimoveis(x, y, title, price, description, beds, baths, squareMeters) {

	if (isNaN(x) || isNaN(y)) {
		retorno = 'Favor providenciar latitude e longitude corretamente.' + os.EOL
	}
	if (!title.trim()) {
		retorno += 'Favor providenciar um título.' + os.EOL
	}
	if (isNaN(price)) {
		retorno = 'Favor providenciar preço corretamente.' + os.EOL
	}
	if (!description.trim()) {
		retorno += 'Favor providenciar uma descrição.' + os.EOL
	}
	if (beds < 1 || beds >= 5 || !beds) {
		retorno += 'Quantidade de quartos precisa estar entre 1 e 5.' + os.EOL
	}
	if (baths < 1 || baths >= 4 || !baths) {
		retorno += 'Quantidade de banheiros precisa estar entre 1 e 4.' + os.EOL
	}
	if (squareMeters < 20 || squareMeters >= 240 || !squareMeters) {
		retorno += 'A metragem precisar entre 20 e 240.' + os.EOL
	}
	if (!retorno) {
		retorno = 'Ok'
	}
	return retorno
}

module.exports = validaimoveis