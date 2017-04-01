(function(){

    'use strict';

    function AuthController($scope, $state, Auth) {

        //callable methods on the vm
        vm.login = login;
        vm.register = register;

        //defined methods on the vm
        function login() {
            Auth.login($scope.user)
                .then(goToJobs);
        };

        function register() {
            Auth.register($scope.user)
                .then(goToJobs);
        };

        function goToJobs() {
            $state.go('home.jobs');
        };

    };

    angular
        .module('app')
        .controller('authController', AuthController);
}());
