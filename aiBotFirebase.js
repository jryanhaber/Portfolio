

$(document).ready(function(){



		var myFirebaseRef = new Firebase("https://processes.firebaseio.com/");

		var dataToSaveToDatabase = $("#initialLogDestination").html(); // save contents of initial log destination

		var SaveThisDocumentState = function(){
	        console.log("++ Save ++ state just ran, and this document state saved");


		}


		        // save all contents to firebase

		        // set data

		        // get data



		});



		var usersRef = myFirebaseRef.child("data");
		usersRef.set({
		  alanisawesome: {
		    data: dataToSaveToDatabase,
		    full_name: "Alan Turing"
		  },
		  gracehop: {
		    date_of_birth: "December 9, 1906",
		    full_name: "Grace Hopper"
		  }


	});




	

});
