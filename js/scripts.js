// My Scripts
$(document).ready(function(){
	
//$( "#page1contents" ).fadeOut(0);
$( "#page2contents" ).fadeOut(0);
	$( "#withthismany" ).fadeOut(0);
$( "#page3contents" ).fadeOut(0);
$( "#page4contents" ).fadeOut(0);
	$( "#page4Idrive" ).fadeOut(0);
$( "#page0contents" ).fadeOut(0);


















//FADEOUT ON HOVER
$("#buttonleft").click(function () {



if($("#currentquestionnumber").text() == '1') {
  $( "#page1contents" ).fadeOut(400);
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
  $( "#page0contents" ).fadeOut(400);
  $( "#page4contents" ).delay(1000).fadeIn(1500);
}

  
  
  $("#rightillustration img:nth-child(4)").animate({ 
        right: "-=100%",
      }, 1400 );
  $("#rightillustration img:nth-child(3), #rightillustration2 img:nth-child(3), #rightillustration3 img:nth-child(3), #rightillustration4 img:nth-child(3)").animate({ 
        right: "-=100%",
      }, 1600 );
  $("#rightillustration img:nth-child(2), #rightillustration2 img:nth-child(2), #rightillustration3 img:nth-child(2), #rightillustration4 img:nth-child(2)").animate({ 
        right: "-=100%",
      }, 1800 );
  $("#rightillustration img:nth-child(1), #rightillustration2 img:nth-child(1), #rightillustration3 img:nth-child(1), #rightillustration4 img:nth-child(1)").animate({ 
        right: "-=100%",
      }, 2000 );
	  


	      $("#leftillustration img:nth-child(4)").animate({ 
        left: "+=100%",
      }, 1400 );
  $("#leftillustration img:nth-child(3), #leftillustration2 img:nth-child(3), #leftillustration3 img:nth-child(3), #leftillustration4 img:nth-child(3)").animate({ 
        left: "+=100%",
      }, 1600 );
  $("#leftillustration img:nth-child(2), #leftillustration2 img:nth-child(2), #leftillustration3 img:nth-child(2), #leftillustration4 img:nth-child(2)").animate({ 
        left: "+=100%",
      }, 1800 );
  $("#leftillustration img:nth-child(1), #leftillustration2 img:nth-child(1), #leftillustration3 img:nth-child(1), #leftillustration4 img:nth-child(1)").animate({ 
        left: "+=100%",
      }, 2000 );


	  $("#miniprogress").animate({ 
        width: "-=10%",
      }, 1400 );
});







$("#buttonright").click(function () {
	
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
  $( "#page0contents" ).delay(1000).fadeIn(1500);
  setTimeout(function (){
  	new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(doughnutData1);
  }, 1500);
  setTimeout(function (){
	new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData2);
  }, 1500);
  setTimeout(function (){
	new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData3);
   }, 1500);


}







  $("#rightillustration img:nth-child(4)").animate({ 
        right: "+=100%",
      }, 1400 );
  $("#rightillustration img:nth-child(3), #rightillustration2 img:nth-child(3), #rightillustration3 img:nth-child(3), #rightillustration4 img:nth-child(3)").animate({ 
        right: "+=100%",
      }, 1600 );
  $("#rightillustration img:nth-child(2), #rightillustration2 img:nth-child(2), #rightillustration3 img:nth-child(2), #rightillustration4 img:nth-child(2)").animate({ 
        right: "+=100%",
      }, 1800 );
  $("#rightillustration img:nth-child(1), #rightillustration2 img:nth-child(1), #rightillustration3 img:nth-child(1), #rightillustration4 img:nth-child(1)").animate({ 
        right: "+=100%",
      }, 2000 );
	  
	      $("#leftillustration img:nth-child(4)").animate({ 
        left: "-=100%",
      }, 1400 );
  $("#leftillustration img:nth-child(3), #leftillustration2 img:nth-child(3), #leftillustration3 img:nth-child(3), #leftillustration4 img:nth-child(3)").animate({ 
        left: "-=100%",
      }, 1600 );
  $("#leftillustration img:nth-child(2), #leftillustration2 img:nth-child(2), #leftillustration3 img:nth-child(2), #leftillustration4 img:nth-child(2)").animate({ 
        left: "-=100%",
      }, 1800 );
  $("#leftillustration img:nth-child(1), #leftillustration2 img:nth-child(1), #leftillustration3 img:nth-child(1), #leftillustration4 img:nth-child(1)").animate({ 
        left: "-=100%",
      }, 2000 );
	  
	  

	  	  $("#miniprogress").animate({ 
        width: "+=10%",
      }, 1400 );	  
});
















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
              $("#page1contents a").addClass("fullopacity");
            },
          });
        }
      });
    });



















/*PAGE2CONTENT*/
$(".page2icons img").click(function () {
	$(".page2icons img").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
  	$( "#withthismany" ).fadeIn(600);
});


$("#buttonup").click(function () {
var value = parseInt($("#bedroomform").text(), 10) + 1;

if($("#bedroomform").text() < '9') {
$("#bedroomform").text(value); 
}
});


$("#buttondown").click(function () {
var value = parseInt($("#bedroomform").text(), 10) - 1;

if($("#bedroomform").text() > '0') {
$("#bedroomform").text(value); 
}
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

});


$("#page4icons1 div").click(function () {
	$("#page4icons1 div").removeClass( "page2iconsopacity" );
  	$(this).toggleClass( "page2iconsopacity" );
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











/*JQUERY CHART*/

		var doughnutData1 = [
				{
					value: 368,
					color:"#CD4A45"
				},
				{
					value : 435,
					color : "#F4A844"
				},
				{
					value : 44,
					color : "#6BAB79"
				},
				{
					value : 153,
					color : "#17888D"
				},
			];

		var doughnutData2 = [
				{
					value: 100,
					color:"#CD4A45"
				},
				{
					value : 200,
					color : "#F4A844"
				},
				{
					value : 200,
					color : "#6BAB79"
				},
				{
					value : 250,
					color : "#17888D"
				},
				{
					value : 250,
					color : "#002632"
				},
				
			];

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






 


	
	
	
	
});