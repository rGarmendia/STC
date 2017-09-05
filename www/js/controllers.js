

angular.module('starter.controllers', ['ngCordova'] )



.service('userService', function() {
  this.userData = {};

  this.user = function() {
    return this.userData;
  };

  this.setId = function(id) {
    this.userData.id = id;
  };

  this.getId = function() {
    return this.userData.id;
  };

   this.setPassword = function(password) {
    this.userData.password = password;
  };

  this.getPassword = function() {
    return this.userData.password;
  };

  this.setEmail = function(email) {
    this.userData.email = email;
  };

  this.getEmail = function() {
    return this.userData.email;
  };

  this.setIdRol = function(id_rol) {
    this.userData.id_rol = id_rol;
  };

  this.getIdRol = function() {
    return this.userData.id_rol;
  };

  this.setPicture = function(picture) {
    this.userData.picture = picture;
  };

  this.getPicture = function() {
    return this.userData.picture;
  };

  this.setSound = function(sound) {
    this.userData.sound = sound;
  };

  this.getSound = function() {
    return this.userData.sound;
  };

  this.setStatus = function(status) {
    this.userData.status = status;
  };

  this.getStatus = function() {
    return this.userData.status;
  };

  this.setIdEmployee = function(id_employee) {
    this.userData.id_employee = id_employee;
  };

  this.getIdEmployee = function() {
    return this.userData.id_employee;
  };

  this.setWorkshop = function(id_workshop) {
    this.userData.id_workshop = id_workshop;
  };

  this.getIdWorkshop = function() {
    return this.userData.id_workshop;
  };



  this.setIdCategory = function(id_category) {
    this.userData.id_category = id_category;
  };

  this.getIdCategory = function() {
    return this.userData.id_category;
  };

})

.service('employeeService', function() {
  this.employeeData = {};

  this.employee = function() {
    return this.employeeData;
  };

  this.setId = function(id) {
    this.employeeData.id = id;
  };

  this.getId = function() {
    return this.employeeData.id;
  };

  this.setDaycareId = function(daycare_id) {
    this.employeeData.daycare_id = daycare_id;
  };

  this.getDaycareId = function() {
    return this.employeeData.daycare_id;
  };

  this.setUserId = function(user_id) {
    this.employeeData.user_id = user_id;
  };

  this.getUserId = function() {
    return this.employeeData.user_id;
  };

  this.setName = function(name) {
    this.employeeData.name = name;
  };

  this.getName = function() {
    return this.employeeData.name;
  };

  this.setPhone = function(phone) {
    this.employeeData.phone = phone;
  };

  this.getPhone = function() {
    return this.employeeData.phone;
  };

  this.setStatus = function(status) {
    this.employeeData.status = status;
  };

  this.getStatus = function() {
    return this.employeeData.status;
  };

  this.setAddress = function(address) {
    this.employeeData.address = address;
  };

  this.getAddress = function() {
    return this.employeeData.address;
  };

  this.setBirthdate = function(birthdate) {
    this.employeeData.birthdate = birthdate;
  };

  this.getBirthdate = function() {
    return this.employeeData.birthdate;
  };

  this.setGender = function(gender) {
    this.employeeData.gender = gender;
  };

  this.getGender = function() {
    return this.employeeData.gender;
  };
  
  this.setProfilePicture = function(profile_picture) {
    this.employeeData.profile_picture = profile_picture;
  };

  this.getProfilePicture = function() {
    return this.employeeData.profile_picture;
  };

  this.setJob = function(job) {
    this.employeeData.job = job;
  };

  this.getJob = function() {
    return this.employeeData.job;
  };

  this.setTypeEmployeeId = function(type_employee_id) {
    this.employeeData.type_employee_id = type_employee_id;
  };

  this.getTypeEmployeeId = function() {
    return this.employeeData.type_employee_id;
  };

  this.setDateOfResponsability = function(date_of_responsability) {
    this.employeeData.date_of_responsability = date_of_responsability;
  };

  this.getDateOfResponsability = function() {
    return this.employeeData.date_of_responsability;
  };

  this.setDateOfHired = function(date_of_hired) {
    this.employeeData.date_of_hired = date_of_hired;
  };

  this.getDateOfHired = function() {
    return this.employeeData.date_of_hired;
  };
})



