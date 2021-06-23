const Sequelize = require('sequelize'); // Instancia do sequelize que ajuda o node a trabalhar com o mysql

// Conectando ao banco de dados
const sequelize = new Sequelize('comentAPP', 'root','root',{
	host: 'localhost',
	dialect: 'mysql'
});


// Exportando variaveis para serem utilizadas como models
module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}
