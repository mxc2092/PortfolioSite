
$(document).ready(function(){

	var goAgain=true;

	$("#yesButton").hide();
	$("#noButton").hide();

	var imagePath="./assets/images/";
	$("#tourImage").css("background-image", "url(" + imagePath + "sunset2.jpg" + ")");

	var name=prompt("What is your name?");
	
	$("#mainText").html("Welcome " + name + " to your virtual tour of Miami and Coral Gables!");


	 //my original photography
	var imageOrder=new Array("oceanDrive.jpg","miracleMile.jpg","wynwood.jpeg","southBeach.jpeg","farmersMarket.jpeg","river.JPG");
	var hoverImages=new Array("oceanDrive2.jpg","miracleMile2.jpeg","wynwood2.jpeg","southBeach2.jpeg","farmersMarket2.jpeg","river2.JPG");
	var mainOrder=new Array("Ocean Drive","Miracle Mile","Wynwood Walls","South Beach","University of Miami's Farmers Market","Miami River");
	var paraOrder=new Array("Ocean Drive is a major thoroughfare in the South Beach neighborhood of Miami Beach, on the east or Atlantic coast of the state of Florida, in the United States.","Miracle Mile is a 0.503-mile-long (0.810 km) section of Coral Way between LeJeune Road (SW 42nd Avenue) and Douglas Road (SW 37th Avenue) in the city of Coral Gables, Florida, United States.","Wynwood is best known for being a prominent entertainment district, dotted with artwork, restaurants, breweries, clothing stores, dance venues, among other retail options.","Enjoy the white sand and crystal blue water at the beautiful beaches of South Beach!","The famers market occurs every Wednesday on campus and has plenty of great food options!","Come see the extravagent boats going across the Miami River. There are plenty of food options on the river!");

	var colorList=new Array(6);

	//create array with 6 random colors using for loop
	for(i=0;i<6;i++){
    
    	colorList[i]= getRandomColor();
	}


	var currentStop=0;
	var trackStop=0;

	$("#mainButton").click(function(){


		//if it is the first time the button is being clicked
		if(currentStop==0){

			$("#mainText").hide();

		}else if(currentStop>=6){

			var tourAgain=prompt("Would you like to take the tour again?(Enter Y/N)");

			if(tourAgain=="Y"||tourAgain=="y"){
				goAgain=true;
				currentStop=0;
				trackStop=0;

			}else if(tourAgain=="N"||tourAgain=="n"){
				goAgain=false;
				$("#tourImage").hide();
				$("p").hide();
				$("#mainText").hide();
				$("#mainButton").hide();
				$("#topText").html("Goodbye.");
				
			}

		}
	
		if(goAgain==true && currentStop<6){
		trackStop=currentStop;
		console.log("button clicked!");
		$("#tourImage").css("background-image", "url(" + imagePath + imageOrder[currentStop] + ")");
		$("#topText").html("Site "+(currentStop+1)+ ": " + mainOrder[currentStop]);
		$("p").html(paraOrder[currentStop]);
		currentStop++;
		$("#mainButton").html("Next");
		$("#topText").css("color",colorList[trackStop]);
		}

	});//button function


	$("#tourImage").mouseover(function(){

		//To avoid changing to next site images before next button is clicked
		if(trackStop<currentStop && goAgain==true){
		$("#tourImage").css("background-image", "url(" + imagePath + hoverImages[trackStop] + ")");
		}

	});

	$("#tourImage").mouseleave(function(){
		//To avoid changing to next site images before next button is clicked
		if(trackStop<currentStop&& goAgain==true){
		$("#tourImage").css("background-image", "url(" + imagePath + imageOrder[trackStop] + ")");
		}
	});


	//generate random color
	function getRandomColor() {
  		var letters = '0123456789ABCDEF';
  		var color = '#';

  		for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  		}
  		
  		return color;
	}


});//document function