.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  $scope.toggleSelection = function toggleSelection(event) {
          // how to check if checkbox is selected or not
          // alert(event.target.checked);
        };



        $scope.check = {};



  // Form data for the login modal
  $scope.loginData = {};
  

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
/*    console.log('Doing login', $scope.loginData);
*/

var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};
$http.post('http://www.stafftrainingcompliance.com/login_ETC.php',{
  user_name:$scope.loginData.username,
  user_pass:$scope.loginData.password
},{
  headers : headers 
} ).then(function(response){
  $scope.id = response.data.id_user;

  // userService.setId(response.data.id_user);
  // userService.setEmail(response.data.email);
  // userService.setIdRol(response.data.id_rol);
  // userService.setPicture(response.data.picture);
  // userService.setSound(response.data.sound);
  // userService.setStatus(response.data.status);
  // userService.setPassword(response.data.password);


  // alert(userService.userData.email);


},function errorCallback(response) {
  // alert(response);
})



    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LoginCtrl', function($scope, $ionicModal, $timeout, $http, userService, $state,$location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.cucumber;
  $scope.check = {};
  $scope.check.val = false;


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
/*    console.log('Doing login', $scope.loginData);
*/


var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};

$http.post('http://www.stafftrainingcompliance.com/login_ETC.php',{
  user_name:$scope.loginData.username,
  user_pass:$scope.loginData.password
},{
  headers : headers 
} ).then(function(response){
  $scope.id = response.data.id_user;

  if(angular.isString($scope.id) === true){
   /*  alert(JSON.stringify(response));*/

   userService.setId(response.data.id_user);
   userService.setEmail(response.data.email);
   userService.setIdRol(response.data.role_id);
   userService.setStatus(response.data.status);
   userService.setPassword(response.data.password);


   $state.go('app.home');
 } else{
  alert('Incorrect Credentials. Please try again');
}
},function errorCallback(response) {
console.log(JSON.stringify(response));
})
} 

})


.filter('diazapps', function ($sce) {
  return function(sound) {
    return $sce.trustAsResourceUrl('http://www.stafftrainingcompliance.com/' + sound);
  };
})



.controller('homeCtrl', function($scope, $http, $ionicPopover) {

$ionicPopover.fromTemplateUrl('templates/popover2.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hidden popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });




})

.controller('WorkshopsCtrl', function($scope, $http) {
})

.controller('AllCtrl', function( $scope, $http, userService, employeeService, $cordovaImagePicker, $cordovaFileTransfer,  $timeout,) {
  var employee ={};
  $scope.categories = [];
  $scope.workshops = [];
  $scope.workshops_id = [];
  $scope.vendors = [];
  $scope.hours = [];
  var sco_year = 0;

  var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};

  $http.post('http://www.stafftrainingcompliance.com/get_employee_ect.php',{
    id_user: userService.userData.id
  },{
    headers : headers 
  } ).then(function(response1){
    // console.log(response1.data);    

    employeeService.setId(response1.data.id_employees);
    employeeService.setDaycareId(response1.data.daycare_id);
    employeeService.setDateOfHired(response1.data.date_of_hired);

 





    $http.post('http://www.stafftrainingcompliance.com/get_rules_ect.php',{
      type_employee_id: response1.data.type_employee_id,
      status: response1.data.status,
    },{
      headers : headers 
    } ).then(function(response2){

      $scope.workshops = response2.data.workshops;
         

    }
    ,function errorCallback(response2) {

    })

  }
  ,function errorCallback(response1) {

  });



// IMG picker


$scope.upload = function(id_workshop){



  var options = {
   maximumImagesCount: 1,
   width: 800,
   height: 800,
   quality: 80
 }

 $cordovaImagePicker.getPictures(options)
 .then(function (results) {
  // console.log(results[0]);

  


  var url = "http://www.stafftrainingcompliance.com/upload_enrollment.php";
     //target path may be local or url
     var targetPath = results[0];
     var filename = targetPath.split("/").pop();

     // alert(filename);
     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: {'id_employee': employeeService.employeeData.id_employee, 'id_workshop': id_workshop, 'id_scholar': $scope.scho_years}   

    };
    $cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {
      // console.log("SUCCESS: " + JSON.stringify(result.response));
      alert("success");
      // alert(JSON.stringify(result.response));
    }, function(err) {
      // console.log("ERROR: " + JSON.stringify(err));
      alert(JSON.stringify(err));
    }, function (progress) {
            // constant progress updates
            $timeout(function () {
              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });


  }) 

}


})


