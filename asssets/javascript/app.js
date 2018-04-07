'use strict'
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

//Content Pages
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

       var elem3 = document.querySelector('#modal1');
       var instance3 = M.Modal.init(elem3, {
           dismissable: false
       });
       var elem4 = document.querySelector('#modal2');
       var instance3 = M.Modal.init(elem4, {
           dismissable: false
       });

