// My Scripts
$(document).ready(function(){
	
$( "#page1contents" ).fadeOut(0);
$( "#page2contents" ).fadeOut(0);
$( "#withthismany" ).fadeOut(0);
$( "#withthismanypeople" ).fadeOut(0);
$( "#page3contents" ).fadeOut(0);
$( "#page4contents" ).fadeOut(0);
	$( "#page4Idrive" ).fadeOut(0);
$( "#page5contents" ).fadeOut(0);
$( "#page6contents" ).fadeOut(0);
$( "#page0contents" ).fadeOut(0);
$( "#buttonretake" ).fadeOut(0);

$( "#progressbar" ).fadeOut(0);
$( "#questionnumber" ).fadeOut(0);
$( "#navbuttons" ).fadeOut(0);


//START BUTTON


$("#starticon").click(function () {
	$( "#progressbar" ).delay(1000).fadeIn(1500);
$( "#questionnumber" ).delay(1000).fadeIn(1500);
$("#starticon").fadeOut(400);
$( "#frontcontents" ).fadeOut(400);
  $( "#page1contents" ).delay(1000).fadeIn(1500);
  $( "#navbuttons" ).delay(1000).fadeIn(1500);

  
    $("#rightillustration img:nth-child(4)").animate({ 
        right: "+=100%",
      }, 1400 );
  $("#rightillustration0 img:nth-child(3), #rightillustration img:nth-child(3), #rightillustration2 img:nth-child(3), #rightillustration3 img:nth-child(3), #rightillustration4 img:nth-child(3), #rightillustration5 img:nth-child(3), #rightillustration6 img:nth-child(3)").animate({ 
        right: "+=100%",
      }, 1600 );
  $("#rightillustration0 img:nth-child(2), #rightillustration img:nth-child(2), #rightillustration2 img:nth-child(2), #rightillustration3 img:nth-child(2), #rightillustration4 img:nth-child(2), #rightillustration5 img:nth-child(2), #rightillustration6 img:nth-child(2)").animate({ 
        right: "+=100%",
      }, 1800 );
  $("#rightillustration0 img:nth-child(1), #rightillustration img:nth-child(1), #rightillustration2 img:nth-child(1), #rightillustration3 img:nth-child(1), #rightillustration4 img:nth-child(1), #rightillustration5 img:nth-child(1), #rightillustration6 img:nth-child(1)").animate({ 
        right: "+=100%",
      }, 2000 );
	  
  $("#leftillustration0 img:nth-child(3), #leftillustration img:nth-child(3), #leftillustration2 img:nth-child(3), #leftillustration3 img:nth-child(3), #leftillustration4 img:nth-child(3), #leftillustration5 img:nth-child(3), #leftillustration6 img:nth-child(3)").animate({ 
        left: "-=100%",
      }, 1600 );
  $("#leftillustration0 img:nth-child(2), #leftillustration img:nth-child(2), #leftillustration2 img:nth-child(2), #leftillustration3 img:nth-child(2), #leftillustration4 img:nth-child(2), #leftillustration5 img:nth-child(2), #leftillustration6 img:nth-child(2)").animate({ 
        left: "-=100%",
      }, 1800 );
  $("#leftillustration0 img:nth-child(1), #leftillustration img:nth-child(1), #leftillustration2 img:nth-child(1), #leftillustration3 img:nth-child(1), #leftillustration4 img:nth-child(1), #leftillustration5 img:nth-child(1), #leftillustration6 img:nth-child(1)").animate({ 
        left: "-=100%",
      }, 2000 );
	  
	  
	  	  	  $("#miniprogress").animate({ 
        width: "+=14.32%",
      }, 1400 );	  
});







		var doughnutData5 = [{
					value: 27,
					color:"#002733"
				}, {
					value : 51,
					color: "#17888D"
				}, {
					value : 22,
					color : "#F4A844"
				} 
				];



  
  	new Chart(document.getElementById("canvas5").getContext("2d")).Doughnut(doughnutData5);


$("#resultskeybuttons0 div:nth-child(1)").hover(function () {
	  $( "#resultsbuttonsubheads0 div:nth-child(1)" ).slideFadeToggle()
});


$("#resultskeybuttons0 div:nth-child(2)").hover(function () {
	  $( "#resultsbuttonsubheads0 div:nth-child(2)" ).slideFadeToggle()
});

$("#resultskeybuttons0 div:nth-child(3)").hover(function () {
	  $( "#resultsbuttonsubheads0 div:nth-child(3)" ).slideFadeToggle()
});


$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, 250, easing, callback);
};










