$(function ()
{ 

  var name, email, phone, occupation, party_ticket, campus, message, additional_info, dietary_res;

  $("#wizard").steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "slideLeft",


      //Events happen in different step
      onStepChanging: function (event, currentIndex, priorIndex) { 

        //First step
        if(currentIndex == 0){
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
          
        //Second step
      }else if(currentIndex == 1){
        occupation = $('#Occupation').val();

        if(occupation.length == 0){
          $('#Occupation').css('border-bottom','1px solid #FF2B06');
          return false;
        }else{
          return true;
        }

        //Third step
      }else if(currentIndex == 2){
        message = $('#applyMessage').val();

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

        if (message.length == 0){
          $('#applyMessage').css('border','1px solid #FF2B06');
          return false;
        }else{
          return true;
        }
        
        //Fourth step
      }else if(currentIndex == 3){
        dietary_res = $('#Dietary_res').val();
        additional_info = $('#additional_info').val();
        return true;
        
        //Fifth
      }else if(currentIndex == 4){
        if(!afterparty_yes_bool && !afterparty_no_bool){
          return false;
        }else{
          return true;
        }
      }             

    },      
      //Event happens when finishing all the steps
      onFinished: function (event, currentIndex) {
        alert("Name: " + name + "\nPhone: " + phone + "\nEmail: " + email + "\nOccupation: " + occupation + "\nMessage: " + message +
          "\nDietary restrictions: " + dietary_res + "\nAddtional info: " + additional_info + "\nCampus: " + campus + "\nAfter Party: " + party_ticket);
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
  
  if( name.length==0 || message.length==0 || email.length==0){
    alert("Sorry! Please complete all the blanks.");
  }else if (email.indexOf("@") == -1){
    alert("Sorry! You've entered invalid an email!");
  }else if (message.length <= 5){
    alert("Sorry! Your message was too short!");
  }else{
    alert("Thanks! Your message has been submitted!");
    
    $.post( "contactengine.php", { Name: name, Email: email, Message: message } );
    
    $(':input','#contactform')
    .not(':button, :submit, :reset, :hidden')
    .val('');  
  }
});