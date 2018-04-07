'use strict'

//firebase
var config = {
    apiKey: "AIzaSyBw_XTxT6R_bfFIQCIsvAnbP3lUKaGPogo",
    authDomain: "tone-app-199717.firebaseapp.com",
    databaseURL: "https://tone-app-199717.firebaseio.com",
    projectId: "tone-app-199717",
    storageBucket: "tone-app-199717.appspot.com",
    messagingSenderId: "618773555838"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

//Index / Login Page
    //Sign Up Modal
        var elem3 = document.querySelector('#modal1');
        var instance3 = M.Modal.init(elem3, {
            dismissable: false
        });
        // If agree is checked
        
            $(':checkbox').on('click',function(){
                let checkBox = document.getElementById("checkbox-agree");
                //console.log(checkBox);
                if ($(':checkbox').is(':checked')) {
                $('#sign-up-slack').css("visibility","visible")}
                else if ($(':checkbox').is(':empty')) {
                $('#sign-up-slack').css("visibility","hidden")}
            });
        //else agree is unchecked
           
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

//add user info

$("#").on("click", function(e){});
    e.preventDefault()

    //moment age verification/login
    //grab and store user name
    let userName = $("#userName").val().trim();

    //grab password
    let password = $("#password").val().trim();

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
        const message = $('#texarea1').val();
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


const UID = 'UA0ATEGTG';
       function getRealUserName(UID){
        $.ajax({
          method:'GET',
          url: `https://slack.com/api/users.profile.get?${SLACK_TOKEN}&user=${UID}&pretty=1`,
          sucess: function(data){
              console.log(data)
        }
        })
      }
      


getRealUserName(UID);