//BUTTONLEFT
$("#buttonleft").click(function () {

if($("#currentquestionnumber").text() == '1') {
  $( "#page1contents" ).fadeOut(400);
	$( "#progressbar" ).fadeOut(400);
	$( "#questionnumber" ).fadeOut(400);
	$( "#navbuttons" ).fadeOut(400);
  $( "#frontcontents" ).delay(1000).fadeIn(1500);
  $( "#starticon" ).delay(1000).fadeIn(1500);
}
if($("#currentquestionnumber").text() == '2') {
  $( "#page2contents" ).fadeOut(400);
  $( "#page1contents" ).delay(1000).fadeIn(1500);
}
if($("#currentquestionnumber").text() == '3') {
  $( "#page3contents" ).fadeOut(400);
  $( "#page2contents" ).delay(1000).fadeIn(1500);
}
if($("#currentquestionnumber").text() == '4') {
  $( "#page4contents" ).fadeOut(400);
  $( "#page3contents" ).delay(1000).fadeIn(1500);
}
  if($("#currentquestionnumber").text() == '5') {
  $( "#page5contents" ).fadeOut(400);
  $( "#page4contents" ).delay(1000).fadeIn(1500);
}
  if($("#currentquestionnumber").text() == '6') {
  $( "#page6contents" ).fadeOut(400);
  $( "#page5contents" ).delay(1000).fadeIn(1500);
}
  
  
  $("#rightillustration img:nth-child(4)").animate({ 
        right: "-=100%",
      }, 1400 );
  $("#rightillustration0 img:nth-child(3), #rightillustration img:nth-child(3), #rightillustration2 img:nth-child(3), #rightillustration3 img:nth-child(3), #rightillustration4 img:nth-child(3), #rightillustration5 img:nth-child(3), #rightillustration6 img:nth-child(3)").animate({ 
        right: "-=100%",
      }, 1600 );
  $("#rightillustration0 img:nth-child(2), #rightillustration img:nth-child(2), #rightillustration2 img:nth-child(2), #rightillustration3 img:nth-child(2), #rightillustration4 img:nth-child(2), #rightillustration5 img:nth-child(2), #rightillustration6 img:nth-child(2)").animate({ 
        right: "-=100%",
      }, 1800 );
  $("#rightillustration0 img:nth-child(1), #rightillustration img:nth-child(1), #rightillustration2 img:nth-child(1), #rightillustration3 img:nth-child(1), #rightillustration4 img:nth-child(1), #rightillustration5 img:nth-child(1), #rightillustration6 img:nth-child(1)").animate({ 
        right: "-=100%",
      }, 2000 );


  $("#leftillustration0 img:nth-child(3), #leftillustration img:nth-child(3), #leftillustration2 img:nth-child(3), #leftillustration3 img:nth-child(3), #leftillustration4 img:nth-child(3), #leftillustration5 img:nth-child(3), #leftillustration6 img:nth-child(3)").animate({ 
        left: "+=100%",
      }, 1600 );
  $("#leftillustration0 img:nth-child(2), #leftillustration img:nth-child(2), #leftillustration2 img:nth-child(2), #leftillustration3 img:nth-child(2), #leftillustration4 img:nth-child(2), #leftillustration5 img:nth-child(2), #leftillustration6 img:nth-child(2)").animate({ 
        left: "+=100%",
      }, 1800 );
  $("#leftillustration0 img:nth-child(1), #leftillustration img:nth-child(1), #leftillustration2 img:nth-child(1), #leftillustration3 img:nth-child(1), #leftillustration4 img:nth-child(1), #leftillustration5 img:nth-child(1), #leftillustration6 img:nth-child(1)").animate({ 
        left: "+=100%",
      }, 2000 );


	  $("#miniprogress").animate({ 
        width: "-=14.32%",
      }, 1400 );
});








