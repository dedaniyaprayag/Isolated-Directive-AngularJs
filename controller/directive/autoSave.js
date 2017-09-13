app.directive('autosave',function($timeout,$http){
	return {
		restrict : 'E',
		replace : true,
		template : '<textarea ng-keyup ="keyup()"></textarea>',
		scope : {
			saveUrl : '@',
			saveStatus : '='
		},
		link : function(scope,element,attribute){
			scope.saveStatus = {
				text : 'No Changes',
				color : '#009'
			};

			var save = function(){
					scope.saveStatus = {
						text : 'Saved successfully',
						color : '#090'
					}
			};

			var timeOutPromise;
				scope.keyup = function(){
					if(timeOutPromise){
						$timeout.cancel(timeOutPromise);
					}

					scope.saveStatus = {
						text : 'Pending Save ...',
						color : '#990'
					};
					timeOutPromise = $timeout(save,750);
				};
			}
		};
});