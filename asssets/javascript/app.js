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

// Slack Page
    var slackStuff = {
        has_more : false,
        messages:[
        {text: "added an integration to this channel: <https://ton…heck-your-self.slack.com/services/BA2CTDWTT|Tone>", bot_id: "BA2CTDWTT", bot_link: "<https://tone-check-your-self.slack.com/services/BA2CTDWTT|Tone>", type: "message", subtype: "bot_add"},
        {text: "added an integration to this channel: <https://ton…heck-your-self.slack.com/services/BA28BTCDN|Tone>", bot_id: "BA28BTCDN", bot_link: "<https://tone-check-your-self.slack.com/services/BA28BTCDN|Tone>", type: "message", subtype: "bot_add"},
        {text: "added an integration to this channel: <https://ton…heck-your-self.slack.com/services/BA2UVRGDQ|Tone>", bot_id: "BA2UVRGDQ", bot_link: "<https://tone-check-your-self.slack.com/services/BA2UVRGDQ|Tone>", type: "message", subtype: "bot_add"},
        {text: "All Your Base", bot_id: "B9ZKDAUTX", type: "message", subtype: "bot_message", ts: "1523054094.000342"},
        {text: "added an integration to this channel: <https://ton…heck-your-self.slack.com/services/BA3H8DQG7|Tone>", bot_id: "BA3H8DQG7", bot_link: "<https://tone-check-your-self.slack.com/services/BA3H8DQG7|Tone>", type: "message", subtype: "bot_add"},
        {text: "added an integration to this channel: <https://ton…heck-your-self.slack.com/services/BA188M5UH|Tone>", bot_id: "BA188M5UH", bot_link: "<https://tone-check-your-self.slack.com/services/BA188M5UH|Tone>", type: "message", subtype: "bot_add"},
        {text: "added an integration to this channel: <https://ton…heck-your-self.slack.com/services/BA1U68H7X|Tone>", bot_id: "BA1U68H7X", bot_link: "<https://tone-check-your-self.slack.com/services/BA1U68H7X|Tone>", type: "message", subtype: "bot_add"},
        {text: "ttt", bot_id: "B9ZKDAUTX", type: "message", subtype: "bot_message", ts: "1522898467.000043"},
        {text: "test", bot_id: "B9ZKDAUTX", type: "message", subtype: "bot_message", ts: "1522898305.000118"},
        {type: "message", user: "U9YQ9BQAU", text: "hello", ts: "1522886843.000203"},
        {type: "message", user: "U9YQ9BQAU", text: "test hello", ts: "1522886841.000201"},
        {type: "message", user: "U9YQ9BQAU", text: "hello", ts: "1522886834.000047"}]
    };
   


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

//let example = userInput;

//moment age verification/login determine-d-o-b-branch

//moment();
//console.log(moment().format("MM-DD-YYYY"));
//set date against which age will be determined
let date = moment().unix();
console.log(date);

//set age limit
let ageLimit = moment().subtract(13, 'years').unix();
console.log(ageLimit);

//grab age of user
$("#dOB").change(function(){
    let dOB = this.value;
    console.log(dOB);
    //convert dOB to unix
    let unixDOB = Date.parse(dOB)/1000;
    console.log(unixDOB);
    //subtract unixDOB from date to determine user age
    let userAge = date - unixDOB;
    console.log(userAge);
    //if userAge is >= ageLimit, user can continue
});

//click agree to load UI
//$(".agree").load("#");

 
//let example = userInput;
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
        const message = $('#textarea1').val();
        $.ajax({
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: `https://slack.com/api/chat.postMessage${SLACK_TOKEN}&channel=C9Z8JTEMA&text=${message}&as_user=false&username=${username}&pretty=1`
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
       }
