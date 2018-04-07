

  

  // Analize content as you type
  
  
  
  let contentToAnalize = ""
  
  
  
  $('#textarea1').keyup( function(){
  contentToAnalize = $('#textarea1').val();
  
  // timeout so we don't jam the perspective API
  
  setTimeout( 
  
  // This Ajax call gives us the analized content from the perpective API
  
  function(){ $.ajax({
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
//       console.log(response);
//       console.log(response.attributeScores.TOXICITY.summaryScore.value);
  
      let toxicity = response.attributeScores.TOXICITY.summaryScore.value
  
      let toxicityPercentage = (toxicity*100).toFixed(0)
  
//       console.log(toxicityPercentage)
  
      $('#percentage').text(toxicityPercentage + "% Toxic")
  
  } 
  
  
  }); }
  
  , 3000);
  
  }  );
    