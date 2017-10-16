$(document).ready(function() {
  $('.square').on('click', function(event){
    alert('add symbol')

  var squareSelected = $(this);

  if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
      alert('this square has already been selected ')
  }
  });
});
