// extracting files to templatable pieces.. this is just the cues for access

		// clarify the total number of items in the intentions list here
		var numberOfLessons = 17;
		// determine whether you want to automatically move to the next item after 
		// a set time period here - autoplay true is YES	// 
		var autoplay = true;



			var goals = [];
				

			
				goal[0] = {
						invitation: "what would it take to be coherent with this intent?"
					};
				goal[1]  = {
					invitation: "ask yourself who you would need to be in order to live this intention more fully."
				};
				goal[2]  = {
					invitation: 'lean into this.'
				};
				goal[3]  = {
					invitation: "see if you can take deeper ownership of this intention."
				};
				goal[4]  = {
					invitation: "take a breath, and just notice what this means to you."
				};
				goal[5]  = {
					invitation: "lean into to inhabit in your body the way of being required here."
				};
				goal[6]  = {
					invitation: "ask yourself how important this intention is to you."
				};
				


var calculateRandomIndex = function(array){
			
					indexCreated = Math.round(Math.random() * (array.length - 1));
					return indexCreated;

				}
				


function setInjunction() {
				console.log("setting injunction - lesson is " +lessonNumber);

				switch (lessonNumber) {




  case 1:
	typed.strings =  [
	"^2000 Hi.^2000",
	"Welcome to your life^2000",
	"What would it take for you to inhabit the ferocity of an eagle striking prey, ^2000 as it comes to making $4k this week? <br><br>?"


					]    
	break;
  case 2:
typed.strings =  [
	"Is there anything in the way of this that is actually not real and true for you,^2000 <br><br>that is creating an undesired outcome or experience?"
	"If so, have you buried this under layers and layers of unconsciousness?",
					]   
    break;
  case 3:
typed.strings =  [
	"If so, how many layer of unconsciousness do you have covering that up?"
					]   
    break;
  case 4:
typed.strings =  [
	"Are you now willing to uncover that,^2000 <br><br> make it conscious,^2000 <br><br> and look at it?"
					]   
    break;
  case 5:
typed.strings =  [
	"What would it be like if you chose that now?"
					]   
  case 6:
typed.strings =  [
	"How much more of what you truly desire^2000", 
	"would start to show up^2000", 
	"with a lot more ease?"
					]   
    break;
  case 7:
typed.strings =  [
	"What if you choose that now?^2000",
	"Remove layer,^2000",
	"After layer,^2000",
	"After layer,^2000",
	"After layer,^2000",
	"What’s underneath all of this?"
					] 
    break;
  case 8:
typed.strings =  [
	"What do you know about this?"
					]   
    break;
  case 9:
typed.strings =  [
	"What does your body know about this?"
					]   
    break;
  case 10:
typed.strings =  [
	"What is your body telling you with this?"
					]   
    break;
  case 11:
typed.strings =  [
	"And what is the truth beneath this?"
					]   
    break;
  case 12:
typed.strings =  [
	"What’s here now?"
					]   
    break;
  case 13:
typed.strings =  [
	"What happens if you don’t try to define it?"
					]   
    break;
  case 14:
typed.strings =  [
	"What happens if you just allow yourself to be it?"
					]   
    break;
  case 15:
typed.strings =  [
	"Has something changed?"
					]   
    break;
  case 16:
typed.strings =  [
	"What else is possible now that may not have been possible before?^2000",
	"What do you have access to now?^2000",
	"What can you create now?"
					]   
    break;
  case 17:
typed.strings =  [
	"And how much fun can you have being it^2000 and creating it?"
					]   
    break;

     case 17:
typed.strings =  [
	"Do you want to run through these again?"
					]   
    break;

     case 18:
typed.strings =  [
	"Let's do it.."
					]   
    break;
  default:
typed.strings =  [
	"_", 
	"Lets do that...",
					]  

				}
   console.log("typed strings are now "+typed.strings);
return typed.strings;
    }