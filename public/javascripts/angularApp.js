var app = angular.module('SculptureFitness', ['ngRoute']);

app.service('myService', function(){
    var myService = {
        MuscleType0: '',
        ExerciseName0: '',
        Sets0: 0,
        Reps0: 0,
        RestTime0: 0,
        Weight0:0,
        identity0:""
    }
    return myService;
});
app.service('myOtherService', function(){
    var myOtherService = {
        Protein1: 0,
        Fats1: 0,
        Carbs1: 0,
        numMeals1: 0,
        MealType1: '',
        MealCalories1:0,
        MealTime1:0,
        identity1: 0
    }
    return myOtherService;
});


app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'public/pages/home.ejs',
            controller  : 'mainController'
        })

        // route for the programs page
        .when('/programs', {
            templateUrl : 'public/pages/programs.ejs',
            controller  : 'programsController'
        })

        //route for the add programs page
        .when('/addProgram', {
            templateUrl : 'public/pages/addprogram.ejs',
            controller  : 'addProgramsController'
        })
        .when('/updateProgram', {
            templateUrl : 'public/pages/updateProgram.ejs',
            controller  : 'updateController'
        })
        .when('/findGym', {
            templateUrl : 'public/pages/findGym.ejs',
            controller  : 'findGymController'
        })
        .when('/addDiet', {
            templateUrl : 'public/pages/addDiet.ejs',
            controller  : 'addDietController'
        })
        .when('/updateDiet', {
            templateUrl : 'public/pages/updateDiet.ejs',
            controller  : 'updateDietController'
        })
        .when('/Register',{
            templateUrl : 'public/pages/Register.ejs',
            controller : 'registerController'
        })
        .when('/Login',{
            templateUrl : 'public/pages/Login.ejs',
            controller : 'loginController'
        })

        // route for the diet page
        .when('/diet', {
            templateUrl : 'public/pages/diet.ejs',
            controller  : 'dietController'
        });

        // route for the add programs page

});


  


