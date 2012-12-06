define([
	// Application.
	"app",
	// Modules.
	"modules/controller"
],

function(app, Controller) {
	// Defining the application router, you can attach sub routers here.
	var Router = Backbone.Router.extend({
		routes: {
			"": "base",

			"project/:project_id" : 'goToProject',
			"p/:project_id" : 'goToProject',

			"project/:project_id/frame/:frame_id": 'goToProjectFrame',
			"p/:project_id/f/:frame_id": 'goToProjectFrame'
		},

		/*
		when no route is present.

		player could wait for user input or rely on bootstrapped data
		*/
		base: function() {
			initialize();
		},

		goToProject: function(project_id) {
			initialize();
			app.state.set('project_id',project_id);
		},

		goToProjectFrame: function(project_id,frame_id) {
			initialize();
			app.state.set({
				'project_id': project_id,
				'frame_id': frame_id
			});
		}

	});

	/* create init fxn that can only run once per load */
	var init = function() {
		new Controller.Model();
	};
	var initialize = _.once(init);
	
	return Router;

});
