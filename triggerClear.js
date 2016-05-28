// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

// extracting files to templatable pieces.. this is just the cues for coaching


				// determine whether you want to automatically move to the next item after 
				// a set time period here - autoplay true is YES	// 
				var autoplay = true;
				// explanation of my thought process:
				var botMode = {

					// whether to automatically move to next step
					autoplay: false,
					// whether to use firebase
					firebase: false,
					// whether the user sets the number of inquiries
					userSetLessonListLength: false
				}
				
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




				var debugTyping = false;

			
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

   "What would it take for you to be who you must be to make $25k this week? " ,
  "Are you willing to receive 25k this week?" 
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


];

var beWithThis = [
"^4000<br><br>Be with this question.",
"^4000<br><br>Let this question be here without seeking an answer.",
"^4000<br><br>Let this question be here.",
"^4000<br><br>Try just being with this question."

];

var identifyObstacle = [
"^4000<br><br>Notice what comes up, including any thoughts, ^1000 feelings, ^1000 and resistance <br>that come up in being with this question",
"^4000<br><br>Notice any resistance, wanting to control, ^1000 wanting for security, ^1000 wanting for approval, ^1000 <br>that come up in being with this question",
"^4000<br><br>Notice specifically any expectations, ^1000 projections, ^1000 separations, ^1000 and rejections, ^1000 <br>that come up in being with this question",
"^4000<br><br>Notice specifically any decisions, ^1000 judgments ^1000, conclusions ^1000 and computations, ^1000 <br>that come up in being with this question",
"^4000<br><br>Notice specifically any limitations, ^1000 contractions, ^1000 conflations, ^1000 and fixed, solidified, or rigid points of view, ^1000 that come up in being with this question"

];


 var clearIt = [

"^2000<br><br>Would you destroy an uncreate all of this?",
"^2000<br><br>Would you be willing to uncreate and rescript all of this within?",
"^2000<br><br>Would you be willing to listen deeply to this, and then let it go?",
"^2000<br><br>Would you be willing to embrace this exactly as it is?",
"^2000<br><br>Would you destroy an uncreate all of this?",
"^2000<br><br>Would you be willing to create beyond this?"



 ];


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


				};

				var coachingStyle;
				var openingStatement;
				// set up coaching style as inquiry, but this can be changed later
				// as a switch
				coachingStyle = "inquiry";
				if(coachingStyle == "inquiry"){

					 openingStatement = "";
				} else if(coachingStyle == "intention"){
					openingStatement = "One of your aims is to ";
        }  else{}
				console.log(coachingStyle + ": " + openingStatement);

				

				// place each object in the array
				// test the functions

// I need a random selection function that takes a number of 
// items in an array as a parameter and outputs the selected

function random(itemCount, arraySelectedFrom){

// need to build this when its more clear

}


function setInjunction() {
	




	if(debugTyping){	console.log("inquiry list is in here "+inquiryList);}
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
			"Lets move through this again. "
					]  ;  
   break;
   case 2:
typed.strings =  [
		
   "Step 1: What happened? ^2000 <br>Lets get at what happened when you got triggered first"
,  "Lets start there for the leverage in that moment, the way in which it might be a pivot point.<br>"
,  "Think back to the moment just before this particular experience arose for you. <br> <br> ^4000 ... ^20000"	]   ;

   break;
   case 3:
typed.strings =  [
   "Step 2: Get the Somatic Experience. ^2000 <br><br>Lets connect to the somatic experience out of which the trigger cascaded or emerged."
,  "Bring your body into awareness.<br> ^2000 Notice what it felt like in your body when you got triggered.<br>"
,  "See if you can get the feeling in your body when the trigger happened. <br>"
,  "Just before that moment, ^2000 play it forward, ^2000 and see if you can identify the feeling in your body, ^2000 your emotions ^4000" 
,  "See if you can identify the feeling in your nervous system, ^2000 of it happening, ^2000 arising, ^2000 emerging ^2000"
,  "Of it coming to the foreground of your world, ^2000 of your experience. <br>"
,  "<br><br>... ^4000<br>"
					]   ;
   break;
   case 4:
typed.strings =  [
   "Step 3: Clarify The Heart Of The Matter. ^2000 <br><br> Lets clarify the part of the trigger that matters the most next."
,  "Bring to memory the moment of being triggered again"
,  "Notice the elements that seem to be present in the situation"
,  "Notice which elements seem to be causes or influences in you getting triggered"
,  "Now take one element away, remove some bit of context, something that might be relevant,"
,  "Now play the memory out again"
,  "Does the trigger still happen?<br>"
,  "If not, you may have found it... ^2000 <br><br> keep doing this until you find this piece"
,  "When you have isolated the most significant facet of the experience, let me know. <br><br>(tap/click)"
,  "Take something else away, ^2000 remove some other bit of context. ^4000 "
,  "Play the memory out again, and see if the trigger still happens.<br>"
,  "Does the trigger still happen?<br>"
,  "Take something else away, ^2000 remove some other bit of context. ^4000 "
,  "Play the memory out again, and see if the trigger still happens.<br>"
,  "Does the trigger still happen?<br>"
,  "Take something else away, ^2000 remove some other bit of context. ^4000 "
,  "Play the memory out again, and see if the trigger still happens.<br>"
,  "Does the trigger still happen?<br>"
,  "Take something else away, ^2000 remove some other bit of context. ^4000 "
,  "Play the memory out again, and see if the trigger still happens.<br>"
,  "Does the trigger still happen?<br>"
,  "Take something else away, ^2000 remove some other bit of context. ^4000 "
,  "Play the memory out again, and see if the trigger still happens.<br>"
,  "Does the trigger still happen?<br>"
,  "Take something else away, ^2000 remove some other bit of context. ^4000 "
,  "Play the memory out again, and see if the trigger still happens.<br>"
,  "Does the trigger still happen?<br>"
,  "Take something else away, ^2000 remove some other bit of context. ^4000 "
,  "Play the memory out again, and see if the trigger still happens.<br>"
,  "Does the trigger still happen?<br>"
,  "If so, continue this<br>","<br><br>...  ^40000"
				]   ;
    break;
  case 5:
typed.strings =  [
   "Step 4: Get What Comes From It. ^2000"
,  "Now lets clarify and tune into what happens in being with this trigger."
,  "Feeling into the somatic experience of the trigger, and relating to it, ask 'what is this'? ^3000"
,  "Ask, 'What do I do with this?' ^4000"
,  "Ask 'What is it like being with this?'' ^4000"
,  "Ask 'What under this?' ^4000"
,  "Ask 'How is this alive in me?'<br><br>...  ^4000"

				]   ;
	    break;

  case 6:
typed.strings =  [
   "Step 5: Make Contact With This Trigger-Experience Somatically"
,  "Rewind this trigger to the moment just before it, ^2000  notice the moment of its emergence ^2000, its arising, ^2000 its coming into form. "
,  "Feel the texture of it, ^2000 the quality of it, ^2000  the shift in posture as it happens ^2000 <br>"
,  "Feel in your body this state of being in its coming into form, ^2000 enact the movement of it ^200 actually act it out, move your body"
,  "As you bring it present (into this moment), ^2000 feel how your body wants to move naturally."
,  "Let the movement be bigger, ^2000 smaller,  ^2000 stronger,  ^2000 softer, ^2000 "
,  "Lets' isolate the aliveness of and in it, ^2000 the part of it that is vital, ^2000 charged, ^2000 alive, ^2000 "
,  "The part of it that matters the most to you. ^2000 <br><br>..."



		]   ;
	    break;


	case 7:
typed.strings =  [
   "Step 6: Identify An Opposing (or 'Flow') Somatic Experience. ^2000 <br><br>Now lets bring an opposing experience into perspective for contrast"
,  "Imagine another moment where you feel something different in your body"
,  "Pick something of significant contrast, a situation where you felt grounded, ^2000 vital,^2000 alive,^2000 free,^2000 flexible,^2000 adaptive"
,  "As much as you can, bring to mind a time when you remember feeling deeply in your element ^2000 "
,  "Deeply in the flow of you, ^2000 your grace ^2000  "
,  "Embodying your gift ^2000 your brilliance, ^2000 your genius, ^2000 your presence, ^2000 your wholeness <br><br> ^4000 ...  ^2000 "

				]   ;
	    break;

	case 8:
typed.strings =  [

   "Step 7: Connect To The Somatic-Experience of the Emergence of This 'Flow' State of Being. ^2000 "
,  "Focus in on the moment of the emergence of this feeling"
,  "Feel the texture of it in its arising, ^2000"
,  "The quality of it in the moment just when it comes into form, ^2000 "
,  "The way in which your posture shifts right when it begins to arise. ^2000  "
,  "Feel in your body this state of being in its coming into form, ^2000 enact the movement of it ^200 actually act it out, move your body"
,  "As you bring it present (into this moment), ^2000 feel how your body wants to move naturally."
,  "Lets see if we can isolate the aliveness of it, ^2000 the part of it that is vital, ^2000 charged, ^2000 alive, ^2000 "
,  "Let the movement be bigger, ^2000 smaller,  ^2000 stronger,  ^2000 softer, ^2000 "
,  "The part of this that matters the most to you. "
,  "Find what that feels like in your body ^2000"
,  "Try on the posture of this  ^2000"
,  "Find that posture ^2000"
,  "Bring that to this memory ^2000"
,  "And if you can incorporate it, ^2000 through your body, ^2000 your somatic experience. <br><br> ^4000 ... <br>"
				]   ;
	    break;


  case 9:
typed.strings =  [
   "Step 8: Get At The Intersection Of These 2 Somatic Experiences: ^2000 <br><br>Now lets tune into the space between these two experiences."
,  "Feel in your body the trigger, ^2000 enact its movement  ^2000 "
,  "Actually act it out, move your body"
,  "As you bring it present (into this moment), ^2000 feel how your body wants to move naturally."
,  "Let the movement be bigger, ^2000 smaller, ^2000 "
,  "Aim to isolate the aliveness of it, ^2000 the part of it that is vital, ^2000 charged, ^2000 alive, ^2000 "
,  "The part that matters the most to you. "
,  "Now bring the embodied feeling, sensation and posture of your 'in the flow' experience into this one."
,  "Notice what happens."
,  "Do this again"
,  "Feel in your body the trigger, ^2000 re-create the movement of it"
,  "Now bring the embodied feeling, sensation and posture of your 'in the flow' experience into this one."
,  "Take notice of what happens in this ^2000 in your body ^2000 in your emotions, ^2000 in your sensations, ^2000 in your nervous system, ^2000 in your posture, ^2000 in your sense of self."
,  "And again, <br> Keep doing this until you are complete"
,  "Feel in your body the trigger, ^2000 re-create the movement of it"
,  "Now bring the embodied feeling, sensation and posture of your 'in the flow' experience into this one."
,  "Take notice of what happens in this ^2000 in your body ^2000 in your emotions, ^2000 in your sensations, ^2000 in your nervous system, ^2000 in your posture, ^2000 in your sense of self."
,  "Feel in your body the trigger, ^2000 re-create the movement of it"
,  "Now bring the embodied feeling, sensation and posture of your 'in the flow' experience into this one."
,  "Take notice of what happens in this ^2000 in your body ^2000 in your emotions, ^2000 in your sensations, ^2000 in your nervous system, ^2000 in your posture, ^2000 in your sense of self."
,  "Feel in your body the trigger, ^2000 re-create the movement of it"
,  "Now bring the embodied feeling, sensation and posture of your 'in the flow' experience into this one."
,  "Take notice of what happens in this ^2000 in your body ^2000 in your emotions, ^2000 in your sensations, ^2000 in your nervous system, ^2000 in your posture, ^2000 in your sense of self."
,  "Feel in your body the trigger, ^2000 re-create the movement of it"
,  "Now bring the embodied feeling, sensation and posture of your 'in the flow' experience into this one."
,  "Take notice of what happens in this ^2000 in your body ^2000 in your emotions, ^2000 in your sensations, ^2000 in your nervous system, ^2000 in your posture, ^2000 in your sense of self."
,  "Feel in your body the trigger, ^2000 re-create the movement of it"
,  "Now bring the embodied feeling, sensation and posture of your 'in the flow' experience into this one."
,  "Take notice of what happens in this ^2000 in your body ^2000 in your emotions, ^2000 in your sensations, ^2000 in your nervous system, ^2000 in your posture, ^2000 in your sense of self.<br><br> ^4000 ... "
				]   ;
    break;



  default:
typed.strings =  [
	"Hmm... I am having a moment here, can you reload the page and lets start over?"
					]  ;



				}
   if(debugTyping){console.log("typed strings are now "+typed.strings)};
// return typed.strings;
    }