.controller('CompletedCtrl', function($scope, $http, userService, employeeService, $cordovaImagePicker, $cordovaFileTransfer,  $timeout,) {
$scope.vendors_id = [];
$scope.workshops_id = [];

var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};

  $http.post('http://www.stafftrainingcompliance.com/get_employee_ect.php',{
    id_user: userService.userData.id
  },{
    headers : headers 
  } ).then(function(response1){
    // console.log(response1.data);    

    userService.setIdEmployee(response1.data.id_employees);

    $http.post('http://www.stafftrainingcompliance.com/get_employee_enrolls.php',{
      id_employees: response1.data.id_employees
    },{
      headers : headers 
    } ).then(function(response2){
      console.log(response2.data.enrollments);
      $scope.enrollments  = response2.data.enrollments;
   angular.forEach($scope.enrollments, function(enrollment){
      $scope.workshops_id.push(enrollment.workshop_id);
   })

    $http.post('http://www.stafftrainingcompliance.com/enrollments_workshops.php',{
      id_workshops: $scope.workshops_id
    },{
      headers : headers 
    } ).then(function(response3){
      
      $scope.workshops  = response3.data.workshops;
      console.log("workshops: " + $scope.workshops);
      angular.forEach($scope.workshops, function(workshop){
      $scope.vendors_id.push(workshop.vendor_id);

   })
})






})

  })
  $scope.download = function(file){

alert(file);
  // File for download
      var url = "http://www.stafftrainingcompliance.com/ect/"+file;
       
      // File name only
      var filename = url.split("/").pop();
       
      // Save location
      var targetPath = cordova.file.documentsDirectory + filename;
 
      $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
          console.log('Success');
          alert("Success");
      }, function (error) {
          console.log('Error');
      }, function (progress) {
          // PROGRESS HANDLING GOES HERE
      });
    }

})

