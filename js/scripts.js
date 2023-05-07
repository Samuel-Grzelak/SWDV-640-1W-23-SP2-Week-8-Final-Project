// diet scripts
$(document).ready(function () {
  $('.list-item-link').click(function (e) {
      e.preventDefault();
      var content = $(this).data('content');
      $('#content-placeholder').text(content);
  });
});


// contact scripts
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission and page reload
  
    // Clear the form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  
    // Show the submission message
    document.getElementById("submissionMessage").style.display = "block";
  });
  