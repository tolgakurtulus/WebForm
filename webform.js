angular.module('clientsApp', []);

angular
  .module('clientsApp')
  .controller('ClientsCtrl', function($scope) {
  
    $scope.clients = [{
      id: 1,
      name: 'Ahmet',
      surname:'Max',
      age: 25,
      date: 999484702748 
    }, {
      id: 2,
      name: 'Mehmet',
      surname:'Max',
      age: 25,
      date: 999484702748 
    }, {
      id: 3,
      name: 'Yakub',
      surname:'Max',
      age: 25,
      date: 999484702748 
    }, {
      id: 4,
      name: 'Ali',
      surname:'Max',
      age: 25,
      date: 999484702748 
    },{
      id: 5,
      name: 'Veli',
      surname:'Max',
      age: 25,
      date: 999484702748 
    },{
      id: 6,
      name: 'Murat',
      surname:'Max',
      age: 25,
      date: 999484702748 
    },{
      id: 7,
      name: 'Zülal',
      surname:'Max',
      age: 25,
      date: 999484702748 
    }];

    $scope.delete = function(client) {
      var index = $scope.clients.indexOf(client);
      $scope.clients.splice(index, 1);
    };

    $scope.create = function() {
      $scope.newClient.id = $scope.clients.length + 1;
      $scope.clients.push($scope.newClient);
      $scope.newClient = null;
    };

    $scope.edit = function(client) {
      $scope.activeClient = client;
    };
    $scope.update = function(client) {
      $scope.activeClient = null;
    };
  });

var INTEGER_REGEXP = /^\-?\d+$/;
angular.module('clientsApp').directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) return true;
        if (INTEGER_REGEXP.test(viewValue)) return true;
        return false;
      };
    }
  };
});



$(function() {
  $('#clientTable').floatThead({
    scrollContainer: function($table) {
      return $table.closest('.table-wrap');
    }
  });
});