



let contentToAnalize = ""

// This Ajax call gives us the analized content from the perpective API




$.ajax({
    contentType: "application/json",
    data: JSON.stringify({
            comment: {
                    text: "How can you be so stupid?"
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

            let toxicityPercentage = (toxicity*100).toFixed(2)

            console.log(toxicityPercentage)

            $('#percentage').text(toxicityPercentage + "% Toxic")
    }
});
