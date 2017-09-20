// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'angular-md5' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicioETC.html',
        controller: 'homeCtrl'
      }
    }
  })

 

    .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

        .state('app.password_change', {
    url: '/settings/password_change',
    views: {
      'menuContent': {
        templateUrl: 'templates/password_change.html',
        controller: 'PasswordChangeCtrl'
      }
    }
  })

  .state('app.upload', {
    url: '/upload',
    views: {
      'menuContent': {
        templateUrl: 'templates/upload.html',
        controller: 'UploadCtrl'
      }
    }
  })

  .state('app.workshops', {
    url: '/workshops',
    views: {
      'menuContent': {
        templateUrl: 'templates/workshops.html',
        controller: 'WorkshopsCtrl'
      }
    }
  })
  
  .state('app.quizzes', {
    url: '/quizzes',
    views: {
      'menuContent': {
        templateUrl: 'templates/quizzes.html',
        controller: 'QuizzesCtrl'
      }
    }
  })

  .state('app.all', {
    url: '/workshops/all',
    views: {
      'menuContent': {
        templateUrl: 'templates/all.html',
        controller: 'AllCtrl'
      }
    }
  })


  .state('app.completed', {
    url: '/workshops/completed',
    views: {
      'menuContent': {
        templateUrl: 'templates/completed.html',
        controller: 'CompletedCtrl'
      }
    }
  })

  .state('app.reports', {
    url: '/reports',
    views: {
      'menuContent': {
        templateUrl: 'templates/reports.html',
        controller: 'ReportsCtrl'
      }
    }
  })

  .state('app.perYear', {
    url: '/reports/per_year',
    views: {
      'menuContent': {
        templateUrl: 'templates/per_year.html',
        controller: 'PerYearCtrl'
      }
    }
  })
  

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
