var Guidebook = angular.module('Guidebook',['ngRoute']);

Guidebook.config(['$routeProvider',function($routeProvider) {

$routeProvider.when('/',{
controller : 'ChaptersController',
templateUrl : 'view/chapters.html'
})

.when('chapter/:chapterId',{
controller : 'ChaptersController',
templateUrl : 'view/chapters.html'
})

.when('addNote/:chapterId',{
controller : 'AddNoteController',
templateUrl : 'view/addNote.html'
})

.when('deleteNote/:chapterId/:noteId',{
controller : 'DeleteNoteController',
templateUrl : 'view/addNote.html'
})

}]);


    
