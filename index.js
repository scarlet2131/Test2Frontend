// Name: Monisha Ranjan
// Student Id : C0914148
window.onload = function() {

  // Centering the text and inline content horizontally for the form styling
  document.body.style.textAlign = 'center'; 

  // Ensuring each input field remains on the same line as its label
  var inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
      input.style.marginRight = '10px'; // Adds some spacing to the right of each input field
  });
   // Initially hiding the add column and add row buttons
   document.getElementById('b2').style.display = 'none';
   document.getElementById('b3').style.display = 'none';
};