.controller('SettingsCtrl', function($cordovaCapture,$ionicPopover, $ionicPlatform, $ionicActionSheet, userService, employeeService, $scope, $http, $cordovaImagePicker, $cordovaFileTransfer) {


$ionicPopover.fromTemplateUrl('templates/popover.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });





  $scope.edit = false;
  $scope.save = false;
  $scope.editar = function(){
    $scope.edit = true;
    $scope.save = true;
  }



  $scope.user = userService.userData;

  var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};

  $http.post('http://www.stafftrainingcompliance.com/get_employee_ect.php',{
    id_user: userService.userData.id
  },{
    headers : headers 
  } ).then(function(response1){
    // console.log(response1.data);    

    userService.setIdEmployee(response1.data.id_employees);

    employeeService.setId(response1.data.id_employees);
    employeeService.setDaycareId(response1.daycare_id);
    employeeService.setUserId(response1.data.user_id);
    employeeService.setName(response1.data.name);
    employeeService.setPhone(response1.data.phone);
    employeeService.setStatus(response1.data.status);
    employeeService.setAddress(response1.data.address);
    employeeService.setBirthdate(response1.data.birthdate);
    employeeService.setGender(response1.data.gender);
    employeeService.setProfilePicture(response1.data.profile_picture);
    employeeService.setJob(response1.data.job);
    employeeService.setTypeEmployeeId(response1.data.type_employee_id);
    employeeService.setDateOfResponsability(response1.data.date_of_responsability);
    employeeService.setDateOfHired(response1.data.date_of_hired); 

    $scope.employee = employeeService.employeeData;
    $scope.employee.email = userService.userData.email;

  },function errorCallback(response1) {

  })


  $scope.addMedia = function() {
    $scope.hideSheet = $ionicActionSheet.show({
      buttons: [
      { text: 'Take photo' },
      { text: 'Photo from library' }
      ],
      titleText: 'Add Photo',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.addImage(index);
        // alert(index);

      }
    });
  }

  

  $scope.addImage = function(type){
    if(type == 1){
      var options = {
       maximumImagesCount: 1,
       width: 800,
       height: 800,
       quality: 80
     }

     $cordovaImagePicker.getPictures(options)
     .then(function (results) {
      // console.log(results[0]);


      var url = "http://www.stafftrainingcompliance.com/upload_angular_profile.php";
     //target path may be local or url
     var targetPath = results[0];
     var filename = targetPath.split("/").pop();

     // alert(filename);
     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: {'id_employee': userService.userData.id_employee}   

    };
    $cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {
      // console.log("SUCCESS: " + JSON.stringify(result.response));
      alert("success");
      // alert(JSON.stringify(result.response));
    }, function(err) {
      // console.log("ERROR: " + JSON.stringify(err));
      alert(JSON.stringify(err));
    }, function (progress) {
            // constant progress updates
            $timeout(function () {
              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });
  })
   }else if (type == 0){
    
    var options = { limit: 1 };

    $cordovaCapture.captureImage(options).then(function(imageData) {
    alert("esta es la data de la imagen recient tomada. Avisame si te muestra este mensaje" +imageData);

       }, function(err) {
      // An error occurred. Show a message to the user
    });
  



     var url = "http://www.stafftrainingcompliance.com/upload_angular_profile.php";
     //target path may be local or url
     var targetPath = imageData;
     var filename = targetPath.split("/").pop();

     // alert(filename);
     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpeg",
      params: {'id_employee': userService.userData.id_employee}   

    };
    $cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {
      // console.log("SUCCESS: " + JSON.stringify(result.response));
      alert("success");
      // alert(JSON.stringify(result.response));
    }, function(err) {
      // console.log("ERROR: " + JSON.stringify(err));
      alert(JSON.stringify(err));
    }, function (progress) {
            // constant progress updates
            $timeout(function () {
              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });

  }
}

$scope.update = function(){

 $http.post('http://www.stafftrainingcompliance.com/update_angular.php',{
  name: $scope.employee.name,
  job: $scope.employee.job,
  hire_date: $scope.employee.date_of_hired,
  address: $scope.employee.address,
  phone: $scope.employee.phone,
  id_employee: userService.userData.id_employee
},{
  headers : headers 
} ).then(function(respon){



}
,function errorCallback(respon) {

})

}


}) 




.controller('UploadCtrl', function($scope, $http, userService, $cordovaImagePicker, $cordovaFileTransfer) {

  $scope.save = false;


  var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};


  $http.post('http://www.stafftrainingcompliance.com/get_employee_ect.php',{
    id_user: userService.userData.id
  },{
    headers : headers 
  } ).then(function(response6){

    userService.setIdEmployee(response6.data.id_employees);
  }
  ,function errorCallback(response6) {

  })


  $http.post('http://www.stafftrainingcompliance.com/get_categories_angular.php',{
  },{
    headers : headers 
  } ).then(function(response){
    $scope.categories = response.data.categories;


  }
  ,function errorCallback(response) {

  })

  $scope.load = function(cat){

    $http.post('http://www.stafftrainingcompliance.com/get_workshops_categories_angular.php',{
      category_id: cat
    },{
      headers : headers 
    } ).then(function(response1){
      $scope.workshops = response1.data.workshops;


    }
    ,function errorCallback(response1) {

    })

  }   

//1 
//2 ng-show="save"

$scope.select_pic = function(){

  

  var options = {
   maximumImagesCount: 1,
   width: 800,
   height: 800,
   quality: 80
 }

 $cordovaImagePicker.getPictures(options)
 .then(function (results) {
  // console.log(results[0]);
if(results != null){
   $scope.save = true;
}
  $scope.upload = function(id_workshop){

    var url = "http://www.stafftrainingcompliance.com/upload_new_angular.php";
     //target path may be local or url
     var targetPath = results[0];
     var filename = targetPath.split("/").pop();

     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: {'id_employee': userService.userData.id_employee, 'id_workshop': id_workshop}   

    };
    $cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {

      alert("success");
      // alert(JSON.stringify(result.response));
    }, function(err) {
      // console.log("ERROR: " + JSON.stringify(err));
      alert(JSON.stringify(err));
    }, function (progress) {
            // constant progress updates
            $timeout(function () {
              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });
  }
}) 
}
})

