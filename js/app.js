(function (angular) {
	'use strict';
	// 创建模块
	var myApp = angular.module('MytodoMvc',[]);
	myApp.controller('MainController',['$scope','$location',function($scope,$location){
		$scope.text = '';
		$scope.todos = [
		{
			id:Math.random(),
			text:'学习',
			completed:false
		},{
			id:Math.random(),
			text:'学习2',
			completed:true
		},{
			id:Math.random(),
			text:'学习3',
			completed:false
		}];

		$scope.add = function(){
			if (!$scope.text) {
				return;
			}
			$scope.todos.push({
				id:Math.random(),
				text:$scope.text,
				completed:false
			});
			$scope.text = '';
		};

		$scope.remove = function(id){
			console.log(id)
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].id === id) {
					$scope.todos.splice(i,1);
					break;
				}
			}
		};

		$scope.clear = function() {
			var todos = [];
			for (var i = 0; i < $scope.todos.length; i++) {
				if (!$scope.todos[i].completed) {
					todos.push($scope.todos[i]);
				}
			}
			$scope.todos = todos;
		};
		$scope.show = function() {
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].completed) {
					return true;
				}
			}
			return false;
		};
		$scope.current = -1;
		$scope.edit = function(id) {
			$scope.current = id;
		};
		$scope.save = function() {
			$scope.current = -1;
		};
		var flag = true;
		$scope.togger = function() {
			
			for (var i = 0; i < $scope.todos.length; i++) {
				$scope.todos[i].completed = flag;
			}
			flag = !flag;
		};

		$scope.$location = $location;
		
		$scope.$watch('$location.hash()',function(now,old){
			console.log(now)
				switch(now){
					case '/completed':
					$scope.selector = {
						completed : true
					};
					break;
					case '/active':
					$scope.selector = {
						completed : false
					};
					break;
					default:
					$scope.selector = {};
					break;
				}
		});
		// var path = $location.path();
		
	}]);
})(angular);
