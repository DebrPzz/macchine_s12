app.service('crudService', function($http, limitToFilter) {
	var S='../srv/';
    var onError = function(response){
        console.log("Errore di chiamata: ", response)
	};
	return {
		get: function(U,callback) {
			if (!U) return [{'error':'Nessun URL specificato.'}];
			$http.get(S+U).success(callback);
		},
		set: function(D,pg,callback) {
			if (!D) return [{'error':'Nessun dato da inserire.'}];
			if (D.id=='new' || D.id==null) delete (D.id);
			$http.post(S+'?p='+pg,D).success(callback).error(onError);  
		},
		fnd: function(D,callback){
			if (!D) return [{'error':'Nessun criterio specificato.'}];
			var url=S+'?p='+D.pg;
			if (D.id) url+='&id='+Number(D.id);
			$http({
				url : url,
				method : 'GET',
				dataType : 'json'
			}).then(callback, onError);			
		},
		del: function(D,callback) {
			if (!D) return [{'error':'Nessun dato da eliminare.'}];
			if (!confirm('I dati selezionati verranno eliminati. Confermi?')){return};
			var url=S+'?p='+D.pg+'&del='+D.id;
			$http.get(url).success(callback).error(onError);
		}
	}
});