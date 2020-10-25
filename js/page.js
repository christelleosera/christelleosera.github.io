$(document).ready(function() {

  $('input[type="text"]').focus();

  function get_input(e){
    if(e.which == 13){
      var destination = $('input[type="text"]').val().toLowerCase();
      console.log(destination);

      switch(destination){
        case 'menu':
          $('.tml-box .command').html('<div class="response">Type [command] + ENTER<br/><br/>\'resume\' -- show resume<br/>\'contact\' -- contact information<br/>\'about\' -- information about this site</div>');
          $('.tml-box .command').append('<br/>guest:~$ <input id="input_cmd" type="text" maxlength="30" autofocus>');
          $('input[type="text"]').focus();
          $('input[type="text"]').keyup(get_input);
          break;
        case 'about':
          $('.tml-box .command').html('<div class="response">Welcome to my personal website! I\'m Christelle Osera, an experienced Software Engineer. I graduated with a Bachelor\'s degree in Computer Science and have been working in the technology industry since. For more details, my resume is available through this site and you can see my contact information as well.</div>');
          $('.tml-box .command').append('<br/>guest:~$ <input id="input_cmd" type="text" maxlength="30" autofocus>');
          $('input[type="text"]').focus();
          $('input[type="text"]').keyup(get_input);
          break;
        case 'resume':
          $('.tml-box .command').html('<div class="response"><strong>Resume link:</strong> <a href="https://christelle-osera.s3-us-west-2.amazonaws.com/Resume_ChristelleOsera.pdf" target="_blank">Click here</a></div>');
          $('.tml-box .command').append('<br/>guest:~$ <input id="input_cmd" type="text" maxlength="30" autofocus>');
          $('input[type="text"]').focus();
          $('input[type="text"]').keyup(get_input);
          break;
        case 'contact':
          $('.tml-box .command').html('<div class="response">\
  <strong>Email: </strong> \
  <a href="mailto:christelle.osera@gmail.com" target="_blank">christelle.osera@gmail.com</a>\
  <br/>\
  <strong>Phone: </strong> \
  +1 253 777 9506\
  <br/>\
  <strong>Links: </strong> \
  <span id="social-icons">\
    <a target="_blank" href="https://www.linkedin.com/in/christelleosera/"><span class="social-icon"><i class="fa fa-linkedin-square"></i></span></a>\
    <a target="_blank" href="https://github.com/christelleosera"><span class="social-icon"><i class="fa fa-github-square"></i></span></a>\
    <a target="_blank" href="https://plus.google.com/u/0/+ChristelleOsera26"><span class="social-icon"><i class="fa fa-google-plus-square"></i></span></a>\
    <a target="_blank" href="http://steamcommunity.com/id/tellelelele"><span class="social-icon"><i class="fa fa-steam-square"></i></span></a>\
  </span>\
</div>');
          $('.tml-box .command').append('<br/>guest:~$ <input id="input_cmd" type="text" maxlength="30" autofocus>');
          $('input[type="text"]').focus();
          $('input[type="text"]').keyup(get_input);
          break;
      }
    }
  }

  $('input[type="text"]').keyup(get_input);


// get array of section ids, that exist in DOM
// var sectionArray = [];
// // We are using <section> here, you can use <div> or <article> if you want
// $('section').each( function(i,e) {
//     //you can use e.id instead of $(e).attr('id')
//     sectionArray.push($(e).attr('id'));
});