$("#buttonright").click(function () {



$("#buttonright").removeClass( "navigationopacity" );

	
if($("#currentquestionnumber").text() == '0') {
  $( "#page1contents" ).delay(1000).fadeIn(1500);
}

if($("#currentquestionnumber").text() == '1') {
  $( "#page1contents" ).fadeOut(400);
  $( "#page2contents" ).delay(1000).fadeIn(1500);

}

if($("#currentquestionnumber").text() == '2') {
  $( "#page2contents" ).fadeOut(400);
  $( "#page3contents" ).delay(1000).fadeIn(1500);
  
}

if($("#currentquestionnumber").text() == '3') {
  $( "#page3contents" ).fadeOut(400);
  $( "#page4contents" ).delay(1000).fadeIn(1500);
}


if($("#currentquestionnumber").text() == '4') {
  $( "#page4contents" ).fadeOut(400);
  $( "#page5contents" ).delay(1000).fadeIn(1500);
}

if($("#currentquestionnumber").text() == '5') {
  $( "#page5contents" ).fadeOut(400);
  $( "#page6contents" ).delay(1000).fadeIn(1500);
}

if($("#currentquestionnumber").text() == '6') {
  $( "#page6contents" ).fadeOut(400);
  $( "#navbuttons" ).fadeOut(400);
  $( "#page0contents" ).delay(1000).fadeIn(1500);
  $( "#buttonretake" ).delay(1000).fadeIn(1500);
  setTimeout(function (){
  	new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(doughnutData1);
  }, 1500);
  setTimeout(function (){
	new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData2);
  }, 1500);
  setTimeout(function (){
	new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData3);
   }, 1500);
   
   
   
   
  /*HOUSETYPES VAR*/
if($("#page2icon1").hasClass('page2iconsopacity')) {
   var housetype = 2.25;
};
if($("#page2icon2").hasClass('page2iconsopacity')) {
   var housetype = 2.47;
};
if($("#page2icon3").hasClass('page2iconsopacity')) {
   var housetype = 1.2;
};
if($("#page2icon4").hasClass('page2iconsopacity')) {
   var housetype = 2.11;
};

/*BEDROOM NUMBER VAR*/
if($("#bedroomform").text() == '0') {
	var bedrooms = 1;
};

if($("#bedroomform").text() == '1') {
	var bedrooms = 1;
};
   if($("#bedroomform").text() == '2') {
	var bedrooms = 1.104;
};
if($("#bedroomform").text() == '3') {
	var bedrooms = 1.425;
};
if($("#bedroomform").text() == '4') {
	var bedrooms = 1.619;
};
if($("#bedroomform").text() == '5') {
	var bedrooms = 1.776;
};
if($("#bedroomform").text() == '6') {
	var bedrooms = 1.776;
};
if($("#bedroomform").text() == '7') {
	var bedrooms = 1.776;
};
if($("#bedroomform").text() == '8') {
	var bedrooms = 1.776;
};
if($("#bedroomform").text() == '9') {
	var bedrooms = 1.776;
};

/*STATE NUMBER VAR*/
if($("#statetext").text() == 'AL') {
	var state = 1.06;
};
if($("#statetext").text() == 'AK') {
	var state = 1.35;
};
if($("#statetext").text() == 'AZ') {
	var state = .995;
};
if($("#statetext").text() == 'AR') {
	var state = 1.025;
};
if($("#statetext").text() == 'CA') {
	var state = .58;
};
if($("#statetext").text() == 'CO') {
	var state = 1.755;
};
if($("#statetext").text() == 'CT') {
	var state = 1.02;
};
if($("#statetext").text() == 'DE') {
	var state = 1.575;
};
if($("#statetext").text() == 'DC') {
	var state = 1.24;
};
if($("#statetext").text() == 'FL') {
	var state = 1.125;
};
if($("#statetext").text() == 'GA') {
	var state = 1.075;
};
if($("#statetext").text() == 'HI') {
	var state = 1.29;
};
if($("#statetext").text() == 'ID') {
	var state = .3;
};
if($("#statetext").text() == 'IL') {
	var state = 1.215;
};
if($("#statetext").text() == 'IN') {
	var state = 1.85;
};
if($("#statetext").text() == 'IA') {
	var state = 1.67;
};
if($("#statetext").text() == 'KS') {
	var state = 1.48;
};
if($("#statetext").text() == 'KY') {
	var state = 1.69;
};
if($("#statetext").text() == 'LA') {
	var state = .99;
};
if($("#statetext").text() == 'ME') {
	var state = .915;
};
if($("#statetext").text() == 'MD') {
	var state = 1.24;
};
if($("#statetext").text() == 'MA') {
	var state = 1.265;
};
if($("#statetext").text() == 'MI') {
	var state = 1.455;
};
if($("#statetext").text() == 'MN') {
	var state = 1.455;
};
if($("#statetext").text() == 'MS') {
	var state = 1.06;
};
if($("#statetext").text() == 'MO') {
	var state = 1.45;
};
if($("#statetext").text() == 'MT') {
	var state = 1.35;
};
if($("#statetext").text() == 'NE') {
	var state = 1.375;
};
if($("#statetext").text() == 'NV') {
	var state = 1.455;
};
if($("#statetext").text() == 'NH') {
	var state = .795;
};
if($("#statetext").text() == 'NJ') {
	var state = .765;
};
if($("#statetext").text() == 'NM') {
	var state = 1.86;
};
if($("#statetext").text() == 'NY') {
	var state = .945;
};
if($("#statetext").text() == 'NC') {
	var state = 1.01;
};
if($("#statetext").text() == 'ND') {
	var state = 1.97;
};
if($("#statetext").text() == 'OH') {
	var state = 1.67;
};
if($("#statetext").text() == 'OK') {
	var state = 1.315;
};
if($("#statetext").text() == 'OR') {
	var state = .515;
};
if($("#statetext").text() == 'PA') {
	var state = 1.265;
};
if($("#statetext").text() == 'RI') {
	var state = 1.13;
};
if($("#statetext").text() == 'SC') {
	var state = .71;
};
if($("#statetext").text() == 'SD') {
	var state = .9;
};
if($("#statetext").text() == 'TN') {
	var state = 1.155;
};
if($("#statetext").text() == 'TX') {
	var state = 1.205;
};
if($("#statetext").text() == 'UT') {
	var state = 1.78;
};
if($("#statetext").text() == 'VT') {
	var state = .545;
};
if($("#statetext").text() == 'VA') {
	var state = 1.075;
};
if($("#statetext").text() == 'WA') {
	var state = .5;
};
if($("#statetext").text() == 'WV') {
	var state = 1.695;
};
if($("#statetext").text() == 'WI') {
	var state = 1.54;
};
if($("#statetext").text() == 'WY') {
	var state = 1.885;
};




/*PEOPLE NUMBER VAR*/
if($("#peopleform").text() == '1') {
	var people = 1;
};
   if($("#peopleform").text() == '2') {
	var people = .5;
};
if($("#peopleform").text() == '3') {
	var people = .3333;
};
if($("#peopleform").text() == '4') {
	var people = .25;
};
if($("#peopleform").text() == '5') {
	var people = .2;
};
if($("#peopleform").text() == '6') {
	var people = .1666;
};
if($("#peopleform").text() == '7') {
	var people = .1428;
};
if($("#peopleform").text() == '8') {
	var people = .125;
};
if($("#peopleform").text() == '9') {
	var people = .111;
};


/*HEAT AND COOL VAR*/
if($("#page3icons1 div:nth-child(1)").hasClass('page2iconsopacity')) {
   var heatandcool = -.4;
};
if($("#page3icons1 div:nth-child(2)").hasClass('page2iconsopacity')) {
   var heatandcool = 0;
};
if($("#page3icons1 div:nth-child(3)").hasClass('page2iconsopacity')) {
   var heatandcool = .3;
};

/*EFFICIENT LIGHTING VAR*/
if($("#page3icons2 div:nth-child(1)").hasClass('page2iconsopacity')) {
   var lighting = -.168;
};
if($("#page3icons2 div:nth-child(2)").hasClass('page2iconsopacity')) {
   var lighting = -.082;
};
if($("#page3icons2 div:nth-child(3)").hasClass('page2iconsopacity')) {
   var lighting = 0;
};


/*ELECTRONICS VAR*/
if($("#page3icons3 div:nth-child(1)").hasClass('page2iconsopacity')) {
   var electronics = -.365;
};
if($("#page3icons3 div:nth-child(2)").hasClass('page2iconsopacity')) {
   var electronics = 0;
};
if($("#page3icons3 div:nth-child(3)").hasClass('page2iconsopacity')) {
   var electronics = .365;
};


/*HOT WATER VAR*/
if($("#page3icons4 div:nth-child(1)").hasClass('page2iconsopacity')) {
   var hotwater = -.237;
};
if($("#page3icons4 div:nth-child(2)").hasClass('page2iconsopacity')) {
   var hotwater = -.115;
};
if($("#page3icons4 div:nth-child(3)").hasClass('page2iconsopacity')) {
   var hotwater = 0;
};




/*CAR TYPE VAR*/
if($("#page4icongroup div:nth-child(1) img").hasClass('page4iconsopacity')) {
   var cartype = 0;
   var carfrequency = 0;
};

if($("#page4icongroup div:nth-child(2) img").hasClass('page4iconsopacity')) {
   var cartype = 1;
};

if($("#page4icongroup div:nth-child(3) img").hasClass('page4iconsopacity')) {
   var cartype = 1.46;
};

if($("#page4icongroup div:nth-child(4) img").hasClass('page4iconsopacity')) {
   var cartype = 1.69;
};

if($("#page4icongroup div:nth-child(5) img").hasClass('page4iconsopacity')) {
   var cartype = 2.02;
};


/*CAR FREQUENCY VAR*/
if($("#page4icons1 div:nth-child(1)").hasClass('page2iconsopacity')) {
   var carfrequency = .667;
};

if($("#page4icons1 div:nth-child(2)").hasClass('page2iconsopacity')) {
   var carfrequency = 1;
};

if($("#page4icons1 div:nth-child(3)").hasClass('page2iconsopacity')) {
   var carfrequency = 1.5;
};


/*SHORT FLYING FREQUENCY VAR*/
if($("#airplaneform").text() == '0') {
	var shortflights = 0;
};
if($("#airplaneform").text() == '1') {
	var shortflights = 1;
};
if($("#airplaneform").text() == '2') {
	var shortflights = 2;
};
if($("#airplaneform").text() == '3') {
	var shortflights = 3;
};
if($("#airplaneform").text() == '4') {
	var shortflights = 4;
};
if($("#airplaneform").text() == '5') {
	var shortflights = 5;
};
if($("#airplaneform").text() == '6') {
	var shortflights = 6;
};
if($("#airplaneform").text() == '7') {
	var shortflights = 7;
};
if($("#airplaneform").text() == '8') {
	var shortflights = 8;
};
if($("#airplaneform").text() == '9') {
	var shortflights = 9;
};


/*LONG FLYING FREQUENCY VAR*/
if($("#airplaneform2").text() == '0') {
	var longflights = 0;
};
if($("#airplaneform2").text() == '1') {
	var longflights = 1;
};
if($("#airplaneform2").text() == '2') {
	var longflights = 2;
};
if($("#airplaneform2").text() == '3') {
	var longflights = 3;
};
if($("#airplaneform2").text() == '4') {
	var longflights = 4;
};
if($("#airplaneform2").text() == '5') {
	var longflights = 5;
};
if($("#airplaneform2").text() == '6') {
	var longflights = 6;
};
if($("#airplaneform2").text() == '7') {
	var longflights = 7;
};
if($("#airplaneform2").text() == '8') {
	var longflights = 8;
};
if($("#airplaneform2").text() == '9') {
	var longflights = 9;
};




/*MEAT*/
if($("#page6icons1 div:nth-child(1)").hasClass('page2iconsopacity')) {
   var meat = 1.8;
   var meatmultiplyer = 6;
};
if($("#page6icons1 div:nth-child(2)").hasClass('page2iconsopacity')) {
   var meat = 0;
   var meatmultiplyer = 4;
};
if($("#page6icons1 div:nth-child(3)").hasClass('page2iconsopacity')) {
   var meat = -2.6;
   var meatmultiplyer = 2;
};
if($("#page6icons1 div:nth-child(4)").hasClass('page2iconsopacity')) {
   var meat = -3.2;
   var meatmultiplyer = 1;
};

/*ORGANIC*/
if($("#page6icons2 div:nth-child(1)").hasClass('page2iconsopacity')) {
   var organic = -.3;
};
if($("#page6icons2 div:nth-child(2)").hasClass('page2iconsopacity')) {
   var organic = -.15;
};
if($("#page6icons2 div:nth-child(3)").hasClass('page2iconsopacity')) {
   var organic = 0;
};

/*RECYCLE*/
if($("#page6icons3 div:nth-child(1)").hasClass('page2iconsopacity')) {
   var recycle = -.5;
};
if($("#page6icons3 div:nth-child(2)").hasClass('page2iconsopacity')) {
   var recycle = -.2;
};
if($("#page6icons3 div:nth-child(3)").hasClass('page2iconsopacity')) {
   var recycle = 0;
};

/*COMPOST*/
if($("#page6icons4 div:nth-child(1)").hasClass('page2iconsopacity')) {
   var compost = -.3;
};
if($("#page6icons4 div:nth-child(2)").hasClass('page2iconsopacity')) {
   var compost = -.1;
};
if($("#page6icons4 div:nth-child(3)").hasClass('page2iconsopacity')) {
   var compost = 0;
};


/* GENERATES TEXT NUMBER*/
$('#generatednumber').text(Math.round( (10 * ((8.5 * housetype * bedrooms * state * people) + (heatandcool * housetype * bedrooms * state * people * 4) + (lighting * housetype * bedrooms * state * people * 4)  + (hotwater * housetype * bedrooms * state * people * 4) + (5.8 * cartype * carfrequency) + (shortflights * .4) + (longflights * 2.2) + (1.2 + recycle + compost) + (4.1 + meat + (meatmultiplyer * organic))) ))/10 );


/* GENERATES PARAGRAPH NUMBER*/
$('#emissionnumber').text(Math.round( (10 * ((8.5 * housetype * bedrooms * state * people) + (heatandcool * housetype * bedrooms * state * people * 4) + (lighting * housetype * bedrooms * state * people * 4)  + (hotwater * housetype * bedrooms * state * people * 4) + (5.8 * cartype * carfrequency) + (shortflights * .4) + (longflights * 2.2) + (1.2 + recycle + compost) + (4.1 + meat + (meatmultiplyer * organic))) ))/10 );


/*GENERATES ABOVE OR BELOW*/
if($("#emissionnumber").text() > 27) {
	$('#beloworabove').text('above the U.S. national average');
};

if($("#emissionnumber").text() < 27) {
	$('#beloworabove').text('below the U.S. national average');
};




		
   /*US AVERAGE*/
	var doughnutData1 = [
				{
					value: 9.936,
					color:"#CD4A45"
				},
				{
					value : 11.745,
					color : "#F4A844"
				},
				{
					value : 1.188,
					color : "#6BAB79"
				},
				{
					value : 4.131,
					color : "#17888D"
				},
			];
	
	
	
$('#homeenergynumber').text((Math.round(((8.5 * housetype * bedrooms * state * people) + (heatandcool * housetype * bedrooms * state * people * 4) + (lighting * housetype * bedrooms * state * people * 4)  + (hotwater * housetype * bedrooms * state * people * 4)) *10))/10);

$('#drivingandflyingnumber').text((Math.round(((5.8 * cartype * carfrequency) + (shortflights * .4) + (longflights * 2.2)) *10))/10);

$('#recyclingandwastenumber').text((Math.round(((1.2 + recycle + compost)) *10))/10);

$('#foodanddietnumber').text((Math.round(((4.1 + meat + (meatmultiplyer * organic))) *10))/10);



	
	
	
			

/*USER*/
		var doughnutData2 = [
				{
					value: (8.5 * housetype * bedrooms * state * people) + (heatandcool * housetype * bedrooms * state * people * 4) + (lighting * housetype * bedrooms * state * people * 4)  + (hotwater * housetype * bedrooms * state * people * 4),
					color:"#CD4A45"
				},
				{
					value : (5.8 * cartype * carfrequency) + (shortflights * .4) + (longflights * 2.2),
					color : "#F4A844"
				},
				{
					value : (1.2 + recycle + compost),
					color : "#6BAB79"
				},
				{
					value : (4.1 + meat + (meatmultiplyer * organic)),
					color : "#17888D"
				},

				
			];
/*WORLD AVERAGE*/
		var doughnutData3 = [{
					value: 100,
					color:"#CD4A45"
				}, {
					value : 200,
					color : "#F4A844"
				}, {
					value : 150,
					color : "#6BAB79"
				}, {
					value : 250,
					color : "#17888D"
		}];

   
   
   
   
   
   
}


  $("#rightillustration img:nth-child(4)").animate({ 
        right: "+=100%",
      }, 1400 );
  $("#rightillustration0 img:nth-child(3), #rightillustration img:nth-child(3), #rightillustration2 img:nth-child(3), #rightillustration3 img:nth-child(3), #rightillustration4 img:nth-child(3), #rightillustration5 img:nth-child(3), #rightillustration6 img:nth-child(3)").animate({ 
        right: "+=100%",
      }, 1600 );
  $("#rightillustration0 img:nth-child(2), #rightillustration img:nth-child(2), #rightillustration2 img:nth-child(2), #rightillustration3 img:nth-child(2), #rightillustration4 img:nth-child(2), #rightillustration5 img:nth-child(2), #rightillustration6 img:nth-child(2)").animate({ 
        right: "+=100%",
      }, 1800 );
  $("#rightillustration0 img:nth-child(1), #rightillustration img:nth-child(1), #rightillustration2 img:nth-child(1), #rightillustration3 img:nth-child(1), #rightillustration4 img:nth-child(1), #rightillustration5 img:nth-child(1), #rightillustration6 img:nth-child(1)").animate({ 
        right: "+=100%",
      }, 2000 );
	  
  $("#leftillustration0 img:nth-child(3), #leftillustration img:nth-child(3), #leftillustration2 img:nth-child(3), #leftillustration3 img:nth-child(3), #leftillustration4 img:nth-child(3), #leftillustration5 img:nth-child(3), #leftillustration6 img:nth-child(3)").animate({ 
        left: "-=100%",
      }, 1600 );
  $("#leftillustration0 img:nth-child(2), #leftillustration img:nth-child(2), #leftillustration2 img:nth-child(2), #leftillustration3 img:nth-child(2), #leftillustration4 img:nth-child(2), #leftillustration5 img:nth-child(2), #leftillustration6 img:nth-child(2)").animate({ 
        left: "-=100%",
      }, 1800 );
  $("#leftillustration0 img:nth-child(1), #leftillustration img:nth-child(1), #leftillustration2 img:nth-child(1), #leftillustration3 img:nth-child(1), #leftillustration4 img:nth-child(1), #leftillustration5 img:nth-child(1), #leftillustration6 img:nth-child(1)").animate({ 
        left: "-=100%",
      }, 2000 );
	  

	  	  $("#miniprogress").animate({ 
        width: "+=14.32%",
      }, 1400 );	  
});
















