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
          if(name.length == 0 || email.length == 0 || phone.length ==0){
            alert("Please complete all the blanks.");
            return false;
          }else{
            return true;
          }
          
        //Second step
        }else if(currentIndex == 1){
          occupation = $('#Occupation').val();
          
          if(occupation.length == 0){
            alert("Please complete all the options.");
            return false;
          }else{
            return true;
          }
          
        //Third step
        }else if(currentIndex == 2){
          message = $('#applyMessage').val();
          if (message.length <= 30){
            alert("You message is too short.");
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
            alert("Please choose one option");
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
    $("#campus_utm").click(function(event) {
      campus = "UTM";
      utm_bool = true;
      $("#campus_utm").css('color','red');
      utsc_bool = false;
      $("#campus_utsg").css('color','black');
      utsg_bool = false;
      $("#campus_usc").css('color','black');
    });
    $("#campus_utsg").click(function(event) {
      campus = "UTSG";
      utm_bool = false;
      $("#campus_utm").css('color','black');
      utsc_bool = false;
      $("#campus_utsc").css('color','black');
      utsg_bool = true;
      $("#campus_utsg").css('color','red');
    });
    $("#campus_utsc").click(function(event) {
      campus = "UTSC";
      utm_bool = false;
      $("#campus_utm").css('color','black');
      utsc_bool = true;
      $("#campus_utsc").css('color','red');
      utsg_bool = false;
      $("#campus_utsg").css('color','black');
    });
    
    var afterparty_yes_bool = false;
    var afterparty_no_bool = false;
    $("#afterparty_yes").click(function(event) {
      party_ticket = "YES";
      afterparty_yes_bool = true;
      $("#afterparty_yes").css('color','red');
      afterparty_no_bool = false;
      $("#afterparty_no").css('color','black');
    });
    $("#afterparty_no").click(function(event) {
      party_ticket = "NO";
      afterparty_no_bool = true;
      $("#afterparty_no").css('color','red');
      afterparty_yes_bool = false;
      $("#afterparty_yes").css('color','black');
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