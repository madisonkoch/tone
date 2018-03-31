$(".fb-login-button").on('click',function(){
    FB.login(function(response){
        if(response === 'connected'){
        alert("login worked");
        }else if(response === 'not_authorized'){
        alert('You are allready logged in');
        }else{
            alert('Totaly not logged in')
        }
    });

    


});
      
$('.test-btn').on('click', function(){
    $('body').append('test');
  
      FB.api( '/user-id/feed', 'post', { message: body }, function(response) {
          console.log(response)
        if (!response || response.error) {
          alert('Error occured');
        } else {
          alert('Post ID: ' + response.id);
        }
      });

})
