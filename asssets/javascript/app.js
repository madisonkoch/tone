'use strict'
//Index / Login Page
    //Sign Up Modal
        var elem3 = document.querySelector('#modal1');
        var instance3 = M.Modal.init(elem3, {
            dismissable: false
        });
        // If agree is checked
            $('#checkbox-agree').on('click',function(){
                var checkBox = document.getElementById("checkbox-agree").value;
                console.log(checkBox);
                $('#sign-up-slack').css("visibility","visible")
            });
    //Sign In Modal
        var elem4 = document.querySelector('#modal2');
        var instance3 = M.Modal.init(elem4, {
            dismissable: false
        });
//Facebook Connection
    // $('.fb-login-button').on('click',function(){
    //     FB.login(function(response){
    //         if(response === 'connected'){
    //         alert("login worked");
    //         }else if(response === 'not_authorized'){
    //         alert('You are allready logged in');
    //         }else{
    //             alert('Totaly not logged in')
    //         }
    //     });
    // });
        
    // $('.test-btn').on('click', function(){
    //     $('body').append('test');
    //     FB.api('/me', {fields: 'last_name'}, function(response) {
    //         $('body').append(response);
    //         console.log(response);
    //     });
    //     // for this next step to work need to ste up auth token
    //     var body = 'Testing';
    //     FB.api('/me/feed', 'post', { message: body }, function(response) {
    //         if (!response || response.error) {
    //         alert('Error occured');
    //         } else {
    //         alert('Post ID: ' + response.id);
    //         }
    //     });

    // });
      
    // $('.test-btn').on('click', function(){
    //     $('body').append('test');
    
    //     FB.api(
    //         '/me',
    //         'GET',
    //         {},
    //         function(response) {
    //         console.log(response)
    //         }
    //     );
        

    // }); 

    // //moment age verification/login



    // let example = userInput;


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
//moment age verification/login
let example = userInput;
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

//Facebook Content
    // Floating Action Button(s)
        //Setup Menu FAB
        var elem = document.querySelector('.fixed-action-btn');
        var instance = M.FloatingActionButton.init(elem, {
            hoverEnabled: false
        });
    //Image Carousel
        var elem2 = document.querySelector('.carousel');
        var instance2 = M.Carousel.init(elem2, {
            fullWidth: false
        });

// Slack 
    $('.slack-submit').on('click', function(){
        const message = $('.slack-message').val();
        $.ajax({
            data: 'payload=' + JSON.stringify({
               
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
           console.log(SLACK_URL + SLACK_TOKEN +  SLACK_CHANNEL );
        $.ajax({
            type: 'GET',
            url: SLACK_URL + SLACK_TOKEN + SLACK_CHANNEL,
            success: function(data) {
                console.log(data);
            },
            error: function(data){
                console.log(data);
            }
          })

        // $.ajax({
        //     type:'GET',
        //     url: 'https://slack.com/api/oauth.access',
        //     data: {
        //      client_id: '',
        //      client_secret: '',
        //      code: ''
        //     },
        //     success: function(data){
        //         console.log(data);
        //     },
        //     error: function(data){
        //         console.log(data);
        //     }
        // })
       
       }
