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
  
    FB.api(
        "/page-id/feed",
        function (response) {
            console.log(response)
          if (response && !response.error) {
            /* handle the result */
          }
        }
    );

})
