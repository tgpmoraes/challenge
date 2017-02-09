API desenvolvida de acordo com o processo seletivo da VivaReal

Para utilizar a API, é necessário ter instalado Node JS e MongoDB

Versões utilizadas:
	
	Node JS v6.7.0
	MongoDB v3.4.2

Realizar o clone do repositório - git clone https://github.com/tgpmoraes/challenge

Entrar no diretório challenge e executar o comando para instalar - npm install

Executar o seguinte comando para iniciar o serviço - node app.js

O serviço estara rodando na porta 3000, caso queira alterar, modificar diretamente no arquivo app.js

Etapas do desafio:

1. Para testar a criação do imóvel, basta utilizar o Postman e adicionar a linha abaixo no método post ou pelo comando curl:

{"x": 222,"y": 444,"title": "Imóvel código 1, com 5 quartos e 4 banheiros","price": 1250001,"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.","beds": 4,"baths": 3,"squareMeters": 210}

curl -H "Content-Type: application/json" -d '{"x": 222,"y": 444,"title": "Imóvel código 1, com 5 quartos e 4 banheiros","price": 1250001,"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.","beds": 4,"baths": 3,"squareMeters": 210}' http://0.0.0.0:3000/properties


2. Para testar a busca, basta utilizar o ID retornado após a inserção com sucesso da etapa anterior com a url abaixo:

GET ttp://<host>:<porta>/properties/ID

3. Para buscar os imóveis em um perímetro, basta utilizar a URL abaixo:

GET http://<host>:<porta>/properties?ax={integer}&ay={integer}&bx={integer}&by={integer}