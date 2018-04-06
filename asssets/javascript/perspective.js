


// Analize content as you type

function clear () {

        let contentToAnalize = ""
}



$('#textarea1').keyup(function(){
   contentToAnalize = $('#textarea1').val();
//    console.log(contentToAnalize);
}); 

        

$('#check-button').on('click',function(){
    
event.preventDefault();

// This Ajax call gives us the analized content from the perpective API

    $.ajax({
    contentType: "application/json",
    data: JSON.stringify({
            comment: {
                    text: contentToAnalize
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
            console.log(response.attributeScores.TOXICITY.summaryScore.value);

            let toxicity = response.attributeScores.TOXICITY.summaryScore.value

            let toxicityPercentage = (toxicity*100).toFixed(0)

            console.log(toxicityPercentage)

            $('#percentage').text(toxicityPercentage + "% Toxic")
    }

   
});

$('#textarea1').clear();

});