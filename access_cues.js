// extracting files to templatable pieces.. this is just the cues for access

		// clarify the total number of items in the intentions list here
		var numberOfLessons = 19;
		// determine whether you want to automatically move to the next item after 
		// a set time period here - autoplay true is YES	// 
		var autoplay = true;


function setInjunction() {
				console.log("setting injunction - lesson is " +lessonNumber);

				switch (lessonNumber) {
  case 1:
	typed.strings =  [
	"^2000 Hi.^2000",
	"Are you ready for some clearings? ^2000 ",
	"What are you avoiding ^2000 with the lack of money you are choosing?"
					]    
	break;
  case 2:
typed.strings =  ["What are you avoiding ^2000 with the poverty you are choosing?"
					]   
    break;
  case 3:
typed.strings =  [
		"Picture all of the commitments that you made to poverty and lack ^4000", 
		"Regarding all of these..."											,
		"Are you willing to revoke them? ^2000"								, 
		"Rescind them? ^2000"												, 
		"Recant	them? ^2000"												, 
		"Reclaim them? ^2000"												, 
		"Renounce them? ^2000"												, 
		"Denounce them? ^2000"												, 
		"Destroy them? ^2000" 												,
		"Uncreate them now? ^2000" 										
					]   
    break;
  case 4:
typed.strings =  ["What would it be like if you allowed yourself to receive outrageous amounts of money?"
					]   
    break;
  case 5:
typed.strings =  [
			"Imagine having outrageous amounts of money. ^2000 "			,
			"What would this allow? ^2000 " 								,
			"How could you be? ^2000 "										,
			"What would you do? ^2000 "										,
			"Create? ^2000 "
					] 
 break;
  
  case 6:
typed.strings =  [
	"Imagine you are limitless, potent, brilliant.^4000"							,
	"Could you allow this?^2000"													,
	"What would happen?^2000"													,
	"What if you owned this?^2000"
					]   
    break;
  case 7:
typed.strings =  [
	"What would it be like if you no longer had problems with money? "
					] 
    break;
  
case 8:
typed.strings = ["What is all of this distracting you from?" 
]
break;
case 9:
typed.strings = ["What would happen if you chose to be as limitless, potent, and brilliant as you truly be?" 
]
break;
case 10:
typed.strings = ["Right in this moment choose to be limitless, potent, and brilliant." 
]
break;
case 11:
typed.strings = [	"What does that bring up? ^2000"									,	
					"What does that create? ^2000"										,
					"And if you choose to be even more..." 								
]
break;
case 12:
typed.strings = ["And if you choose to embody ^1000 the wealth of your being,^2000"		,
				 "What does that create?" 
]
break;
case 13:
typed.strings = ["And what must you be or do different ^1000 in order to out-create ^2000"
				, "and create beyond ^2000"												
				, "all the limitations ^2000"												
				, "you have bought as real and true	^2000"											
 				, "that are not actually real and true for you?" 				
]
break;

case 14:
typed.strings = ["What is possible beyond all of this ^2000"							,
				 "that you have not considered?" 
]
break;
case 15:
typed.strings = ["What are you aware of now, ^2000" 									,
				 "that you can create and actualize, ^2000"								,
				 "that you have not yet chosen?" 
]
break;
case 16:
typed.strings = ["If you were truly being limitless, ^1000 <br> potent, ^1000 and brilliant with money ^1000 today	^2000"	, 
				 "What would you choose right away?"]
break; 

case 17:
typed.strings = [
		"Is there something that requires your attention ^2000 right now?",
		"Something, that if you gave it your attention... ^2000 would allow you to create and have the financial reality, ^2000 beyond this reality, ^2000 you truly desire and know is possible? ^4000" ]
break;

case 18:
typed.strings = ["And everything that doesn't allow all of your creations ^2000 and everything that you choose from this point foward, ^2000 to come to fruition, faster than you ever thought possible, ^2000 and with total ease, ^2000 <br><br> Are you willing to destroy and uncreate all of that?" ]
break; 

case 19:
typed.strings = ["And what would it take for all of this to be fun for you and your body?"
]
break;


  default:
typed.strings =  [
	"_", 
	"Lets do that..."
					]  



				}
   console.log("typed strings are now "+typed.strings);
return typed.strings;
    }
