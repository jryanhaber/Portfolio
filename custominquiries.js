// extracting files to templatable pieces.. this is just the cues for coaching


				// determine whether you want to automatically move to the next item after 
				// a set time period here - autoplay true is YES	// 
				var autoplay = true;
				// explanation of my thought process:

				
				// create an empty array for storing user inquiries

				 // create a switch for behavioral changes that happen when user defines intentoins
				 var inquiryListSetByUser = false;

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
					invitation: "what would it take to be coherent with this intent?"
				};
				integral[1]  = {
					invitation: "ask yourself who you would need to be in order to live this inquiry more fully."
				};
				integral[2]  = {
					invitation: 'lean into this.'
				};
				integral[3]  = {
					invitation: "see if you can take deeper ownership of this inquiry."
				};
				integral[4]  = {
					invitation: "take a breath, and just notice what this means to you."
				};
				integral[5]  = {
					invitation: "lean into to inhabit in your body the way of being required here."
				};
				integral[6]  = {
					invitation: "ask yourself how important this inquiry is to you."
				};
				integral[7]  = {
					invitation: "notice the impact this has on your life."
				};
				integral[8]  = {
					invitation: "would you be willing to commit more wholeheartedly to this?"
				};
				integral[9]  = {
					invitation: "could you be more devoted to this?"
				};
				


var inquiryList = [

   "What would it take for you to be who you must be to make $25k this week? " 
,  "Are you willing to receive 25k this week?" 
,  "What is in the way of you being who you must be in order to make all the money you could dream of?" 
,  "Who or what are you unwilling to be such that if you allowed yourself to be it, would allow you to create more money then you know what to do with?"
,  "What would it take to appreciate even more all the money you have already received?"
,  "If you were truly being you with money today who would you be and what would you choose?" 
,  "How much pain, contraction, upset, stress, negativity, heaviness, and impossibility do you have associated and lumped together with money?"
,  "What if you were to truly appreciate money today?" 
,  "What physical actualization of an unreal, unbelievable, phenomenal, fantastical, magical   miraculous reality beyond this reality with money are you now capable of generating, creating and instituting?"
,  "How many secret, hidden, covert, unacknowledged, undisclosed, and unsaid agendas do you have to never having money and being successful?"
];

				

var toExperienceList = [
"^2000<br><br>Notice all that this brings up."


]

var beWithThis = [
"^4000<br><br>Be with this question.",
"^4000<br><br>Let this question be here without seeking an answer.",
"^4000<br><br>Let this question be here.",
"^4000<br><br>Try just being with this question."

]

var identifyObstacle = [
"^4000<br><br>Notice what comes up, including any thoughts, ^1000 feelings, ^1000 and resistance <br>that come up in being with this question",
"^4000<br><br>Notice any resistance, wanting to control, ^1000 wanting for security, ^1000 wanting for approval, ^1000 <br>that come up in being with this question",
"^4000<br><br>Notice specifically any expectations, ^1000 projections, ^1000 separations, ^1000 and rejections, ^1000 <br>that come up in being with this question",
"^4000<br><br>Notice specifically any decisions, ^1000 judgments ^1000, conclusions ^1000 and computations, ^1000 <br>that come up in being with this question",
"^4000<br><br>Notice specifically any limitations, ^1000 contractions, ^1000 conflations, ^1000 and fixed, solidified, or rigid points of view, ^1000 <br>that come up in being with this question"

]


 var clearIt = [

"^2000<br><br>Would you destroy an uncreate all of this?",
"^2000<br><br>Would you be willing to uncreate and rescript all of this within?",
"^2000<br><br>Would you be willing to listen deeply to this, and then let it go?",
"^2000<br><br>Would you be willing to embrace this exactly as it is?",
"^2000<br><br>Would you destroy an uncreate all of this?",
"^2000<br><br>Would you be willing to create beyond this?"



 ]


		// 
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

				var coachingStyle;
				var openingStatement;
				// set up coaching style as inquiry, but this can be changed later
				// as a switch
				coachingStyle = "inquiry";
				if(coachingStyle == "inquiry"){

					 openingStatement = "";
				} else if(coachingStyle = "intention"){
					openingStatement = "One of your aims is to ";
				}  
				console.log(coachingStyle + ": " + openingStatement)

				

				// place each object in the array
				// test the functions

