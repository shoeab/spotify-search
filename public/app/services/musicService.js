angular.module('musicService', [])

.factory('Music', function($http){

	var musicFactory = {};

	musicFactory.search = function(keyword){

		return $http.get('https://api.spotify.com/v1/search?q='+keyword+'%20bowra&type=artist,album');
	}

	/*storyFactory.allMyStory = function() {

		return $http.get('/api');
	}

	storyFactory.all_lobs = function() {

		return $http.get('/api/lobs');
	}
	storyFactory.sub_lobs_by_lob = function(lob_id) {

		return $http.get('/api/sublobs/by/lob/'+lob_id);
	}
	storyFactory.projects_by_sub_lob = function(sub_lob_id) {

		return $http.get('/api/projects/by/sublob/'+sub_lob_id);
	}
	storyFactory.get_projects_by_title = function(sub, pr_title) {

		return $http.get('/api/projects/by/sublob/'+sub+'/'+pr_title);
	}
	storyFactory.get_projects_by_year = function(sub, pr_title, year) {

		return $http.get('/api/projects/by/sublob/'+sub+'/'+pr_title+'/'+year);
	}
	storyFactory.get_projects_by_quarter = function(sub, pr_title, year, quarter) {

		return $http.get('/api/projects/by/sublob/'+sub+'/'+pr_title+'/'+year+'/'+quarter);
	}
	storyFactory.get_projects_by_month = function(sub, pr_title, year, quarter, month) {

		return $http.get('/api/projects/by/sublob/'+sub+'/'+pr_title+'/'+year+'/'+quarter+'/'+month);
	}*/

	return musicFactory;

});