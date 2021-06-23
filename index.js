const express = require('express'); // Pega o modulo express
const app = express(); // Abre a instância express

const bodyparse = require('body-parser');

const handlebars = require('express-handlebars'); // Requerindo Handlebars do express

const modelComentario = require('./models/Comentario'); // Requerindo o model de comentario

// Config
	// Template Engine ('Handle-bars') -> Ajuda na passagem do Back-End junto com o Front-End
	app.engine('handlebars', handlebars({defaultLayout: 'main'}))
	app.set('view engine', 'handlebars')

	// body parser ajuda no trafego de informação entre o Back e o Front
	app.use(bodyparse.urlencoded({extended: false}))
	app.use(bodyparse.json())


// Rotas
app.get('/', function(req, res){ // Rota home

	modelComentario.findAll().then(function(comentarios){
		res.render('home', { ViewComentario: comentarios});
	})
});

app.get('/comentar', function(req, res){ // Rota da área de comentar
	//console.log('Área de comentar');
	// Renderizando a secção de comentar
	res.render('comentar');
});


app.get('/isabelle', function(req, res){ // Rota da área de comentar
	res.send('isabelle bunita')
});

app.get('/deletar/:id', function(req, res){

	// Pegando o ID que veio via url pelo href
	modelComentario.destroy({where: {'id':req.params.id}}).then(function(){
		//res.redirect('/deletado')
		//res.send('Deletado com sucesso');
		res.redirect('/');
	}).catch(function(erro){
		res.send('Ocorreu algum erro' + erro);
	})
});

// Rota post
app.post('/add', function(req, res){

	// Utilizando o model de comentario para cadastrar no banco de dados
	modelComentario.create({

		autor: req.body.formAutor,
		titulo: req.body.formTitulo,
		texto: req.body.formTexto

	}).then(function(){
		res.redirect('/')
	}).catch(function(erro){
		console.log('Erro ' + erro)
	})
});

// Abrindo o servidor na porta 8081
app.listen(8081, function () {
	console.log('Servido rodando na url http://localhost:8081');
});