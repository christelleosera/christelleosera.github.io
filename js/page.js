$(document).ready(function() {

  $('input[type="text"]').focus();

  $('input[type="text"]').keyup(function(e){
    if(e.which == 13){
      // $('.command').hide();
      var destination = $('input[type="text"]').val().toLowerCase();;
      console.log(destination);

      switch(destination){
        case 'menu':
          $('.tml-box .command').append('<div class="response">Type [command] + ENTER<br/><br/>\'about\' -- basic info<br/>\'resume\' -- show resume<br/>\'contact\' -- contact information</div>');
          break;
        case 'about':
          $('.tml-box').text('about');
          break;
        case 'resume':
          $('.tml-box .command').append('<div class="response"><a href="https://drive.google.com/file/d/0ByLWZ6t0I7mSS1ByX01ITmN2eDA/view" target="_blank">Resume link (opens in Google Drive)</a></div>');
          break;
        case 'contact':
          $('.tml-box').text('contact');
          break;
      }
    }
  });


// get array of section ids, that exist in DOM
// var sectionArray = [];
// // We are using <section> here, you can use <div> or <article> if you want
// $('section').each( function(i,e) {
//     //you can use e.id instead of $(e).attr('id')
//     sectionArray.push($(e).attr('id'));
});