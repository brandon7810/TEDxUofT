$(function ()
{ 

	var position, phone, name, title, email, occupation, year, q1_ans, q2_ans, q3_ans, q4_ans, q5_ans, q6_ans, q7_ans, q8_ans, q9_ans;
	
	$(document).ready(function(){
		//position choice 		
		
		$('.position-choice').hover(
			function() {
				var is_click = $(this).data("click");
				if(!is_click){
					$(this).css("color", "#FF2B06");
					$(this).css("border-color", "#FF2B06");
					var job_title = $(this).attr("name");
					showJobInfo(job_title);
				}
			},function() {
				var is_click = $(this).data("click");
				if(!is_click){
					$(this).css("color", "#4C4C4C");
					$(this).css("border-color", "#4C4C4C");	
					$('#position-info').text("").hide();
					showJobInfo(position);
				}
		});
		
		$('.position-choice').click(function(){
			var this_color = $(this).css("background-color");
			$('.position-choice').css("color", "#4C4C4C");
			$('.position-choice').css("border-color", "#4C4C4C");	
			$('.position-choice').css("background-color", "white");
			$('.position-choice').data("click",false);
			
			
			position = null; 
			
			if(this_color != "rgb(255, 0, 0)") {		
				$(this).animate({ "background-color": "red",  "color": "white" }, "fast");	
				$(this).css("border", "1px solid white");
				$(this).data("click",true);
				position = $(this).attr("name");
			}
		});
		
		function showJobInfo(job){
			switch(job){
				case "Junior Designer":
					$('#position-info').text("Assists the Creative Director in the design and creation of marketing materials.").fadeIn(500);
					break;
				case "Junior Developer":
					$('#position-info').text("Maintains the website, and coding as per the vision of the Creative Director.").fadeIn(500);
					break;
				case "Speaker Relations Manager":
					$('#position-info').text("Ensures positive speaker experience before, during and after the event. \
						Manages and coordinates all speakers and emcees, showcases, rehearsals, day of show arrival, preparation and post talk experience. Acquires speaker presentations prior to the event.").fadeIn(500);
					break;
				case "Funds Manager":
					$('#position-info').text("Ensures the event maintains a balanced budget and that all funds are received, processed and accounted for.\
						Responsible for sales, budget forecasting, and the completion of post-event reports to all sponsors.").fadeIn(500);
					break;
				case "Campus Ambassadors":
					$('#position-info').text("Coordinates with residences to arrange live stream parties, as well as create awareness for TED, TEDx and TEDxUofT at each University of Toronto Campus.").fadeIn(500);
					break;
				case "Social Media Specialist":
					$('#position-info').text("Creates the social media strategy, maintaining a constant social media presence on Twitter, Facebook, and Instagram.\
						Responsible for creating the promotion schedule for speakers, conference, and videos.").fadeIn(500);
					break;
				case "External Affairs Manager":
					$('#position-info').text("Communicates with external partners who provide funding and in-kind services for the conference. Assists the Director of Partnerships.").fadeIn(500);
					break;
				default:
					$('#position-info').text("").hide();
					break;				
			}
		}
		
		//end position choice

	}); //end document 

 $("#wizard").steps({
 
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "slideLeft",


    //Events happen in different step
    onStepChanging: function (event, currentIndex, priorIndex) { 
        var newIndex = priorIndex;
		var cha_len = 0;
		
        //Finishing 1 step
        if(newIndex == 1){
			return true;
        }
		
		//Finishing 2 step
        if(newIndex == 2){
			if(position){
				return true;
			}else{
				alert("Hey! Choose one!");
				return false;
			}
			
        }
		

		
		//Finishing 3 step
        if(newIndex == 3){
			name = $('#applyName').val();
			email = $('#applyEmail').val();
			phone = $('#Phone').val();
			
			if(name.length == 0){
				$('#applyName').css('border-bottom','1px solid #FF2B06');
			return false;
			} else if (email.length == 0){
				$('#applyEmail').css('border-bottom','1px solid #FF2B06');
			} else {
				return true;
			}
        }
		
		//Finishing 4 step
        if(newIndex == 4){
			year = $('#Year').val();
			title = $('#Title').val();
			occupation = $('#Occupation').val();
			
			if(year.length == 0){
				$('#Year').css('border-bottom','1px solid #FF2B06');
			return false;
			} else if (title.length == 0){
				$('#Title').css('border-bottom','1px solid #FF2B06');
			}else if (occupation.length == 0){
				$('#Occupation').css('border-bottom','1px solid #FF2B06');
			}

			else {
				return true;
			}
			
        }				
		
		
		//Finishing 5 step
        if(newIndex == 5){
			q1_ans = $('#q1_ans').val();
			cha_len = q1_ans.length;

			if(cha_len<20){
				alert("Come on! Give us more info about you!");
				return false;
			}
            else {return true;}
        }
		
		//Finishing 6 step
        if(newIndex == 6){
            q2_ans = $('#q2_ans').val();
			cha_len = q2_ans.length;

			if(cha_len<20){
				alert("Come on! Give us more info about you!");
				return false;
			}
            else {return true;}
        }
		
		//Finishing 7 step
        if(newIndex == 7){
            q3_ans = $('#q3_ans').val();
			cha_len = q3_ans.length;

			if(cha_len<20){
				alert("Come on! Give us more info about you!");
				return false;
			}
            else {return true;}
        }
		
		//Finishing 8 step
        if(newIndex == 8){
            q4_ans = $('#q4_ans').val();
			cha_len = q4_ans.length;

			if(cha_len<20){
				alert("Come on! Give us more info about you!");
				return false;
			}
            else {return true;}
        }
		
		//Finishing 9 step
        if(newIndex == 9){
            q5_ans = $('#q5_ans').val();
			cha_len = q5_ans.length;

			if(cha_len<20){
				alert("Come on! Give us more info about you!");
				return false;
			}
            else {return true;}
        }
		
		//Finishing 10 step
        if(newIndex == 10){
            q6_ans = $('#q6_ans').val();
			cha_len = q6_ans.length;

			if(cha_len<20){
				alert("Come on! Give us more info about you!");
				return false;
			}
            else {return true;}
        }
		
		//Finishing 11 step
        if(newIndex == 11){
            q7_ans = $('#q7_ans').val();
			cha_len = q7_ans.length;

			if(cha_len<20){
				alert("Come on! Give us more info about you!");
				return false;
			}
            else {return true;}
        }
		
		//Finishing 12 step
        if(newIndex == 12){
            q8_ans = $('#q8_ans').val();
			cha_len = q8_ans.length;

			if(cha_len<20){
				alert("Come on! Give us more info about you!");
				return false;
			}
            else {return true;}
        }
		

    },   
	
		//Event happens after finishing all the steps
		onFinished: function (event, currentIndex) {  

			/*
			console.log(
				"position:" + position + "\n" + "name:" + name + "\n" + "email:" + email + "\n" + 
				"phone:" + phone + "\n" + "year:" + year + "\n" + "title:" + title + "\n" +
				"occupation:" + occupation + "\n" + "utm:" + utm_bool + "\n" + "utsc:" + utsc_bool + "\n" +
				"utsg:" + utsg_bool + "\n" + "other camp:" + other_bool + "\n" + "q1:" + q1_ans + "\n" +
				"q2:" + q2_ans + "\n" + "q3:" + q3_ans + "\n" + "q4:" + q4_ans + "\n" + "q5:" + q5_ans + "\n" +
				"q6:" + q6_ans + "\n" + "q7:" + q7_ans + "\n" + "q8:" + q8_ans + "\n" + "q9:" + q9_ans + "\n"
			);
			
			$('#wizard').fadeOut(300, function() {
				$('#wizard-success').fadeIn(300);
			});*/
			
			

			
			
			    $.post( "php/hiringengine.php", { Name: name, Email: email, Phone: phone, Occupation: occupation, Campus: campus, Title: title, Year:year, Position: position,
				Q1_ans: q1_ans, Q2_ans: q2_ans, Q3_ans: q3_ans, Q4_ans: q4_ans, Q5_ans: q5_ans, Q6_ans: q6_ans, Q7_ans: q7_ans, Q8_ans: q8_ans, Q9_ans: q9_ans })
						.done(function( data ) {
							$('#wizard').fadeOut(300, function() {
								$('#wizard-success').fadeIn(300);
							});
						}) 
						.fail(function() {
							$('#wizard').fadeOut(300, function() {
								$('#wizard-unsuccess').fadeIn(300);
							});
						});
			
			

		},

		//Event happens before finishing all the steps
		onFinishing: function (event, currentIndex) { 
           
			q9_ans = $('#q9_ans').val();
			cha_len = q9_ans.length;
			
			if(cha_len<20){
				alert("Come on! Give us more info about you!");
				return false;
			}
            else {return true;}

		
		}
});	
	
	

  //var name, email, phone, occupation, party_ticket, campus, message, additional_info, dietary_res;
   /*
  $("#wizard").steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "slideLeft",


      //Events happen in different step
      onStepChanging: function (event, currentIndex, priorIndex) { 
        var newIndex = priorIndex;

        //Finishing First step
        if(newIndex == 1){
          name = $('#applyName').val();
          email = $('#applyEmail').val();
          phone = $('#Phone').val();
          if(name.length == 0){
            $('#applyName').css('border-bottom','1px solid #FF2B06');
            return false;
          } else if (email.length == 0){
            $('#applyEmail').css('border-bottom','1px solid #FF2B06');
          } else {
            return true;
          }
          
        //Finishing Second step
      }else if(newIndex == 2){  
        occupation = $('#Occupation').val();

        if(occupation.length == 0){
          $('#Occupation').css('border-bottom','1px solid #FF2B06');
          return false;
        }else{
          return true;
        }

        //Finishing Third step
      }else if(newIndex == 3){
        message = $('#applyMessage').val();

        if (message.length == 0){
          $('#applyMessage').css('border','1px solid #FF2B06');
          return false;
        }else{
          return true;
        }
        
        //Finishing Fourth step
      }else if(newIndex == 4){
        dietary_res = $('#Dietary_res').val();
        additional_info = $('#additional_info').val();
        return true;
      }else{
        return true;
      }

    },      
      //Event happens after finishing all the steps
      onFinished: function (event, currentIndex) {  

    /*
    var body = "Name: " + name +"%0A%0AEamil: " + email + "%0A%0APhone: " + phone + "%0A%0AOccupation: " + occupation + "%0A%0ADietary Restriction: " + dietary_res
    + "%0A%0ACampus: " + campus +"%0A%0AAdditional Info: " + additional_info +"%0A%0AAfter Party: " + party_ticket + "%0A%0AMessage: "+ message;
    
    window.location.href = "mailto:applications.tedxuoft@gmail.com?Subject=Application Submission&body=" + body;
    */
    /*
    $.post( "php/applyengine.php", { Name: name, Email: email, Phone: phone, Occupation: occupation, Campus: campus, Dietary_res: dietary_res, Message: message, Additional_info:additional_info, Party_ticket: party_ticket  })
      .done(function( data ) {
        $('#wizard').fadeOut(300, function() {
        $('#wizard-success').fadeIn(300);
        });
      });

      },

    //Event happens before finishing all the steps
    onFinishing: function (event, currentIndex) { 
    return true;
    //Fifth
    /*
    if(currentIndex == 4){
      if(!afterparty_yes_bool && !afterparty_no_bool){
        return false;
      }else{
        return true;
      }
    }*/
	/*
  }
});
*/
var max_count = 200;
var wordCounts = {};

$("#applyMessage").on('keyup', function() {
  var words = this.value.match(/\S+/g).length;
  if (words > max_count) {
    // Split the string on first 200 words and rejoin on spaces
    var trimmed = $(this).val().split(/\s+/, max_count).join(" ");
    // Add a space at the end to keep new typing making new words
    $(this).val(trimmed + " ");
  }
  else {
    $('#count_left').html(max_count-words);
  }
}); 

var utm_bool = false;
var utsc_bool = false;
var utsg_bool = false;
var other_bool = false;
$("#campus_utm").click(function(event) {
  campus = "UTM";
  utm_bool = true;
  $("#campus_utm").css('background','#FF2B06');
  $("#campus_utm").css('color','white');
  utsc_bool = false;
  $("#campus_utsg").css('background','white');
  $("#campus_utsg").css('color','#FF2B06');
  utsg_bool = false;
  $("#campus_utsc").css('background','white');
  $("#campus_utsc").css('color','#FF2B06');
  other_bool = false;
  $("#campus_other").css('background','white');
  $("#campus_other").css('color','#FF2B06');
});
$("#campus_utsg").click(function(event) {
  campus = "UTSG";
  utm_bool = false;
  $("#campus_utm").css('background','white');
  $("#campus_utm").css('color','#FF2B06');
  utsc_bool = false;
  $("#campus_utsc").css('background','white');
  $("#campus_utsc").css('color','#FF2B06');
  utsg_bool = true;
  $("#campus_utsg").css('background','#FF2B06');
  $("#campus_utsg").css('color','white');
  other_bool = false;
  $("#campus_other").css('background','white');
  $("#campus_other").css('color','#FF2B06');
});
$("#campus_utsc").click(function(event) {
  campus = "UTSC";
  utm_bool = false;
  $("#campus_utm").css('background','white');
  $("#campus_utm").css('color','#FF2B06');
  utsc_bool = true;
  $("#campus_utsc").css('background','#FF2B06');
  $("#campus_utsc").css('color','white');
  utsg_bool = false;
  $("#campus_utsg").css('background','white');
  $("#campus_utsg").css('color','#FF2B06');
  other_bool = false;
  $("#campus_other").css('background','white');
  $("#campus_other").css('color','#FF2B06');
});
$("#campus_other").click(function(event) {
  campus = "Other";
  utm_bool = false;
  $("#campus_utm").css('background','white');
  $("#campus_utm").css('color','#FF2B06');
  utsc_bool = false;
  $("#campus_utsg").css('background','white');
  $("#campus_utsg").css('color','#FF2B06');
  utsg_bool = false;
  $("#campus_utsc").css('background','white');
  $("#campus_utsc").css('color','#FF2B06');
  other_bool = true;
  $("#campus_other").css('background','#FF2B06');
  $("#campus_other").css('color','white');
});

var afterparty_yes_bool = false;
var afterparty_no_bool = false;
$("#afterparty_yes").click(function(event) {
  party_ticket = "YES";
  afterparty_yes_bool = true;
  $("#afterparty_yes").css('background','#FF2B06');
  $("#afterparty_yes").css('color','white');
  afterparty_no_bool = false;
  $("#afterparty_no").css('color','#FF2B06');
  $("#afterparty_no").css('background','white');
});
$("#afterparty_no").click(function(event) {
  party_ticket = "NO";
  afterparty_no_bool = true;
  $("#afterparty_no").css('background','#FF2B06');
  $("#afterparty_no").css('color','white');
  afterparty_yes_bool = false;
  $("#afterparty_yes").css('color','#FF2B06');
  $("#afterparty_yes").css('background','white');
});

});

$('#ContactSubmit').click(function(){
  var name = $('#Name').val();
  var email = $('#Email').val();
  var message = $('#Message').val();
  
  if( name.length==0){
    $('#Name').css('border-bottom','1px solid #FF2B06');
  }else if (email.indexOf("@") == -1 || email.length == 0){
    $('#Email').css('border-bottom','1px solid #FF2B06');
  }else if (message.length <= 5){
    $('#Message').css('border-bottom','1px solid #FF2B06');
  }else{
  
  /*
  var body = "Name: " + name +"%0A%0AEamil: " + email + "%0A%0AMessage: "+ message;
  window.location.href = "mailto:applications.tedxuoft@gmail.com?Subject=Visitor Contact us&body=" + body;
    $('#contact-area').fadeOut(300, function() {
      $('#contact-success').fadeIn(300);
    });
  
  */
  
  $.post( "php/contactengine.php", { Name: name, Email: email, Message: message })
    .done(function( data ) {
      $('#contact-area').fadeOut(300, function() {
      $('#contact-success').fadeIn(300);
    });
  });
 }
});


$(function() {

  $(' #da-thumbs > li ').each( function() { $(this).hoverdir({
    hoverDelay : 75
  }); } );

});