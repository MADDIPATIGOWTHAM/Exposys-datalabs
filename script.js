
      document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var intro = document.getElementById("intro");
      intro.parentNode.removeChild(intro);
    }, 7000); // Remove intro after 5 seconds
  });//This is for animation Timer
  
        (function(){
      emailjs.init("L5-_4ly8A1J_gYZHP"); // replace with your actual user ID
      //As this was from my account
    })();
  
    function sendEmails() {
      var senderEmail = document.getElementById("senderEmail").value;
      var message = document.getElementById("message").value;
      var subject = document.getElementById("subject").value;
      
      var validEmails = [];
      var invalidEmails = [];
  
      // Read contents of CSV file
      var file = document.getElementById("csvFile").files[0];
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(event) {
        var csv = event.target.result;
        var lines = csv.split('\n');
        for (var i = 0; i < lines.length; i++) {
          var email = lines[i].trim();
          var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
          if (emailRegex.test(email)) {
            validEmails.push(email);
          } else {
            invalidEmails.push(email);
          }
        }
        document.getElementById("validEmails").innerHTML = validEmails.join("<br><br>");
        document.getElementById("invalidEmails").innerHTML = invalidEmails.join("<br><br>");
        document.getElementById("validEmailCount").innerText = "(" + validEmails.length + ")";
        document.getElementById("invalidEmailCount").innerText = "(" + invalidEmails.length + ")";
       
  
        // Send email to valid email addresses
        for (var j = 0; j < validEmails.length; j++) {
          var templateParams = {
            to_name: validEmails[j],
            from_name: document.getElementById("senderEmail").value,
            message: document.getElementById("message").value,
            subject : document.getElementById("subject").value
            
          };
          
          emailjs.send('service_309nwyq', 'template_ea4ng7c', templateParams,"L5-_4ly8A1J_gYZHP")
            .then(function(response) {
              console.log("SUCCESS", response);
            }, function(error) {
              console.log("FAILED", error);
            });
        }
  
        alert("Emails sent to valid email addresses.");
      };
    }
  
    
 
  
 
   