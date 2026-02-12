sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/yhp/z/studyfiori01/test/integration/FirstJourney',
		'com/yhp/z/studyfiori01/test/integration/pages/TravelList',
		'com/yhp/z/studyfiori01/test/integration/pages/TravelObjectPage',
		'com/yhp/z/studyfiori01/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/yhp/z/studyfiori01') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);