<!--//FIGURING OUT THE CALCULATION

/*$("#buttonright").click(function () {

if($("#page2icon1").hasClass('page2iconsopacity')) {
  var singlefamatt = 225;
  
    alert("singlefamatt");

		var clicks = $('#bedroomform').text(); // .text() instead of .val()
        alert('Correct! You guessed it in ' + clicks + ' clicks.');
		
}

});
*/















/*PAGE1CONTENT*/
    function is_int(value){ 
      if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
        return true;
      } else { 
        return false;
      } 
    }

    $(function() {
      $("#zipcode").keyup(function() {
        var el = $(this);
        if ((el.val().length == 5) && (is_int(el.val())))  {
          $.ajax({
            url: "http://zip.elevenbasetwo.com",
            cache: false,
            dataType: "json",
            type: "GET",
            data: "zip=" + el.val(),
            success: function(result, success) {
              $("#citytext").html(result.city);
			  $("#commaspace").html(", ");
			  $("#statetext").html(result.state);
				//CHANGE BUTTON
				$("#buttonright").addClass( "navigationopacity" );

              $("#page1contents a").addClass("fullopacity");
            },
          });
        }
      });
    });


















/*PAGE2CONTENT*/
$("#page2icon1").click(function () {
	$("#page2icon2").removeClass( "page2iconsopacity" );
	$("#page2icon3").removeClass( "page2iconsopacity" );
	$("#page2icon4").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
  	$( "#withthismany" ).fadeIn(600);
  	$( "#withthismanypeople" ).fadeIn(600);
	

});


