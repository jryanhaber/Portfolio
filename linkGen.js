

// one more stab at buttons that trigger loading of saved lists... 
function createURL(named){

			// reverse engineer a page that opens with the same 
			// values as the page has... 
			// create an empty array
			localStorage.named = [];
			// fill it with the values
			( localStorage.named[0] ) = $('#intention1' ).val() ;
			( localStorage.named[1] ) = $('#intention2' ).val() ;
			( localStorage.named[2] ) = $('#intention3' ).val() ;
			( localStorage.named[3] ) = $('#intention4' ).val() ;
			( localStorage.named[4] ) = $('#intention5' ).val() ;
			( localStorage.named[5] ) = $('#intention6' ).val() ;
			( localStorage.named[6] ) = $('#intention7' ).val() ;
			( localStorage.named[7] ) = $('#intention8' ).val() ;
			( localStorage.named[8] ) = $('#intention9' ).val() ;
			( localStorage.named[9] ) = $('#intention10').val() ;
			// generate a url to start
			var linkGenerated = "<h1><a class='loaderLink'>" + named + "</a></h1>";
			// complete this after testign

			$("#savedBotsSpot").prepend(linkGenerated);
		};

	$("#saveBotTemp").click(function(){
		createURL(prompt("name please"));

	});

$(".loaderLink").on('click',function(){

	console.log("loader link triggering");
});