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
       }
