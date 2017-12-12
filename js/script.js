/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('admin_app',[]);

  app.config( function($routeProvider){
               $routeProvider
               .when('/',{
                   templateUrl:'admin.php'
               })
                .when('/invoice',{
                    templateUrl:'invoice.php'
                })
              .otherwise({
                    templateUrl:'admin.php'
                });
    });

