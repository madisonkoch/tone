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

//let example = userInput;

/*$ curl -H "Content-Type: application/json" --data \
    '{comment: {text: "what kind of idiot name is foo?"},
      languages: ["en"],
      requestedAttributes: {TOXICITY:{}} }' \
    https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyCY4GjmWVO7suPMSdD-V-Pm8tlExBkIFJE*/

    $.ajax({
        contentType: "application/json",
        data: JSON.stringify({
                comment: {
                        text: "what a lovely hat"
                },
                languages: ["en"],
                requestedAttributes: {
                        TOXICITY: {}
                }
        }),
        method: 'POST',
        url: 'https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyC_mGbSsEJnpL8tD7BnO5jRXS_uTPMyFwE',
        success: function(response) {
                console.log(response);
        }
});
