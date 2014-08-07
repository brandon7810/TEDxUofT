$(function ()
{ 


	var phone2, name2, email2, Nominee_Name, Nominee_Email, Nominee_Phone, Overview_ans, links_ans, videos_ans, speak_style_ans;
	$(document).ready(function(){
		//Listeners for storing text area ans in the form
		if (typeof(Storage) != "undefined") {
			//Save q1_ans
			$('#Overview_ans').bind('input propertychange', function() {
				localStorage.Overview_ans = $('#Overview_ans').val();
				console.log($('#Overview_ans').val());
			});
			//Save q2_ans
			$('#links_ans').bind('input propertychange', function() {
				localStorage.links_ans = $('#links_ans').val();
			});
			//Save q3_ans
			$('#videos_ans').bind('input propertychange', function() {
				localStorage.videos_ans = $('#videos_ans').val();
			});
			//Save q4_ans
			$('#speak_style_ans').bind('input propertychange', function() {
				localStorage.speak_style_ans = $('#speak_style_ans').val();
			});		
		};	
	});



	var is_finished = false;

	$("#wizard2").steps({
	 
		headerTag: "h2",
		bodyTag: "section",
		transitionEffect: "slideLeft",
		
		//Events happen in different step
		onStepChanging: function (event, currentIndex, priorIndex) { 
			var newIndex = priorIndex;
			var cha_len = 0;

			//Finishing 1 step
			if(newIndex == 1){
			
				//Load local apply name
				if (typeof(Storage) != "undefined") {
					if(localStorage.applyName2){			
						$('#applyName2').val(localStorage.applyName2);
					}
					if(localStorage.applyEmail2){			
						$('#applyEmail2').val(localStorage.applyEmail2);
					}
					if(localStorage.Phone2){			
						$('#Phone2').val(localStorage.Phone2);
					}
					if(localStorage.Nominee_Name){			
						$('#Nominee_Name').val(localStorage.Nominee_Name);
					}
					if(localStorage.Nominee_Email){			
						$('#Nominee_Email').val(localStorage.Nominee_Email);
					}
					if(localStorage.Nominee_Phone){			
						$('#Nominee_Phone').val(localStorage.Nominee_Phone);
					}					
					
					$('#local_support').text("PS: All the Input will be saved locally on your machine!").fadeIn(500);
				}else{
					$('#local_support').text("Sorry. Your broswer does not support local storage. Every input not saved will be lost.").fadeIn(500);
				};
				
				return true;
				
			}
			
			if(newIndex == 2){
				name2 = $('#applyName2').val();
				email2 = $('#applyEmail2').val();
				phone2 = $('#Phone2').val();
				Nominee_Name = $('#Nominee_Name').val();
				Nominee_Email = $('#Nominee_Email').val();
				Nominee_Phone = $('#Nominee_Phone').val();
				
				
				if(name2.length == 0){
					$('#applyName2').css('border-bottom','1px solid #FF2B06');
					return false;
				} else if (email2.length == 0){
					$('#applyEmail2').css('border-bottom','1px solid #FF2B06');
					return false;
				} else if (phone2.length == 0){
					$('#Phone2').css('border-bottom','1px solid #FF2B06');
					return false;
				} else if (Nominee_Name.length == 0){
					$('#Nominee_Name').css('border-bottom','1px solid #FF2B06');
					return false;
				} else if (Nominee_Email.length == 0){
					$('#Nominee_Email').css('border-bottom','1px solid #FF2B06');
					return false;
				} else if (Nominee_Phone.length == 0){
					$('#Nominee_Phone').css('border-bottom','1px solid #FF2B06');
					return false;
				}
				
				
				if (typeof(Storage) != "undefined") {	
					//Load q3_ans
					if(localStorage.Overview_ans){
						$('#Overview_ans').val(localStorage.Overview_ans);
					}
					localStorage.applyName2 = $('#applyName2').val();
					localStorage.applyEmail2 = $('#applyEmail2').val();
					localStorage.Phone2 = $('#Phone2').val();
					localStorage.Nominee_Name = $('#Nominee_Name').val();
					localStorage.Nominee_Email = $('#Nominee_Email').val();
					localStorage.Nominee_Phone = $('#Nominee_Phone').val();
				}
				
				return true;
			}
			
			//Finishing 3 step
			if(newIndex == 3){
				Overview_ans = $('#Overview_ans').val();
				cha_len = Overview_ans.length;

				if(cha_len<20){
					alert("Come on! Give us more info!");
					return false;
				}
				else {
					if (typeof(Storage) != "undefined") {	
						//Load q3_ans
						if(localStorage.links_ans){
							$('#links_ans').val(localStorage.links_ans);
						}
					}
					return true;
				}
			}
			
			//Finishing 7 step
			if(newIndex == 4){
				links_ans = $('#links_ans').val();
				cha_len = links_ans.length;

	
				if (typeof(Storage) != "undefined") {
					//Load q4_ans
					if(localStorage.videos_ans){
						$('#videos_ans').val(localStorage.videos_ans);
					}
				}
				return true;

			}
			
			//Finishing 7 step
			if(newIndex == 5){
				videos_ans = $('#videos_ans').val();
				cha_len = videos_ans.length;

	
				if (typeof(Storage) != "undefined") {
					//Load q4_ans
					if(localStorage.speak_style_ans){
						$('#speak_style_ans').val(localStorage.speak_style_ans);
					}
				}
				return true;

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
				
				
				if(!is_finished){
					
					// Nominee_Name, Nominee_Email, Nominee_Phone, Overview_ans, links_ans, videos_ans, speak_style_ans
					
					
					$.post( "php/nomination_engine.php", { Name: name2, Email: email2, Phone: phone2,  Nominee_Name: Nominee_Name, Nominee_Email:Nominee_Email, 
					Nominee_Phone: Nominee_Phone, Overview_ans: Overview_ans, links_ans:links_ans, videos_ans:videos_ans, speak_style_ans:speak_style_ans })
							.done(function( data ) {
								$('#wizard').fadeOut(300, function() {
									$('#wizard-success').fadeIn(300);
								});
								
								if (typeof(Storage) != "undefined") {
									localStorage.clear();
									localStorage.hiring_new = false;
								}
								
							}) 
							.fail(function() {
								$('#wizard').fadeOut(300, function() {
									$('#wizard-unsuccess').fadeIn(300);
								});
							});
							
					//$.post( "php/postSpreadSheet/post_SpreadSheet_Application.php?Name=" + name + "&Campus=" + campus + "&Position=" + position + "&Email=" + email + "&Phone=" + phone + "&Year=" + year + "&Occupation=" + occupation);
				
					is_finished = true;
				}
			},

			//Event happens before finishing all the steps
			onFinishing: function (event, currentIndex) { 
			   
				speak_style_ans = $('#speak_style_ans').val();
				cha_len = speak_style_ans.length;
				
				if(cha_len<20){
					alert("Come on! Give us more info about you!");
					return false;
				}
				else {
					return true;
				}

			
			}
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