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
