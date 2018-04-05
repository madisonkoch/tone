'use strict'
//Facebook Connection
    $('.fb-login-button').on('click',function(){
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
        FB.api('/me/feed', 'post', { message: body }, function(response) {
            if (!response || response.error) {
            alert('Error occured');
            } else {
            alert('Post ID: ' + response.id);
            }
        });

    });
      
$('.test-btn').on('click', function(){
    $('body').append('test');
  
    FB.api(
        '/me',
        'GET',
        {},
        function(response) {
           console.log(response)
        }
      );
      

})

//moment age verification/login



//let example = userInput;

/*$ curl -H "Content-Type: application/json" --data \
    '{comment: {text: "what kind of idiot name is foo?"},
      languages: ["en"],
      requestedAttributes: {TOXICITY:{}} }' \
    https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyCY4GjmWVO7suPMSdD-V-Pm8tlExBkIFJE*/

//     $.ajax({
//         contentType: "application/json",
//         data: JSON.stringify({
//                 comment: {
//                         text: "what a lovely hat"
//                 },
//                 languages: ["en"],
//                 requestedAttributes: {
//                         TOXICITY: {}
//                 }
//         }),
//         method: 'POST',
//         url: `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${API_PERSPECTIVE_KEY}`,
//         success: function(response) {
//                 console.log(response);
//         }
// });

//Content Pages
    // Floating Action Button(s)
        //Setup Menu FAB
        var elem = document.querySelector('.fixed-action-btn');
        var instance = M.FloatingActionButton.init(elem, {
            hoverEnabled: false
        });
    //Image Carousel
    var elem2 = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem2, {
        fullWidth: false
    });

    $('.slack-submit').on('click', function(){
        const message = $('.slack-message').val();
        $.ajax({
            data: 'payload=' + JSON.stringify({
                "Authorization": `Bearer ${API_SLACK_TOKEN}`,
                "text": message,
                "as_user": true,
                'username':'Evryone'
            }),
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: 'https://hooks.slack.com/services/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'

        });
       })

       $('.getSlack').on('click', getMessageFromSlack);

       function getMessageFromSlack(){
        // $.ajax({
        //     type: 'GET',
        //     url: 'https://slack.com/api/channels.history?token=xoxp-338977510529-338825398368-338834002208-4a73e128174bb575ed0bcafb9baf6560&channel=C9Z8JTEMA',
        //     async: false,
        //     success: function(data) {
        //         console.log(data);
        //     },
        //     error: function(data){
        //         console.log(data);
        //     }
        //   })

        $.ajax({
            type:'GET',
            url: 'https://slack.com/api/oauth.access',
            data: {
             client_id: '',
             client_secret: '',
             code: ''
            },
            success: function(data){
                console.log(data);
            },
            error: function(data){
                console.log(data);
            }
        })
       
       }

     
