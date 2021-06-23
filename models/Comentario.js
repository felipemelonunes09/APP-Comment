const dataBase = require('./db') //Requerindo o banco de dados


// Definindo o modelo da tabela
const Comentario = dataBase.sequelize.define('comentarios', {
	autor: {
		type: dataBase.Sequelize.STRING
	},
	titulo: {
		type: dataBase.Sequelize.STRING
	},
	texto:{
		type: dataBase.Sequelize.TEXT
	},
	curtidas:{
		type: dataBase.Sequelize.INTEGER
	}
});

Comentario.sync({force: false});
module.exports = Comentario; // Exportando o model comentario para ficar disponivel por requerimento

// Pedindo para o Sequelize criar a tabela no  Mysql forçadamente
