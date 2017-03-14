var app = angular.module('manutenzione', ['ngRoute',]);

app.conf=function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/home.html' 
    })
    .when('/marche', { 
      controller: 'MarcheController', 
      templateUrl: 'views/marche.html' 
    })
    .when('/marche/:id', { 
      controller: 'MarcheController', 
      templateUrl: 'views/marche.html' 
    })
	.when('/riparazioni', { 
      controller: 'RiparazioniController', 
      templateUrl: 'views/riparazioni.html' 
    })
	 .when('/riparazioni/:id', { 
      controller: 'RiparazioniController', 
      templateUrl: 'views/riparazioni.html' 
    }) 
    .when('/macchine', { 
      controller: 'MacchineController', 
      templateUrl: 'views/macchine.html' 
    })
    .when('/macchine/:id', { 
      controller: 'MacchineController', 
      templateUrl: 'views/macchine.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
}
app.config(app.conf);

app.config(['$httpProvider', function($httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }    
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);

app.constant("swInfo", {
    "version": "0.0.1"
});
