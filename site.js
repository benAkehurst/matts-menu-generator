// Menu Creator - Built by Ben Akehurst Decemeber 2015/January 2017
// hi@benakehurt.online

console.log("Thanks for using - hi@benakehurst.online");

(function(){
	
	"use strict";

	// Here are all the Arrays with Menu Items
	var soupArray = ["Roasted Plum Tomoato \n& Basil", "Pea & Ham", "Curried Parsnip", "Leek & Potato", "Spiced Carrot \n& Red Lentil Broth", "Mushroom", "Broccoli & Stilton", "Tomato & Basil", "Pea & Mint", "Potato & Truffle", "Sweet Potato \n& Rosemary", "Roasted Plum Tomato \n& Red Pepper", "Garden Pea \n& Spinach", "Cauliflower & Cheddar", "Asian Chicken \n& Noodles", "Parsnip & Apple", "Minestrone", "Spinach & Confit Garlic", "Forest Mushroom \n& White Truffle", "Baby Corn & \nNoodle Miso", "Cream of Cauliflower with \nParmesan Croutes", "Brocolli & Cropwell Bishop Stilton", "Asian Chicken & Sweetcorn \nBroth"];
	var meatArray = ["Basil Pesto Chicken Supreme \nwith Parmesan Shavings & Toasted Pinenuts", "Individual Cottage Pie topped \nwith Thomas Hoe Red Leicester", "Crispy Sweet & Sour Pork \nwith Pineapple & Egg Fried Rice", "Lamb Moussaka with \nAubergine & Ricotta", "Salmon en Route \nwith Dill Veloute", "Beef Meatballs in rich \ntomato sauce wtih spaghetti", "Thyme, ale and honey glazed \nPork shoulder with \nblack pudding", "Hot Salt Beef on Rye \nbread with mustard & Pickle", "Chicken Kiev with \nGarlic and herb butter", "Salmon en Croute", "Chargrilled Chicken Supreme with \na creamy red pepper sauce", "Fruity Lamb Tagine \nwith Apricots & Dates", "Glazed Pork Belly with \nApple chutney & crisp crackling", "Chicken Fricassee with \nleeks & oyster mushrooms", "Salmon en croute with \nbeurre blanc", "Goldern Katsu Chicken with \nCurry Sauce & Pak Choi", "Pan fried Calves Liver with \nCandied Bacon & Onion Gravy", "Massaman Duck & Lycee Curry \nwith Kaffir Lime Leaves", "Breaded Turkey filled with \nBrie, Sage & Cranberries", "Panko Breaded Chicken \nBreast with Emmental & \nHickory Smoked BBQ Sauce", "Pan fried Calves Liver with \nRed Onion Marmarlade & Crisp Bacon", "Sage & Parmesan Crusted Pork \nChop, Wholegrain Mustard Sauce", "Chicken Vindaloo with Sambals, \nPoppadoms & Pilau Rice"];
	var carveryArray = ["Roast Free Range Chicken \nwith Bread Sauce & Gravy", "Garlic & Rosemary roast \nleg of lamb with jus", "28 day matured roast rib of \nbeef with Yorkshire pudding & Jus","Honey roast gammon \nwith parsley sauce", "Bourbon Glazed Pulled Pork, Wraps, Monteray \nJack Cheese & Spiced Apples"];
	var fishArray = ["Smoked Haddock Rarebit with \nSpinach & Poached Hens Egg", "Fried Red Snapper with Ginger, \nSpring Onion, Lime & Sweet Chilli Sauce", "Cod & Parsley Fishcakes \nwith Sauce Gribiche", "Catalan Fish Stew with \nChorizo & Garlic Toast", "Beer Battered haddock with \nlemon wedges & tartar sauce", "Cajun red mullet with \ngrilled peppers and onion", "Fish Pie", "Lemon garlic and parsley \nbaked Whiting", "Pan fried sea bream \nwith ginger, soy & spring onion", "Abroath haddock smokies topped with \n a poached egg & \nhollandaise sauce", "Pan fried seabass with \npuy lentils & red wine jus", "Cajun spiced salmon fillet with \nroasted cherry tomotoes & mint yoghurt", "Thai fishcakes with \ncucumber dipping sauce", "Traditional Fish Pie with Smoked \nHaddock, Prawns & Salmon", "Grilled Cajun Swordfish Steak with \nRed Pepper Gremolata \n& Grilled Lemon", "Steamed Paupiettes of Plaice filled \nwith a Hot Smoked Salmon \n& Crab mousse, Champagne Sauce", "Pan Fried Mackrel with a \nCaponata Dressing & Braised Chicory", "Roasted Hake with Asparagus \n& White Wine Fish Sauce", "Crisp Skin Seabass with \na Pea & Mint Salsa", "Lemongrass & Ginger Crab Cakes \nwith Sweet Chilli & Lime"];
	var vegetarianArray = ["Fired Mushroom Burgers with \nCaramelised onions & Roasted Garlic Mayonnaise", "Pumpkin & Mozzarella Arrancini", "Tomato Ragout", "Stuffed Peppers with \nPearl Barley & Feta", "Quornish Pasties \nwith Onion Gravy", "Pea, Mint & Lemon Risotto", "Shallot tartlet with \ngoat cheese and rocket", "Butternut squash, red onion \nand feta frittata", "Chilli 'Quorn' carne with \nsour cream and salsa", "Mixed Vegetables madras \ncurry with popadoms", "Oriental quorn chow mein \nwith soy noodles & sweet chilli", "Pumpkin & Parmesan risotto \nwith micro basil", "Spiced Aubergine Pie", "Cauliflower & Potato Curry \nwith poppadoms & Naan", "Stuffed Peppers with \nspiced rice", "Goldern Beetroot, Sorrel & Widnrush \nGoats Cheese Tart", "Broad Bean, Leek & Courgette \nFrittata, Balsamic Caramel", "Grilled Haloumi, Heritage Tomoato & Red \nPepper Brochettes serverd with \nPistou & Rocket Salad", "Spiced Falafels with Grilled \nFlatbreads, Babaghanoush \n& Spiced Yoghurt", "Butternut Squash & Spinach \nRisotto topped with Toasted Seeds", "Spanish Tortilla with a Red \nPepper Coulis & Rocket Salad", "Goats Cheese, Pear & \nChice Quiche", "Lentil Hot Pot with \nHerb Dumplings", "Baked Aubergine Filled with \nPepponata & Mozzarella", "Beetroot & Chickpea Fritters \nwith a Safron Yoghurt"];
	var potatoesArray = ["Sauté New Potatoes", "Roast Potatoes", "Chunky Chips", "Sweet Potato Wedges", "Boulangere", "New Potatoes", "Creamy Mash", "Lyonnaise Potato", "Braised Rice", "Cous Cous", "Rustic Fondant", "Garlic Mash", "Braised Rice", "Lemon Rice", "Boiled Potatoes", "Dauphinoise"];
	var vegetablesArray = ["French Beans", "Vichy Carrots", "Warm Bean Salad", "Braised Peas", "Savoy Cabbage", "Cauliflower Cheese", "Sauté Mange Tout", "Roasted Med Veg", "Buttered Sweetcorn", "Roasted Roots", "Broccoli", "Braised Red Cabbage", "Garden & Mushy Peas", "Baked Beans", "Vegetable Medley", "Crushed Celeriac", "Braised Leeks", "Cauliflower", "Grilled corn on the cob, roasted sweet potato and squash", "Roasted Carrot & Parsnips", "Slow roasted plum tomatoes", "Peas", "Wilted Sweetheart Cabbage", "Peas with Feta \n& Mint", "Baked Sweet Potato \n& Red Onion", "Courgettes with Lemon", "Steamed Brocolli", "Rustic Carrots", "Sweetcorn With Baby \nOnions", "Sugar Snaps", "Peas with Cherry Tomatoes \n& Baby Gem", "Sauté Courgettes", "Cauliflower with a Herb \n& Quinoa Crust", "French Beans with \nCrispy Shallots", "Garlic Portabello Mushrooms", "Garden Mushy Peas", "Baked Field Mushrooms", "Braised Leeks", "Maple Glazed Carrots", "Ratatouille", "Spring Greens", ];

	// get the year for month in table - calls on page load
	
	getMonthYear();

	// From Here we start to generate menus using jQuery

	// Self invoking jQuery function that loads after the window
	$(function(){

		$("#buttonGenerateRandomWeeklyMenu").click(function(){

		var soup = shuffleArray(soupArray);

		$("#soupMonday").html(soup[0]);
		$("#soupTuesday").html(soup[1]);
		$("#soupWednesday").html(soup[2]);
		$("#soupThursday").html(soup[3]);
		$("#soupFriday").html(soup[4]);

		var meat = shuffleArray(meatArray);

		$("#meatMonday").html(meat[0]);
		$("#meatTuesday").html(meat[1]);
		$("#meatWednesday").html(meat[2]);
		$("#meatThursday").html(meat[3]);
		$("#meatFriday").html(meat[4]);

		var carvery = shuffleArray(carveryArray);

		$("#carveryTuesday").html(carvery[0]);
		$("#carveryWednesday").html(carvery[1]);
		$("#carveryThursday").html(carvery[2]);
		$("#carveryFriday").html(carvery[3]);

		var fish = shuffleArray(fishArray);

		$("#fishMonday").html(fish[0]);
		$("#fishTuesday").html(fish[1]);
		$("#fishWednesday").html(fish[2]);
		$("#fishThursday").html(fish[3]);
		$("#fishFriday").html(fish[4]);

		var vegetarian = shuffleArray(vegetarianArray);

		$("#vegetarianMonday").html(vegetarian[0]);
		$("#vegetarianTuesday").html(vegetarian[1]);
		$("#vegetarianWednesday").html(vegetarian[2]);
		$("#vegetarianThursday").html(vegetarian[3]);
		$("#vegetarianFriday").html(vegetarian[4]);

		var potatoes1 = shuffleArray(potatoesArray);

		$("#potatoesMonday1").html(potatoes1[0]);
		$("#potatoesTuesday1").html(potatoes1[1]);
		$("#potatoesWednesday1").html(potatoes1[2]);
		$("#potatoesThursday1").html(potatoes1[3]);
		$("#potatoesFriday1").html(potatoes1[4]);

		var potatoes2 = shuffleArray(potatoesArray);

		$("#potatoesMonday2").html(potatoes2[0]);
		$("#potatoesTuesday2").html(potatoes2[1]);
		$("#potatoesWednesday2").html(potatoes2[2]);
		$("#potatoesThursday2").html(potatoes2[3]);
		$("#potatoesFriday2").html(potatoes2[4]);

		var vegetables1 = shuffleArray(vegetablesArray);

		$("#vegetablesMonday1").html(vegetables1[0]);
		$("#vegetablesTuesday1").html(vegetables1[1]);
		$("#vegetablesWednesday1").html(vegetables1[2]);
		$("#vegetablesThursday1").html(vegetables1[3]);
		$("#vegetablesFriday1").html(vegetables1[4]);

		var vegetables2 = shuffleArray(vegetablesArray);

		$("#vegetablesMonday2").html(vegetables2[0]);
		$("#vegetablesTuesday2").html(vegetables2[1]);
		$("#vegetablesWednesday2").html(vegetables2[2]);
		$("#vegetablesThursday2").html(vegetables2[3]);
		$("#vegetablesFriday2").html(vegetables2[4]);

		var vegetables3 = shuffleArray(vegetablesArray);

		$("#vegetablesMonday3").html(vegetables3[0]);
		$("#vegetablesTuesday3").html(vegetables3[1]);
		$("#vegetablesWednesday3").html(vegetables3[2]);
		$("#vegetablesThursday3").html(vegetables3[3]);
		$("#vegetablesFriday3").html(vegetables3[4]);

		//End of Generate Random Menu

		// End of Random Menu Click Function	
		});


		//Here the individual row refesh options begin

		// Refresh only the soup row
		$("#refreshSoup").click(function(){
			var soup = shuffleArray(soupArray);
			$("#soupMonday").html(soup[0]);
			$("#soupTuesday").html(soup[1]);
			$("#soupWednesday").html(soup[2]);
			$("#soupThursday").html(soup[3]);
			$("#soupFriday").html(soup[4]);
			});

		// Mouse enter show Refresh for soup
		$("#tdSoup").hover(function(){
        	$(".refreshSoup").show();
    	},
    	function(){
        	$(".refreshSoup").hide();
    	});

		// Refresh only the meat row
		$("#refreshMeat").click(function(){
			var meat = shuffleArray(meatArray);
			$("#meatMonday").html(meat[0]);
			$("#meatTuesday").html(meat[1]);
			$("#meatWednesday").html(meat[2]);
			$("#meatThursday").html(meat[3]);
			$("#meatFriday").html(meat[4]);
		});

		// Mouse enter show Refresh for meat
		$("#tdMeat").hover(function(){
        	$(".refreshMeat").show();
    	},
    	function(){
        	$(".refreshMeat").hide();
    	});

    	// Refresh only the Carvery row
		$("#refreshCarvery").click(function(){
			var carvery = shuffleArray(carveryArray);
			$("#carveryTuesday").html(carvery[0]);
			$("#carveryWednesday").html(carvery[1]);
			$("#carveryThursday").html(carvery[2]);
			$("#carveryFriday").html(carvery[3]);
		});

		// Mouse enter show Refresh for carvery
		$("#tdCarvery").hover(function(){
        	$(".refreshCarvery").show();
    	},
    	function(){
        	$(".refreshCarvery").hide();
    	});

    	// Refresh only the Fish row
		$("#refreshFish").click(function(){
			var fish = shuffleArray(fishArray);
			$("#fishMonday").html(fish[0]);
			$("#fishTuesday").html(fish[1]);
			$("#fishWednesday").html(fish[2]);
			$("#fishThursday").html(fish[3]);
			$("#fishFriday").html(fish[4]);
		});

		// Mouse enter show Refresh for Fish
		$("#tdFish").hover(function(){
        	$(".refreshFish").show();
    	},
    	function(){
        	$(".refreshFish").hide();
    	});

    	// Refresh only the Vegetarian row
		$("#refreshVegetarian").click(function(){
			var vegetarian = shuffleArray(vegetarianArray);
			$("#vegetarianMonday").html(vegetarian[0]);
			$("#vegetarianTuesday").html(vegetarian[1]);
			$("#vegetarianWednesday").html(vegetarian[2]);
			$("#fvegetarianThursday").html(vegetarian[3]);
			$("#vegetarianFriday").html(vegetarian[4]);
		});

		// Mouse enter show Refresh for Vegetarian
		$("#tdVegetarian").hover(function(){
        	$(".refreshVegetarian").show();
    	},
    	function(){
        	$(".refreshVegetarian").hide();
    	});

    	// Refresh only the Potatoes1 row
		$("#refreshPotatoes1").click(function(){
			var potatoes = shuffleArray(potatoesArray);
			$("#potatoesMonday1").html(potatoes[0]);
			$("#potatoesTuesday1").html(potatoes[1]);
			$("#potatoesWednesday1").html(potatoes[2]);
			$("#potatoesThursday1").html(potatoes[3]);
			$("#potatoesFriday1").html(potatoes[4]);
		});

		// Mouse enter show Refresh for Potatoes1
		$("#tdPotatoes1").hover(function(){
        	$(".refreshPotatoes1").show();
    	},
    	function(){
        	$(".refreshPotatoes1").hide();
    	});

    	// Refresh only the Potatoes2 row
		$("#refreshPotatoes2").click(function(){
			var potatoes = shuffleArray(potatoesArray);
			$("#potatoesMonday2").html(potatoes[0]);
			$("#potatoesTuesday2").html(potatoes[1]);
			$("#potatoesWednesday2").html(potatoes[2]);
			$("#potatoesThursday2").html(potatoes[3]);
			$("#potatoesFriday2").html(potatoes[4]);
		});

		// Mouse enter show Refresh for Potatoes1
		$("#tdPotatoes2").hover(function(){
        	$(".refreshPotatoes2").show();
    	},
    	function(){
        	$(".refreshPotatoes2").hide();
    	});

    	// Refresh only the Vegetables1 row
		$("#refreshVegetables1").click(function(){
			var vegetables = shuffleArray(vegetablesArray);
			$("#vegetablesMonday1").html(vegetables[0]);
			$("#vegetablesTuesday1").html(vegetables[1]);
			$("#vegetablesWednesday1").html(vegetables[2]);
			$("#vegetablesThursday1").html(vegetables[3]);
			$("#vegetablesFriday1").html(vegetables[4]);
		});

		// Mouse enter show Refresh for Vegetables1
		$("#tdVegetables1").hover(function(){
        	$(".refreshVegetables1").show();
    	},
    	function(){
        	$(".refreshVegetables1").hide();
    	});

    	// Refresh only the Vegetables2 row
		$("#refreshVegetables2").click(function(){
			var vegetables = shuffleArray(vegetablesArray);
			$("#vegetablesMonday2").html(vegetables[0]);
			$("#vegetablesTuesday2").html(vegetables[1]);
			$("#vegetablesWednesday2").html(vegetables[2]);
			$("#vegetablesThursday2").html(vegetables[3]);
			$("#vegetablesFriday2").html(vegetables[4]);
		});

		// Mouse enter show Refresh for Vegetables2
		$("#tdVegetables2").hover(function(){
        	$(".refreshVegetables2").show();
    	},
    	function(){
        	$(".refreshVegetables2").hide();
    	});

    	// Refresh only the Vegetables1 row
		$("#refreshVegetables3").click(function(){
			var vegetables = shuffleArray(vegetablesArray);
			$("#vegetablesMonday3").html(vegetables[0]);
			$("#vegetablesTuesday3").html(vegetables[1]);
			$("#vegetablesWednesday3").html(vegetables[2]);
			$("#vegetablesThursday3").html(vegetables[3]);
			$("#vegetablesFriday3").html(vegetables[4]);
		});

		// Mouse enter show Refresh for Vegetables1
		$("#tdVegetables3").hover(function(){
        	$(".refreshVegetables3").show();
    	},
    	function(){
        	$(".refreshVegetables3").hide();
    	});


		// This command "hides" the buttons for prinitng
		$("#buttonHide").click(function(){
			$(this).css("opacity","0");
			$("#buttonGenerateRandomWeeklyMenu").css("opacity","0");
		});


		// When the mouse goes into a td with class .deleteable, a delete icon will show
		$(".deleteable").mouseenter(function(){
			$(this).css({"background-image":"url(assets/images/delete.png)", "background-repeat":"no-repeat", "background-size": "20px 20px"});
		});

		// When the mouse leaves a td with class .deleteable, a delete icon will disappear
		$(".deleteable").mouseleave(function(){
			$(this).css("background-image","");
		});

	// End of jQuery Self Invoked
	});

	// Functions:

	function getMonthYear() {
	    
	    var month = new Array();
	    month[0] = "January";
	    month[1] = "February";
	    month[2] = "March";
	    month[3] = "April";
	    month[4] = "May";
	    month[5] = "June";
	    month[6] = "July";
	    month[7] = "August";
	    month[8] = "September";
	    month[9] = "October";
	    month[10] = "November";
	    month[11] = "December";

	    var d = new Date();
	    var n = month[d.getMonth()];

	    var dateObj = new Date();
		var year = dateObj.getUTCFullYear();
		var monthYear = n + " " + year;

	    var spanMonth = document.getElementById('spanMonth');
		spanMonth.innerHTML = monthYear;   
	}

	function shuffleArray(array) {
    	for (var i = array.length - 1; i > 0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));
        	
        	var temp = array[i];
        	array[i] = array[j];
       		array[j] = temp;
    	}
    	
    	return array;
	}

// End of Self Invoked JS 
})();