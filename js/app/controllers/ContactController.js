function ContactController($scope) {
	var vm = this;
	
	vm.name = 'a name';
	vm.phone = '12445566';
	vm.email = 'somebody@cool.com'; 

	vm.changeName = function() {
		vm.name = 'another name';
	}
}

angular
	.module('app')
	.controller('ContactController', ContactController);