app.controller('MarcheController', ['$scope', 'crudService','$routeParams','$http', function($scope, crudService,$routeParams,$http) {
    var vm = $scope;
	window.vm=vm;
    var populateData = function(response){
        vm.data = response && response.data ||[];
		if (vm.id) vm.d=vm.data || {};
    };
	vm.id= $routeParams && $routeParams.id || false;
    vm.data = [];
    vm.read = function(){
		var fnd= (vm.id) ? {"pg":"marca","id":vm.id} :{"pg":"marche"};
        crudService.fnd(fnd, populateData);
    };	
    vm.save = function(){
		if (vm.id=='new') delete(vm.id)
		if (vm.marche) delete (vm.marche)
        crudService.set(vm.d,'marca',function(r){
			if (!vm.id){
				window.location="#/marche/"+r.id
			}
		});
    };
	vm.remove = function(){
		vm.d.pg='marca';
        crudService.del(vm.d,function(r){
			window.location="#/marche/"
		});
    };
    vm.init = function(){
        vm.read();
    };
	vm.init();
}]);
app.controller('MacchineController', ['$scope', 'crudService','$routeParams','$http', function($scope, crudService,$routeParams,$http) {
    var vm = $scope;
	window.vm=vm;
    var populateData = function(response){
        vm.data = response && response.data ||[];
		if (vm.id) vm.d=vm.data || {};
		if (vm.d){ 
			vm.d.kw=parseInt(vm.d.kw);
		}
    };
	vm.id= $routeParams && $routeParams.id || false;
    vm.data = [];
    vm.read = function(){
		var fnd= (vm.id) ? {"pg":"macchine","id":vm.id} :{"pg":"macchine"};
        crudService.fnd(fnd, populateData);
    };	
    vm.save = function(){
		if (vm.id=='new') delete(vm.id)
		if (vm.macchine) delete (vm.macchine)
        crudService.set(vm.d,'macchine',function(r){
			if (!vm.id){
				window.location="#/macchine/"+r.id
			}
		});
    };
	vm.remove = function(){
		vm.d.pg='macchine';
        crudService.del(vm.d,function(r){
			window.location="#/macchine/"
		});
    };
	
    vm.init = function(){
        vm.read();
    };
	vm.init();
}]);
app.controller('RiparazioniController', ['$scope', 'crudService','$routeParams','$http', function($scope, crudService,$routeParams,$http) {
    var vm = $scope;
	window.vm=vm;
    var populateData = function(response){
        vm.data = response && response.data ||[];
		if (vm.id) vm.d=vm.data || {};
		if (vm.d){ 
			vm.d.kw=parseInt(vm.d.kw);
		}
    };
	vm.id= $routeParams && $routeParams.id || false;
    vm.data = [];
    vm.read = function(){
		var fnd= (vm.id) ? {"pg":"riparazioni","id":vm.id} :{"pg":"riparazioni"};
        crudService.fnd(fnd, populateData);
    };	
    vm.save = function(){
		if (vm.id=='new') delete(vm.id)
		if (vm.riparazioni) delete (vm.riparazioni)
        crudService.set(vm.d,'riparazioni',function(r){
			if (!vm.id){
				window.location="#/riparazioni/"+r.id
			}
		});
    };
	vm.remove = function(){
		vm.d.pg='riparazioni';
        crudService.del(vm.d,function(r){
			window.location="#/riparazioni/"
		});
    };
	
	
    vm.init = function(){
        vm.read();
    };
	vm.init();
	
	
}]);