$("#page2icon2").click(function () {
	$("#page2icon1").removeClass( "page2iconsopacity" );
	$("#page2icon3").removeClass( "page2iconsopacity" );
	$("#page2icon4").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
  	$( "#withthismany" ).fadeIn(600);
  	$( "#withthismanypeople" ).fadeIn(600);
	

});


$("#page2icon3").click(function () {
	$("#page2icon2").removeClass( "page2iconsopacity" );
	$("#page2icon1").removeClass( "page2iconsopacity" );
	$("#page2icon4").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
  	$( "#withthismany" ).fadeIn(600);
  	$( "#withthismanypeople" ).fadeIn(600);


});


$("#page2icon4").click(function () {
	$("#page2icon2").removeClass( "page2iconsopacity" );
	$("#page2icon3").removeClass( "page2iconsopacity" );
	$("#page2icon1").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
  	$( "#withthismany" ).fadeIn(600);
  	$( "#withthismanypeople" ).fadeIn(600);
	

});





$("#buttonup").click(function () {
var value = parseInt($("#bedroomform").text(), 10) + 1;

if($("#bedroomform").text() < '9') {
$("#bedroomform").text(value); 
}

  	$("#buttonright").addClass( "navigationopacity" );

});


$("#buttondown").click(function () {
var value = parseInt($("#bedroomform").text(), 10) - 1;

if($("#bedroomform").text() > '0') {
$("#bedroomform").text(value); 
}

  	$("#buttonright").addClass( "navigationopacity" );

});


