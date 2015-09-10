(function(angular) {

	var app = angular.module('exampleApp', [
		'angular-elastic-builder',
	]);

	app.controller('BasicController', function() {

		var data = this.data = {};

		data.query = [{
			'term': {
				'test.boolean': 0
			}
		}, {
			'terms': {
				'test.state.multi': ['AZ', 'CT']
			}
		}, {
			'terms': {
				'subjectArea': 'Diabetes'
			}
		}, {
			'not': {
				'filter': {
					'term': {
						'test.term': 'asdfasdf'
					}
				}
			}
		}, {
			'exists': {
				'field': 'test.term'
			}
		}];

		data.fields = {
			'test.number': {
				label: "Some Number",
				type: 'number',
				minimum: 650
			},
			'test.term': {
				label: "Some Text",
				type: 'term'
			},
			'test.boolean': {
				label: "Some Boolean",
				type: 'term',
				subType: 'boolean'
			},
			'test.state.multi': {
				label: "States",
				type: 'multi',
				choices: ['AZ', 'CA', 'CT']
			},
			'subjectArea': {
				label: "Theopeutic Area",
				type: 'select',
				choices: ['Diabetes', 'Insomnia', 'Fertility', 'Osteoporosis']
			}
		};

		data.needsUpdate = true;

		this.showQuery = function() {
			var queryToShow = {
				size: 0,
				filter: {
					and: data.query
				}
			};

			return JSON.stringify(queryToShow, null, 2);
		};

	});

})(window.angular);
