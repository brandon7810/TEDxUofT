$(function ()
{ 

  var name = '',
      email = '',
      phone = '',
      occupation = '',
      party_ticket = '',
      campus = '',
      message = '',
      additional_info = '',
      dietary_res = '';

  $("#wizard").steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "slideLeft",

      //Events happen in different step
      onStepChanging: function (event, currentIndex, priorIndex) {

        var apply_name_input = $('#applyName');
        var apply_email_input = $('#applyEmail');
        var apply_phone_input = $('#Phone');
        var apply_occupation_input = $('#Occupation');
        var apply_message_input = $('#applyMessage');

        var newIndex = priorIndex;

        //Finishing First step
        if(newIndex == 1){

          name = apply_name_input.val();
          email = apply_email_input.val();
          phone = apply_phone_input.val();

          if(name.length == 0){

            apply_name_input.css('border-bottom','1px solid #FF2B06');
            return false;

          } else if (email.length == 0){

            apply_email_input.css('border-bottom','1px solid #FF2B06');

          } else {

            return true;
          }

        //Finishing Second step
        }else if(newIndex == 2){

          occupation = apply_occupation_input.val();

          if(occupation.length == 0){

            apply_occupation_input.css('border-bottom','1px solid #FF2B06');
            return false;

          }else{

            return true;
          }

        //Finishing Third step
        }else if(newIndex == 3){

          message = apply_message_input.val();

          if (message.length == 0){

            apply_message_input.css('border','1px solid #FF2B06');
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
			}
        );
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
    }
  );

  (function(){
    var max_count = 200;
  
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
  })();

  (function(){
    var utm_bool = false;
    var utsc_bool = false;
    var utsg_bool = false;
    var other_bool = false;

    var campus_utm_div = $("#campus_utm");
    var campus_utsg_div = $("#campus_utsg");
    var campus_utsc_div = $("#campus_utsc");
    var campus_other_div = $("#campus_other");
    var after_party_yes_div = $("#afterparty_yes");
    var after_party_no_div = $("#afterparty_no");

    campus_utm_div.click(function() {

      campus = "UTM";
      utm_bool = true;
      utsc_bool = false;
      utsg_bool = false;
      other_bool = false;

      campus_utm_div.css('background','#FF2B06');
      campus_utm_div.css('color','white');
      campus_utsg_div.css('background','white');
      campus_utsg_div.css('color','#FF2B06');
      campus_utsc_div.css('background','white');
      campus_utsc_div.css('color','#FF2B06');
      campus_other_div.css('background','white');
      campus_other_div.css('color','#FF2B06');
    });

    campus_utsg_div.click(function() {

      campus = "UTSG";
      utm_bool = false;
      utsc_bool = false;
      utsg_bool = true;
      other_bool = false;

      campus_utm_div.css('background','white');
      campus_utm_div.css('color','#FF2B06');
      campus_utsc_div.css('background','white');
      campus_utsc_div.css('color','#FF2B06');
      campus_utsg_div.css('background','#FF2B06');
      campus_utsg_div.css('color','white');
      campus_other_div.css('background','white');
      campus_other_div.css('color','#FF2B06');
    });

    campus_utsc_div.click(function() {

      campus = "UTSC";
      utm_bool = false;
      utsc_bool = true;
      utsg_bool = false;
      other_bool = false;

      campus_utm_div.css('background','white');
      campus_utm_div.css('color','#FF2B06');
      campus_utsc_div.css('background','#FF2B06');
      campus_utsc_div.css('color','white');
      campus_utsg_div.css('background','white');
      campus_utsg_div.css('color','#FF2B06');
      campus_other_div.css('background','white');
      campus_other_div.css('color','#FF2B06');
    });

    campus_other_div.click(function() {

      campus = "Other";
      utm_bool = false;
      utsc_bool = false;
      utsg_bool = false;
      other_bool = true;

      campus_utm_div.css('background','white');
      campus_utm_div.css('color','#FF2B06');
      campus_utsg_div.css('background','white');
      campus_utsg_div.css('color','#FF2B06');
      campus_utsc_div.css('background','white');
      campus_utsc_div.css('color','#FF2B06');
      campus_other_div.css('background','#FF2B06');
      campus_other_div.css('color','white');
    });

    var after_party_yes_bool = false;
    var after_party_no_bool = false;

    after_party_yes_div.click(function() {

      party_ticket = "YES";
      after_party_yes_bool = true;
      after_party_no_bool = false;

      after_party_yes_div.css('background','#FF2B06');
      after_party_yes_div.css('color','white');
      after_party_no_div.css('color','#FF2B06');
      after_party_no_div.css('background','white');
    });

    after_party_no_div.click(function() {

      party_ticket = "NO";
      after_party_no_bool = true;
      after_party_yes_bool = false;

      after_party_no_div.css('background','#FF2B06');
      after_party_no_div.css('color','white');
      after_party_yes_div.css('color','#FF2B06');
      after_party_yes_div.css('background','white');
    });
  })();
});

$('#ContactSubmit').click(function(){

  var name_input = $('#contactName');
  var email_input = $('#contactEmail');
  var message_input = $('#contactMessage');

  var name = name_input.val();
  var email = email_input.val();
  var message = message_input.val();
  
  if( name.length==0){

    name_input.css('border-bottom','1px solid #FF2B06');

  }else if (email.indexOf("@") == -1 || email.length == 0){

    email_input.css('border-bottom','1px solid #FF2B06');

  }else if (message.length <= 5){

    message_input.css('border-bottom','1px solid #FF2B06');

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