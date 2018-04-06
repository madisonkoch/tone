window.fbAsyncInit = function() {
  FB.init({
    appId      : '359010251274036', 
    xfbml      : true,
    version    : 'v2.12'
  });
  FB.AppEvents.logPageView();
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  // //Facebook Connection
//     $('.fb-login-button').on('click',function(){
//         FB.login(function(response){
//             if(response === 'connected'){
//             alert("login worked");
//             }else if(response === 'not_authorized'){
//             alert('You are allready logged in');
//             }else{
//                 alert('Totaly not logged in')
//             }
//         });
//     });
        
//     $('.test-btn').on('click', function(){
//         $('body').append('test');
//         FB.api('/me', {fields: 'last_name'}, function(response) {
//             $('body').append(response);
//             console.log(response);
//         });
//         // for this next step to work need to ste up auth token
//         var body = 'Testing';
//         FB.api('/me/feed', 'post', { message: body }, function(response) {
//             if (!response || response.error) {
//             alert('Error occured');
//             } else {
//             alert('Post ID: ' + response.id);
//             }
//         });

//     });
      
// $('.test-btn').on('click', function(){
//     $('body').append('test');
  
//     FB.api(
//         '/me',
//         'GET',
//         {},
//         function(response) {
//            console.log(response)
//         }
//       );
      

// })