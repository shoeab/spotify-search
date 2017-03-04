angular.module('musicCtrl', ['musicService'])

.controller('MusicController', function(Music, $scope){
	var allKeywords = [];  // Declaring variable to to store all input keyword
	$scope.loading = false; // Loader show false
	$scope.result = false; // Result show false
	var vm = this;
	$scope.pageTitle = "My Page"; // Page title
	console.log(localStorage.getItem("ky"));

	if (allKeywords.length==0 && localStorage.getItem("ky") != null) // If allKeywords variable empty. Load from localStorage
				allKeywords = localStorage.getItem("ky").split(',');
	
	/*Auto complete function*/
	$scope.complete=function(){ 
      	console.log(allKeywords);
	    $( "#keyword" ).autocomplete({
	      source: allKeywords
	    });
    } 

    /*Search keyword*/
	vm.searchMusic = function(){
		$scope.loading = true; //Loader show true
		$scope.result = false; //Result show false
		vm.message = '';
		console.log($scope.keyword);

		Music.search($scope.keyword) //Call factory service
			.success(function(data){

				$scope.albums = data.albums.items;
				$scope.artists = data.artists.items;
				console.log($scope.albums);
				console.log($scope.artists);
				$scope.loading = false; //Loader show false on RESULT
				$scope.result = true; //Result show true
			});

			if (allKeywords.length==0 && localStorage.getItem("ky") != null) // If allKeywords variable is empty. Load from localStorage
				allKeywords = localStorage.getItem("ky").split(',');

			if(allKeywords.indexOf($scope.keyword) !== -1) { // Checking if keyword already exist in array
			  	console.log('keyword exist already exists!');
			}
			else{ // If keyword doesn't exist add keyword on array 
				console.log(allKeywords);
				allKeywords[allKeywords.length] = $scope.keyword;
				//allKeywords.push($scope.keyword);
				localStorage.setItem("ky", allKeywords); //Setting localstorage allKewords 
			}
			
	};

})