// I need a random selection function that takes a number of 
// items in an array as a parameter and outputs the selected

function random(itemCount, arraySelectedFrom){

// need to build this when its more clear

}


function setInjunction() {
		console.log("inquiry list is in here "+inquiryList);
 		// choose a random # based on the number of items in the array
 		var indexCreatedThisTime = calculateRandomIndex(coachingMethods);
 		// use that number to grab a random coaching method
 		
 		// choose a random being-with Injunction
 		var beingWithThisIndexThisTime = calculateRandomIndex(beWithThis);
 		// choose a random clearing
 		var clearingIndexCreatedThisTime = calculateRandomIndex(clearIt);
 		// choose a random obstacle confrontation approach
 		var identifyObstacleIndexThisTime = calculateRandomIndex(identifyObstacle);

 		var coachingMethodSelection = coachingMethods[indexCreatedThisTime];
 		
 		console.log("index was "+ indexCreatedThisTime);
 		
 		console.log("coaching method selected is "+ coachingMethodSelection);

		console.log("setting injunction - lesson is " +lessonNumber);


		// define the number of lessons so the app knows when to loop
		
	
		switch (lessonNumber) {
  case 1:
	typed.strings =  [
	openingStatement+ inquiryList[0] + beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime] + clearIt[clearingIndexCreatedThisTime]
 
					]    
	break;
  case 2:
typed.strings =  [
	openingStatement+ inquiryList[1] +  beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime]  + clearIt[clearingIndexCreatedThisTime]
		
				
					]   
    break;
  case 3:
typed.strings =  [
	"Amazing. ^2000",
	"Let's go deeper now. ^2000",
	openingStatement + inquiryList[2] +  beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime]  + clearIt[clearingIndexCreatedThisTime]
				]   
    break;
  case 4:
typed.strings =  [
	"Wonderful. ^2000",
	openingStatement + inquiryList[3] +  beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime]  + clearIt[clearingIndexCreatedThisTime]
				]   
    break;
  case 5:
typed.strings =  [
	"Perfect. ^2000",
	"Lets take a moment to be with the full gravity of that you exist right now... ^4000 <br>" +
	openingStatement + inquiryList[4] +   beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime]  + clearIt[clearingIndexCreatedThisTime]
				]   
	    break;

  case 6:
typed.strings =  [
	"Surreal.^2000",
	"Lets keep exploring.^2000",
	openingStatement + inquiryList[5] +   beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime]  + clearIt[clearingIndexCreatedThisTime]
				]   
    break;

  case 7:
typed.strings =  [
	"Awesome.^2000",
	"I am loving sharing this with you.^2000",
	openingStatement + inquiryList[6] +   beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime]  + clearIt[clearingIndexCreatedThisTime]
				]   
    break;
  case 8:
typed.strings =  [
	"Amazing ^2000",
	openingStatement + inquiryList[7] +   beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime]  + clearIt[clearingIndexCreatedThisTime]
				]   
    break;
  case 9:
typed.strings =  [
	"Wonderful.^2000",
	openingStatement+ inquiryList[8] +   beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime]  + clearIt[clearingIndexCreatedThisTime]
				]   
    break;
  case 10:
typed.strings =  [
	"Perfect.^2000",
	openingStatement+ inquiryList[9] +   beWithThis[beingWithThisIndexThisTime] + identifyObstacle[identifyObstacleIndexThisTime]  + clearIt[clearingIndexCreatedThisTime]
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
