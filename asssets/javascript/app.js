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
    FB.api('/me', {fields: 'last_name'}, function(response) {
        $('body').append(response);
        console.log(response);
      });
      // for this next step to work need to ste up auth token
      var body = 'Testing';
      FB.api( '/user-id/feed', 'post', { message: body }, function(response) {
       
        
          alert('Post ID: ' + response.id);
        
      });

})
