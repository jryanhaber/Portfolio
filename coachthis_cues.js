// extracting files to templatable pieces.. this is just the cues for coaching

				// clarify the total number of items in the intentions list here
				var numberOfLessons = 7;
				// determine whether you want to automatically move to the next item after 
				// a set time period here - autoplay true is YES	// 
				var autoplay = true;

				// explanation of my thought process:

				// define follow up methods - brainstorm
				// access
				// sedona
				// importance - congruity - commitment

				// choose a random selection of methodological approaches to follow up on each intention
				// math.random() will give a random number from 0 - 1
				// multiply the result to get a random number 0 - 10
				// take the total number of options in an array with array.length
				// if you were choosing from 10 options, round the random number to a digit... 
				// for 10 options you want math.round() and math.random() * 10 to get the index
				// of a random selection... since the 10 is the variable, tie it to the array.length 
				// of the options

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

 		var indexCreatedThisTime = calculateRandomIndex(coachingMethods);
 		var coachingMethodSelection = coachingMethods[indexCreatedThisTime];
 		console.log("index was "+ indexCreatedThisTime);
 		console.log("coaching method selected is "+ coachingMethodSelection);

				console.log("setting injunction - lesson is " +lessonNumber);


				// define the number of lessons so the app knows when to loop

		switch (lessonNumber) {
  case 1:
	typed.strings =  [
	"^2000 Welcome.^2000",
	"Are you ready for some spot coaching?^2000",
	"One of your aims is to maintain a finger on the pulse of your immediate experience. ^2000<br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+	coachingMethodSelection.invitation +
 "^2000 Take in the quality and texture of the moment more fully. "
					]    
	break;
  case 2:
typed.strings =  [
	"Awesome.^2000",
	"Great work so far.^2000",
	"One of your aims is to put attunement first in your inquiry and depth practices. ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
		
				
					]   
    break;
  case 3:
typed.strings =  [
	"Amazing. ^2000",
	"Let's go deeper now. ^2000",
	"One of your aims is to feel ALL of your feelings, both conscious and unconscious.  ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;
  case 4:
typed.strings =  [
	"Wonderful. ^2000",
	"Let's connect to your ferocity and mountainousness now. ^2000",
	"One of your aims is to turn your longings back through your heart into the center of your being. ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;
  case 5:
typed.strings =  [
	"Perfect. ^2000",
	"Lets take a moment for the full gravity of that you exist now... ^2000",
	"One of your aims is to inhabit your body while relating to both the humanity and the infinitude/existance/mystery of another human being. ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
  case 6:
typed.strings =  [
	"Surreal.^2000",
	"Lets tune into your inspiration now.^2000",
	"One of your aims is to track that which gives you the goosebumps, to slow down in those moments and lean in until your experience becomes lucid. ^2000 <br><br>Are you fulfilling this intent to your satisfaction? ^4000 <br><br>If not, "+coachingMethodSelection.invitation
				]   
    break;
  case 7:
typed.strings =  [
	"Incredible.^2000",
	"You are an amazing, bad ass, phenomenal human being.^2000",
	"Do you want to take another tour through this?"
					] 
    break;
  default:
typed.strings =  [
	"_", 
	"Lets do that...",
					]  



				}
   console.log("typed strings are now "+typed.strings);
// return typed.strings;
    }
