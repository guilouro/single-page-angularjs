var app = angular.module('app',['ngRoute']);
var path = location.pathname;

app.config(function($routeProvider, $locationProvider)
{
	// remove o # da url
	$locationProvider.html5Mode(true);

	$routeProvider

	// para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
	.when(path, {
		templateUrl : path + 'app/views/home.html',
		controller  : 'HomeCtrl',
	})

	// para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
	.when(path + 'sobre', {
		templateUrl : path + 'app/views/sobre.html',
		controller  : 'SobreCtrl',
	})

	// para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
	.when(path + 'contato', {
		templateUrl : path + 'app/views/contato.html',
		controller  : 'SobreCtrl',
	})

	// caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: path  });
});