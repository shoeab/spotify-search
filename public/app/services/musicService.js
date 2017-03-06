angular.module('musicService', [])

.factory('Music', function($http){

	var musicFactory = {};

	musicFactory.search = function(keyword){

		return $http.get('https://api.spotify.com/v1/search?q='+keyword+'%20bowra&type=artist,album');
	}

	return musicFactory;

});