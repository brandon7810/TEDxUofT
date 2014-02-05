$(function ()
{ 

  var name, email, phone, occupation, party_ticket, campus, message, additional_info, dietary_res;

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
 }
});


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


$("a[rel]").overlay({
				closeOnClick: true
});

			$(function() {

				$(' #da-thumbs > li ').each( function() { $(this).hoverdir({
					hoverDelay : 75
				}); } );

			});