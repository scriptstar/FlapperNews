angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.posts=[
	{title: 'Post1', upvotes: 12},
	{title: 'Post2', upvotes: 4},
	{title: 'Post3', upvotes: 2},
	{title: 'Post4', upvotes: 5},
	{title: 'Post5', upvotes: 9},
	{title: 'Post6', upvotes: 22}, 
	];
	
	$scope.addPost = function(){
		if($scope.title === '') { return; }
		$scope.posts.push({title: $scope.title, upvotes: 0});
		$scope.title = "";
	}
	
	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
	}
}]);