.controller('QuizzesCtrl', function($scope, $http, userService, $cordovaImagePicker, $cordovaFileTransfer, $location) {

 var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};

    $http.post('http://www.stafftrainingcompliance.com/get_employee_ect.php',{
    id_user: userService.userData.id
  },{
    headers : headers 
  } ).then(function(response33){
    console.log(response33.data);
      userService.setIdEmployee(response33.data.id_employees);

     $http.post('http://www.stafftrainingcompliance.com/quiz_start.php',{
        employee_id: response33.data.id_employees
  },{
    headers : headers 
  } ).then(function(response22){
      $scope.solutions = response22.data;
          console.log(      $scope.solutions );

            
            
  }, function(err22){})

},function(err33){})

$scope.radio = function(radio){
  console.log(radio);
}

 
 $scope.answers = [];
 $scope.questions_id = [];
 var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};
  $http.post('http://www.stafftrainingcompliance.com/get_employee_ect.php',{
    id_user: userService.userData.id
  },{
    headers : headers 
  } ).then(function(response){
    console.log(response);

      $http.post('http://www.stafftrainingcompliance.com/get_questions_ect_angular.php',{
    id_daycares: response.data.daycare_id
  },{
    headers : headers 
  } ).then(function(response1){
      $scope.questions = response1.data.questions;
      angular.forEach($scope.questions, function(question){
      $scope.questions_id.push(question.id_questions);
   })

       $http.post('http://www.stafftrainingcompliance.com/get_solutions_angular.php',{
        id_questions: $scope.questions_id
  },{
    headers : headers 
  } ).then(function(response2){
      $scope.solutions = response2.data.solutions;
            

            
            
  }, function(err1){})
  }, function(err2){})
  }, function(err3){})

$scope.send = function(p){


//  $http.post('http://www.stafftrainingcompliance.com/get_employee_quiz_angular.php',{
//         employee_id: userService.userData.id_employee},{
//     headers : headers 
//   } ).then(function(re){
// console.log(re); 
//   $http.post('http://www.stafftrainingcompliance.com/quiz_answers.php',{
//         answers: $scope.answers,
//         employee_quiz_id: re.data.employee_quiz[0].id_employee_quiz,
//         questions_id: $scope.questions_id
//   },{
//     headers : headers 
//   } ).then(function(re1){
// console.log(re1);            

            
            
//   }, function(e1){})
// }, function(e){})

alert("Thank you! your test has been sent.")
$location.url("#/app/home");

}



})

.controller('PasswordChangeCtrl', function( md5, $scope, $http, userService, $cordovaImagePicker, $cordovaFileTransfer, $location) {
 var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};

$scope.password={};
$scope.password.pass = userService.userData.password;



$scope.save = function(c){


if(md5.createHash(c || '') == userService.userData.password && $scope.pass1 == $scope.pass2){

alert("password updated");

    $http.post('http://www.stafftrainingcompliance.com/update_password_angular.php',{
    password: $scope.password.pass1,
    id_user: userService.userData.id
  },{
    headers : headers 
  } ).then(function(response){
    console.log(response);
})

}else{
  alert("please, verify the passwords");
  
}

}






})


;








