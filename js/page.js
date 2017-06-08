$(document).ready(function() {

  $('input[type="text"]').focus();

  $('input[type="text"]').keyup(function(e){
    if(e.which == 13){
      // $('.command').hide();
      var destination = $('input[type="text"]').val().toLowerCase();;
      console.log(destination);

      switch(destination){
        case 'menu':
          $('.tml-box .command').append('<div class="response">Type [command] + ENTER<br/><br/>\'about\' -- </div>');
          break;
        case 'about':a
          $('.tml-box').text('about');
          break;
        case 'resume':
          $('.tml-box').text('resume');
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