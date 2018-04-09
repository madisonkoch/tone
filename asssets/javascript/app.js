'use strict'

let slackInfomation = null;


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
   

//add user info

$("#sign-up").on("click", function(e){
    //moment age verification/login
    //grab and store user name
    let userName = $("#userName").val().trim();

    //grab password
    let password = $("#password").val().trim();

    let dOB = $("#dOB").val();

        //push to firebase
        database.ref().push({
            username: userName,
            password: password

        });
    });

    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
        //store snapshot value
        let sv = snapshot.val();
    
        let userNAme = snapshot.val().username;
        let passWord = snapshot.val().password;
        //console.log(userNAme);
    });
    //moment age verification/login determine-d-o-b-branch
    //moment();
    //console.log(moment().format("MM-DD-YYYY"));
    //set date against which age will be determined
    let date = moment().unix();
    //console.log(date);

    //set age limit
    let ageLimit = moment().subtract(13, 'years').unix();
    //console.log(ageLimit);

    //grab age of user
    $("#dOB").change(function(){
        let dOB = this.value;
        console.log(dOB);
        //convert dOB to unix
        let unixDOB = Date.parse(dOB)/1000;
        //console.log(unixDOB);
        //subtract unixDOB from date to determine user age
        let userAge = date - unixDOB;
        //console.log(userAge);
    });

        //if userAge is >= ageLimit, user can continue

    $(':checkbox').on('click',function(){
        let checkBox = document.getElementById("checkbox-agree");
        //console.log(checkBox);
        // If agree is checked
        if ($(':checkbox').is(':checked')) {
        $('#sign-up-slack').css("visibility","visible")}
        //else agree is unchecked
        else if ($(':checkbox').is(':empty')) {
        $('#sign-up-slack').css("visibility","hidden")}
    });
 
const username = 'test'
const UID = 'UA0ATEGTG';

// Slack event Listners
$('.getSlack').on('click', getMessageFromSlack);

$('.slack-submit').on('click', function(){
    event.preventDefault();
    const message = $('#textarea1').val();
    postMessageToSlack(message);
    })

/**
 *  This will pull the last 100 messages from slack
 * 
 *  @method getMessageFromSlack
 * 
 */
function getMessageFromSlack() {
$.ajax({
    type: 'GET',
    url: SLACK_URL + SLACK_TOKEN + SLACK_CHANNEL,
    success: function(data) {console.log(data); slackInfomation = data.messages },
    error: function(data){console.log(data);}
    })
}

/**
 * This will gather all the infomation on the user from slack
 * 
 * @param {*} UID user id from slack
 * @return jsoon Object
 * Main list of the key values that will be most used
 *  object profile { display_name,display_name_normalized,image_24,image_32,image_48,image_72,image_192,image_512,
 *  real_name,real_name_normalized}
 */
function gatherUserInfomation(UID) {
$.ajax({
    method:'GET',
    url: `https://slack.com/api/users.profile.get${SLACK_TOKEN}&user=${UID}&pretty=1`,
    success: function(data){
        console.log(data)
        // Will need to call the function to add to the Page in here  
        return data.profile;
    },
    error:function(error){
        console.log('error Unable to gather infomation with the given user ID: ' ,error)}
    });
}

/**
 * This will take the given message and post it to slack
 * 
 * @param {*} message string message you want posted to slack
 * @param username given user name you want to post as
 */
function postMessageToSlack(message, username = 'Tone') {
        $.ajax({
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: `https://slack.com/api/chat.postMessage${SLACK_TOKEN}&channel=C9Z8JTEMA&text=${message}&as_user=false&username=${username}&pretty=1`,
            error:function(error){console.log('unable to post message to slack: ' , error)}
        });
}

/**
 * Will append a single message to the view
 * 
 * @param {*} user 
 * @param {*} message 
 */
function displayMessageToApp(user ,message) {
    console.log(message)
    const template = `<div class="user-message">
        <div class="row message-head">
            <div class="chip username"><img class="chip-img" src="https://static01.nyt.com/images/2018/02/11/realestate/11dogs-topbreeds-Chihuahua/11dogs-topbreeds-Chihuahua-master495.jpg" alt="Contact Person">
            <span>${user}: </span> ${message}
            </div>
            <div class="right toxicity"> % toxic</div>
        </div>
        <p class="row message-text"> This may be offensive...</p>
        <div  class="right timestamp">Time AMPM</div>
    </div>`;
    $('#all-messages').append(template);
}

/**
 * Display Last message
 * 
 */
function displayLastMessage() {
    let text = slackInfomation[0].text;
    //aditonal User varification to see if we need more user data can be done here
    const user = slackInfomation[0].username || slackInfoation[0].user
    text = checkIfTextMessageIsImgUrl(text)
    displayMessageToApp(user, text);
}

/**
 * This will diaply all the message received on the screen (currenlty the last 100)
 * 
 * 
 */
function displayAllMessages() {
    for(let i = slackInfomation.length -1; i => 0; i--){
        let text = slackInfomation[i].text;
        //aditonal User varification to see if we need more user data can be done here
        const user = slackInfomation[i].username || slackInfomation[i].user || slackInfomation[i].bot_id
        text = checkIfTextMessageIsImgUrl(text);
        displayMessageToApp(user, text);
    }
}

/**
 * This will check if the image is a ULR img from slack if it is then it will convert the text to an html string
 * 
 * @method checkIfTextMessageIsImgUrl
 * @param {*} text 
 * @return {*} text || html element
 */
function checkIfTextMessageIsImgUrl(text) {
    if(! text.charAt(0) === '<'){

        return text;
     }
     text = text.replace('<', '');
     text = text.replace('>', '');
     if(text.includes('.gif')){
        const imageElement = `<img src='${text}' >`;

        return imageElement;
     }

    return text;
 }


$('.displaymessage').on('click', displayAllMessages);