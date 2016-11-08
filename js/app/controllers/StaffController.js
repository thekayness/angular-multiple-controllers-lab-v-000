function StaffController($scope) {
	var vm = this;

	vm.name = 'noodles';
	vm.phone = '48357489302';
	vm.email = 'noodly3@cool.com'
}

angular
	.module('app')
	.controller('StaffController', StaffController);