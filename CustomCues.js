// extracting files to templatable pieces.. this is just the cues for coaching


				// determine whether you want to automatically move to the next item after 
				// a set time period here - autoplay true is YES	// 
				var autoplay = true;
				// explanation of my thought process:

				
				// create an empty array for storing user intentions
				 var intentionlist = [];

				 // create a switch for behavioral changes that happen when user defines intentoins
				 var intentionListSetByUser = false;

				 // #todo - when loading saved data, change this to be dependent upon whether user has data stored

				// create an empty array for coaching methods
				var coachingMethods = [];
				
				// define an array for integrally informed injuctions
				var integral = [];

				// create objects for each method
				var access = {
					title: "access",
					invitation: "Imagine being more congruent with this.^2000<br>Notice what is in the way of this.^2000 <br>Let this all go."
				};
				var sedona = {
					title: "sedona",
					invitation: "^2000 <br>Notice what is in the way of this.^2000 <br>Welcome this, any resistance to this, and let it all go. ^2000 <br> "

				};
			
				integral[0] = {
						title: "integral0",
						invitation: "what would it take to be coherent with this intent?"
					};
				integral[1]  = {
					title: "integral3",
					invitation: "ask yourself who you would need to be in order to live this intention more fully."
				};
				integral[2]  = {
					title: "integral2",
					invitation: 'lean into this.'
				};
				integral[3]  = {
					title: "integral3",
					invitation: "see if you can take deeper ownership of this intention."
				};
				integral[4]  = {
					title: "integral4",
					invitation: "take a breath, and just notice what this means to you."
				};
				integral[5]  = {
					title: "integral5",
					invitation: "lean into to inhabit in your body the way of being required here."
				};
				integral[6]  = {
					title: "integral6",
					invitation: "ask yourself how important this intention is to you."
				};
				integral[7]  = {
					title: "integral7",
					invitation: "notice the impact this has on your life."
				};
				integral[8]  = {
					title: "integral8",
					invitation: "would you be willing to commit more wholeheartedly to this?"
				};
				integral[9]  = {
					title: "integral9",
					invitation: "could you be more devoted to this?"
				};
	

				
				// set the coaching methodologies
				coachingMethods[0] = access;
				coachingMethods[1] = sedona;
				coachingMethods[2] = integral[1];
				coachingMethods[3] = integral[2];
				coachingMethods[4] = integral[3];
				coachingMethods[5] = integral[4];
				coachingMethods[6] = integral[5];
				coachingMethods[7] = integral[6];
				coachingMethods[8] = integral[7];
				coachingMethods[9] = integral[8];
				coachingMethods[10] =integral[0];

				// create a variable for the index creation function
				var indexCreated;

				var calculateRandomIndex = function(array){
			
					indexCreated = Math.round(Math.random() * (array.length - 1));
					return indexCreated;

				}
				

				// place each object in the array
				// test the functions

function setInjunction() {
		console.log("intention list is in here "+intentionList);
 		// choose a random # based on the number of items in the array
 		var indexCreatedThisTime = calculateRandomIndex(coachingMethods);
 		// use that number to grab a random coaching method
 		var coachingMethodSelection = coachingMethods[indexCreatedThisTime];
 		
 		console.log("index was "+ indexCreatedThisTime);
 		
 		console.log("coaching method selected is "+ coachingMethodSelection);

		console.log("setting injunction - lesson is " +lessonNumber);


		// define the number of lessons so the app knows when to loop
		
	
		switch (lessonNumber) {
  case 1:
	typed.strings =  [
	"One of your aims is to "+ intentionList[0] + " ^2000<br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+	coachingMethodSelection.invitation
 
					]    
	break;
  case 2:
typed.strings =  [
	"Awesome.^2000",
	"Great work so far.^2000",
	"One of your aims is to "+ intentionList[1] + " ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
		
				
					]   
    break;
  case 3:
typed.strings =  [
	"Amazing. ^2000",
	"Let's go deeper now. ^2000",
	"One of your aims is to "+ intentionList[2] + " ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;
  case 4:
typed.strings =  [
	"Wonderful. ^2000",
	"One of your aims is to "+ intentionList[3] + " ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;
  case 5:
typed.strings =  [
	"Perfect. ^2000",
	"Lets take a moment to be with the full gravity of that you exist right now... ^4000",
	"One of your aims is "+ intentionList[4] + "  ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
	    break;

  case 6:
typed.strings =  [
	"Surreal.^2000",
	"Lets keep exploring.^2000",
	"One of your aims is to "+ intentionList[5] + " ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;

  case 7:
typed.strings =  [
	"Awesome.^2000",
	"I am loving sharing this with you.^2000",
	"One of your aims is to "+ intentionList[6] + " ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;
  case 8:
typed.strings =  [
	"Amazing ^2000",
	"One of your aims is to "+ intentionList[7] + " ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;
  case 9:
typed.strings =  [
	"Wonderful.^2000",
	"One of your aims is to "+ intentionList[8] + " ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;
  case 10:
typed.strings =  [
	"Perfect.^2000",
	"One of your aims is to "+ intentionList[9] + " ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;

  case 11:
typed.strings =  [
	"Incredible.^2000",
	"You are an amazing, bad ass, phenomenal human being.^2000",
					] 
    break;
  default:
typed.strings =  [
	"_", 
	"Hmm... I am having a moment here, can you reload the page and lets start over?",
					]  



				}
   console.log("typed strings are now "+typed.strings);
// return typed.strings;
    }