$("#buttonuppeople").click(function () {
var value = parseInt($("#peopleform").text(), 10) + 1;

if($("#peopleform").text() < '9') {
$("#peopleform").text(value); 
}

  	$("#buttonright").addClass( "navigationopacity" );

});


$("#buttondownpeople").click(function () {
var value = parseInt($("#peopleform").text(), 10) - 1;

if($("#peopleform").text() > '1') {
$("#peopleform").text(value); 
}

  	$("#buttonright").addClass( "navigationopacity" );

});






/*PAGE3 CONTENT*/
$("#page3icons1 div").click(function () {
	$("#page3icons1 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
});

$("#page3icons2 div").click(function () {
	$("#page3icons2 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
});

$("#page3icons3 div").click(function () {
	$("#page3icons3 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
});

$("#page3icons4 div").click(function () {
	$("#page3icons4 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
});


$(".page3icons").click(function () {
if($("#page3icons1 div").hasClass('page2iconsopacity') && $("#page3icons2 div").hasClass('page2iconsopacity') && $("#page3icons3 div").hasClass('page2iconsopacity') && $("#page3icons4 div").hasClass('page2iconsopacity')) {
				$("#buttonright").addClass( "navigationopacity" );
};




});


/*PAGE4 CONTENT*/
$(".page4icons img").click(function () {
	$(".page4icons img").removeClass( "page4iconsopacity" );
  	$(this).toggleClass( "page4iconsopacity" );
});


$("#page4icongroup div:nth-child(2), #page4icongroup div:nth-child(3), #page4icongroup div:nth-child(4), #page4icongroup div:nth-child(5)").click(function () {
	  	$( "#page4Idrive" ).fadeIn(600);

});

$("#page4icongroup div:nth-child(1)").click(function () {
	  	$( "#page4Idrive" ).fadeOut(300);
						$("#buttonright").addClass( "navigationopacity" );

});


$("#page4icons1 div").click(function () {
	$("#page4icons1 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
					$("#buttonright").addClass( "navigationopacity" );

});





/* PAGE 5*/

$("#buttonup5").click(function () {
var value = parseInt($("#airplaneform").text(), 10) + 1;

if($("#airplaneform").text() < '9') {
$("#airplaneform").text(value); 
}

if($("#airplaneform").text() > '0') {
$("#leftsideairplaneicon").removeClass('airplaneopacity'); 
}


				$("#buttonright").addClass( "navigationopacity" );
});


$("#buttondown5").click(function () {
var value = parseInt($("#airplaneform").text(), 10) - 1;

if($("#airplaneform").text() > '0') {
$("#airplaneform").text(value); 
}

if($("#airplaneform").text() == '0') {
$("#leftsideairplaneicon").addClass('airplaneopacity'); 
}


				$("#buttonright").addClass( "navigationopacity" );

});







$("#buttonup52").click(function () {
var value = parseInt($("#airplaneform2").text(), 10) + 1;

if($("#airplaneform2").text() < '9') {
$("#airplaneform2").text(value); 
}

if($("#airplaneform2").text() > '0') {
$("#rightsideairplaneicon").removeClass('airplaneopacity'); 
}


				$("#buttonright").addClass( "navigationopacity" );

});


$("#buttondown52").click(function () {
var value = parseInt($("#airplaneform2").text(), 10) - 1;

if($("#airplaneform2").text() > '0') {
$("#airplaneform2").text(value); 
}

if($("#airplaneform2").text() == '0') {
$("#rightsideairplaneicon").addClass('airplaneopacity'); 
}


				$("#buttonright").addClass( "navigationopacity" );


});





/*PAGE 6*/

$("#page6icons1 div").click(function () {
	$("#page6icons1 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
});

$("#page6icons2 div").click(function () {
	$("#page6icons2 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
});

$("#page6icons3 div").click(function () {
	$("#page6icons3 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
});

$("#page6icons4 div").click(function () {
	$("#page6icons4 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
});




$(".page6icons").click(function () {
if($("#page6icons1 div").hasClass('page2iconsopacity') && $("#page6icons2 div").hasClass('page2iconsopacity') && $("#page6icons3 div").hasClass('page2iconsopacity') && $("#page6icons4 div").hasClass('page2iconsopacity')) {
				$("#buttonright").addClass( "navigationopacity" );
};

});


/*PAGE0 RESULTS*/

$("#resultskeybuttons div:nth-child(1)").hover(function () {
	  $( "#resultsbuttonsubheads div:nth-child(1)" ).slideFadeToggle()
});


$("#resultskeybuttons div:nth-child(2)").hover(function () {
	  $( "#resultsbuttonsubheads div:nth-child(2)" ).slideFadeToggle()
});

$("#resultskeybuttons div:nth-child(3)").hover(function () {
	  $( "#resultsbuttonsubheads div:nth-child(3)" ).slideFadeToggle()
});

$("#resultskeybuttons div:nth-child(4)").hover(function () {
	  $( "#resultsbuttonsubheads div:nth-child(4)" ).slideFadeToggle()
});



$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, 250, easing, callback);
};














//BUTTON LEFT COUNTER
$("#buttonleft").click(function () {
var value = parseInt($("#currentquestionnumber").text(), 10) - 1;
$("#currentquestionnumber").text(value);
});


//BUTTONRIGHT COUNTER
$("#buttonright").click(function () {
var value = parseInt($("#currentquestionnumber").text(), 10) + 1;
$("#currentquestionnumber").text(value); 
});


$("#starticon").click(function () {
var value = parseInt($("#currentquestionnumber").text(), 10) + 1;
$("#currentquestionnumber").text(value); 
});







//FIGURING OUT EQUATION//
//navigationopacity















































































 


	
	
	
	
});