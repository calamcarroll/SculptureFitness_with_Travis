
function registerController($scope, $http, $location) {
    $scope.message = 'Register here';
    $scope.formData = {};

    $scope.addUser = function () {


        $http.post('/users', $scope.formData)
            .success(function (data) {
                $scope.Users = data;
                $location.path('/Login');
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
};
module.exports = registerController;