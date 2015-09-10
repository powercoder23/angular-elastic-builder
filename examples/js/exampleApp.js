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
                choices: [{
                        "label": "Diabetes",
                        "key": "diabetes"
                    }, {
                        "label": "Insomnia",
                        "key": "insomnia"
                    }, {
                        "label": "Fertility",
                        "key": "fertility"
                    }, {
                        "label": "Osteoporosis",
                        "key": "osteoporosis"
                    }, {
                        "label": "Anesthesia",
                        "key": "anesthesia"
                    }, {
                        "label": "Anesthesia Reversal Agents",
                        "key": "anesthesia reversal agents"
                    }, {
                        "label": "Surgery",
                        "key": "surgery"
                    }, {
                        "label": "Antibiotics",
                        "key": "antibiotics"
                    }, {
                        "label": "Anti-Fungals",
                        "key": "anti-fungals"
                    }, {
                        "label": "Antipsychotics",
                        "key": "antipsychotics"
                    }, {
                        "label": "Hepatitis C",
                        "key": "hepatitis c"
                    }, {
                        "label": "HIV",
                        "key": "hiv"
                    }, {
                        "label": "Immunology",
                        "key": "immunology"
                    }, {
                        "label": "Oncology – Brain Cancer",
                        "key": "oncologyBrainCancer"
                    }, {
                        "label": "Oncology - CTCL",
                        "key": "oncologyCtcl"
                    }, {
                        "label": "Oncology – Colorectal Cancer",
                        "key": "oncologyColorectalCancer"
                    }, {
                        "label": "Oncology - Melanoma",
                        "key": "oncologyMelanoma"
                    }, {
                        "label": "Oncology - Non-Muscle Invasive Bladder Cancer",
                        "key": "oncologyNMIBC"
                    }, {
                        "label": "Oncology – Ovarian Cancer",
                        "key": "oncologyOC"
                    }, {
                        "label": "Oncology – Lung Cancer",
                        "key": "oncologyLC"
                    }, {
                        "label": "Oncology – Breast Cancer",
                        "key": "oncologyBC"
                    }, {
                        "label": "Oncology – Gastric Cancer",
                        "key": "oncologyGC"
                    }, {
                        "label": "Oncology – Renal Cell Carcinoma",
                        "key": "oncologyRCC"
                    }, {
                        "label": "Vaccines - HPV",
                        "key": "vaccinesHPV"
                    }, {
                        "label": "Vaccines - Pneumococcal",
                        "key": "vaccinesPpneumococcal"
                    }, {
                        "label": "Vaccines - Rotavirus",
                        "key": "vaccinesRotavirus"
                    }, {
                        "label": "Vaccines - Shingles",
                        "key": "vaccinesShingles"
                    }
                ]
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
