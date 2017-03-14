app.directive('appNav', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      data: '=' 
    }, 
    templateUrl: 'js/directives/appNav.html' 
  }; 
});