



var aiBotSettings = {
 appShouldLoadFromFirebase: true

}


// check for value in localStorage.savedbots

if(typeof savedBots !== undefined){

	// if there is a value to saved bots, we have saved bots
	var savedBots = [];

	// define function to load them 
}else{
	// if theres no value here, intialize the variable




}


// if true, this app should shift from local storage to laoding
// from firebase and this should be set up as an external file 
// so that it can be implemented in other aiBots through a simple
// include


var aibotdata = new Firebase("https://processes.firebaseio.com/items/");








// // Attach an asynchronous callback to read the data at our posts reference
// aibotdata.on("value", function(snapshot) {
//   pastData = (snapshot.val());
//   console.log('aibotdata.on(value, function(snapshot)');
//   console.log("pastData");
//   console.log(pastData);
//   console.log("pastData[0]");
//   console.log(pastData[0]);

// for (i = 0; i < pastData.length; i++) {
    
// 	console.log("here we go! "+ pastData[i]);
// 	var nameofThisItem = pastData[i].children.name;
// 	console.log("name isss: "+nameofThisItem);

// }
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });



var saveBot = function(){
	// create this area
	$("#email_request_area").show();
	if (typeof localStorage.userID != undefined){
		$("#user_email").val(localStorage.userID);
	}
	$("#user_email").focus();

}


// when the save button is pushed

var createABot = function(BotID){

	
		BotId.creatorEmail = $("#user_email").val();
		BotId.description = $("#bot_description").val();
		
		

}



function loadADefinedBot(botName){

		$('#inquiry1' ).val(  botName.inquiries  [0]);
		$('#inquiry2' ).val(  botName.inquiries  [1]);
		$('#inquiry3' ).val(  botName.inquiries  [2]);
		$('#inquiry4' ).val(  botName.inquiries  [3]);
		$('#inquiry5' ).val(  botName.inquiries  [4]);
		$('#inquiry6' ).val(  botName.inquiries  [5]);
		$('#inquiry7' ).val(  botName.inquiries  [6]);
		$('#inquiry8' ).val(  botName.inquiries  [7]);
		$('#inquiry9' ).val(  botName.inquiries  [8]);
		$('#inquiry10').val(  botName.inquiries  [9]);
		console.log("%% load a defined bot just ran %%")
	}
  





function Bot(name, description, inquiries){

	console.log("saveBot2 ran and name "+ this.name);
	console.log("saveBot2 ran and userId "+ this.creatorEmail);
	console.log("saveBot2 ran and des "+ this.description);
	console.log("saveBot2 ran and inq "+ this.inquiries);

	this.loadThisBot = function(){

		$('#inquiry1').val(this.inquiries[0]);
		$('#inquiry2').val(this.inquiries[1]);
		$('#inquiry3').val(this.inquiries[2]);
		$('#inquiry4').val(this.inquiries[3]);
		$('#inquiry5').val(this.inquiries[4]);
		$('#inquiry6').val(this.inquiries[5]);
		$('#inquiry7').val(this.inquiries[6]);
		$('#inquiry8').val(this.inquiries[7]);
		$('#inquiry9').val(this.inquiries[8]);
		$('#inquiry10').val(this.inquiries[9]);

	}

	this.saveThisBot = function(){

		

	}

}


function loadSavedNode(name, description){
	var newListItem = document.createElement("button");
		var nameSpan = document.createElement("span");
		var descriptionSpan = document.createElement("span");
	$(newListItem).addClass("list-group-item button button-border");;
	var nameNode = document.createTextNode(name);
	var desciptionNode = document.createTextNode(description);
	nameSpan.appendChild(nameNode);
	descriptionSpan.appendChild(desciptionNode);
	newListItem.appendChild(nameSpan);
	newListItem.appendChild(descriptionSpan);
	// This code finds an existing element:
	var element = document.getElementById("savedBotsArea");
	element.appendChild(newListItem);
}

// // Retrieve new posts as they are added to our database
// aibotdata.on("value", function(snapshot, prevChildKey) {
//   var newPost = snapshot.val();
//   console.log("Title: " + newPost[0].title);
//   console.log("creating new saved item: ");
  
//   //  for each item at index path.. 
//   loadSavedNode(newPost[0].title, newPost[0].description);
//   console.log("Description: " + newPost[0].description);
//   console.log("Previous Post ID: " + prevChildKey);
// });





// // Retrieve new posts as they are added to our database
// aibotdata.on("child_added", function(snapshot, prevChildKey) {
//   var newPost = snapshot.val();
//   console.log("name: " + newPost.name);
//   console.log("Title: " + newPost.child.title);
//   console.log("Previous Post ID: " + prevChildKey);
// });




   // userKey = usersRef.push();
   //      .set({
   //        name: name,
   //        type: processType,
   //        email: email,
   //        inquiries: inquiryList,
          
         

   //              });

   //    }



// push to database success

	function connectToFireBase(){

		// var Firebase = require("firebase");



	}
	function pushDataToFirebase(){



	}

// pull from database and render in react

	function getDataFromFirebase(){


	}
// initiate app from react

	function initiate_ai_app_from_React(){


		
	}