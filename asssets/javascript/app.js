'use strict'


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

$('.event').on('click', function(){
    alert('test')
    $.ajax({
        url:'http://api.eventful.com/rest/events/search?app_key=hBd8FWcZ33KgBkBC&where=32.746682,-117.162741&within=25',
        method:'GET',
        success:function(data){console.log(data)},
        error:function(data){console.log(data)}
    })
})