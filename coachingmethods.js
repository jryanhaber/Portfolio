

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