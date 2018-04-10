'use strict';

let slackInfomation = null;
let  username = null;

//FIREBASE CONNECTION
    const config = {
        apiKey: "AIzaSyA53y0mbDf5GvAuV0hgH0fREI2z0qVxwmA",
        authDomain: "firstproject-914b7.firebaseapp.com",
        databaseURL: "https://firstproject-914b7.firebaseio.com",
        projectId: "firstproject-914b7",
        storageBucket: "firstproject-914b7.appspot.com",
        messagingSenderId: "458050612081"
    };
    firebase.initializeApp(config);

    const database = firebase.database();

//INDEX / LOGIN PAGE
    //MODAL TRIGGERS
        var elem3 = document.querySelector('#modal1');
        var instance3 = M.Modal.init(elem3, {
            dismissable: false
        });

        var elem4 = document.querySelector('#modal2');
        var instance3 = M.Modal.init(elem4, {
            dismissable: false
        });
    //SIGN UP MODAL
        $("#sign-up").on("click", function(){
            var userName = $("#userName").val().toLowerCase().trim();
            var password = $("#password").val().toLowerCase().trim();

            var newUser = {
                username : userName,
                password : password
            }

            database.ref().push(newUser);

        });

        //Age of User
        let userAge;
        $('#dOB').change(function(){
            let DOB = this.value;
            userAge = moment().diff(moment(DOB, "YYYY-MM-DD"), 'years');
                //console.log(userAge);
            return(userAge);
        });

// hide sign up button
        //Sign Up requirements met?
        $('#checkbox-agree').on('click',function(){
            // let checkBox = document.getElementById("checkbox-agree");
                //console.log(checkBox);
            // Requirements met
            if ($(':checkbox').is(':checked') && $('#userName').val() && $('#password').val() && userAge >= 13) {
                $('#sign-up-slack');
                $('#sign-up').css("visibility","visible");
            }
            //At least 1 requirement not met
            else {
                $('#sign-up').css("visibility","hidden")
                if (userAge < 13){
                    $('#requirement3').text('Must be over 13 years old')
                    // console.log("Must be over 13 years old");
                }
                else if (!$('#userName').val()){
                    $('#requirement1').text('Username is required')
                    // console.log("Username is required");
                }
                else if (!$('#password').val()){
                    $('#requirement2').text('Password is required')
                    // console.log("Password is required");
                }
            }
        });
        //SIGN IN MODAL
            //check username & password -- allow login?
            $("#logIn").on("click", function(){
                let status;
                var userInput = $('#userName2').val().toLowerCase().trim() + $('#password2').val().toLowerCase().trim();
                database.ref().on("child_added", function(childSnapshot) {
                    var userInfo = childSnapshot.val().username + childSnapshot.val().password;
                    console.log(userInfo);
                    if (userInput === userInfo){
                        status = true;
                        //console.log('valid user')
                        $("#logIn").attr("href", "slackContent.html");
                    }
                    else{
                        $('#invalid').css("visibility","visible");
                        //console.log('error')
                    }
                })
            });

// SLACK PAGE
    //RESPONSIVE DESIGN
        // Keep content in window width/height
        $(document).ready(function() {
            function setHeight() {
                let windowHeight = $(window).innerHeight();
                $('.content-main').css('height', windowHeight);
                let contentHeight = windowHeight - $('footer').height();
                $('#allMessages').css('height', contentHeight);
                $('#scroll-space').css('height', $('header').height()+25);

            };
            setHeight();
            function setWidth() {
                let windowWidth = $(window).innerWidth();
                $('html').css('width', windowWidth);
                $('header').css('width', windowWidth);
                $('body').css('width', windowWidth);
                $('main').css('width', windowWidth);
                $('.content-main').css('width', windowWidth);
                $('footer').css('width', windowWidth);
            };
            setWidth();
            $(window).resize(function() {
                setHeight();
                setWidth();
            });
        });
        //Scroll to bottom of slack messages
        function scrollToBottom(){
            var allMessages = document.getElementById('allMessages');
                allMessages.scrollTop = allMessages.scrollHeight  
        };

    //PERSPECTIVE API
      let contentToAnalize = ""
      // reset function
        $('#textarea1').keyup( function(){
            contentToAnalize = $('#textarea1').val();
            // timeout so we don't jam the perspective API
            if( $(this).val().length === 0 ) {
                $('#percentage').text('Check Yourself')
            }
            else {
                setTimeout( 
                // This Ajax call gives us the analized content from the perpective API
                  function(){
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
                            //console.log(response);
                            //console.log(response.attributeScores.TOXICITY.summaryScore.value);
                            let toxicity = response.attributeScores.TOXICITY.summaryScore.value
                            let toxicityPercentage = (toxicity*100).toFixed(0)
                            //console.log(toxicityPercentage)                         
                            $('#percentage').text(toxicityPercentage + "% Toxic");
                        } 
                    });
                } , 3000);  
            };
        });
        
    //SLACK API
        // Slack event Listners
        // $('.getSlack').on('click', getMessageFromSlack);

        $('.slack-submit').on('click', function(){
            event.preventDefault();
            const message = $('#textarea1').val();
            postMessageToSlack(message);
            gatherBotInfomation('BA3229MDG', message);
            })

        $(document).ready(function(){
            getMessageFromSlack();
            setTimeout(
                function(){
                    displayAllMessages();                    
                },300
            );
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
            success: function(data) {
                console.log(data);
                slackInfomation = data.messages },
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
        let I;

        function gatherUserInfomation(UID, message) {
        $.ajax({
            method:'GET',
            url: `https://slack.com/api/users.profile.get${SLACK_TOKEN}&user=${UID}&pretty=1`,
            success: function(data){
                const user = data.profile.display_name || data.profile.real_name;
                const icon = data.profile.image_48;
                I = $('.user-message').length;
                displayCustomMessageToApp(user , message, icon, I)
            },
            error:function(error){
                console.log('error Unable to gather infomation with the given user ID: ' ,error)}
            });
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
        function gatherBotInfomation(bot_Id, message) {
            $.ajax({
                method:'GET',
                url: `https://slack.com/api/bots.info${SLACK_TOKEN}&bot=${bot_Id}&pretty=1`,
                success: function(data){
                    console.log(data)
                    const user = username || data.bot.name;
                    const icon = data.bot.icons.image_36;
                    I = $('.user-message').length;
                    displayCustomMessageToApp(user , message, icon, I)
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
        function displayMessageToApp(user ,message ,i) {
            console.log(message)
            const template = `<div class="user-message">
                <div class="row message-head">
                    <div class="chip username"><img class="chip-img" src="https://static01.nyt.com/images/2018/02/11/realestate/11dogs-topbreeds-Chihuahua/11dogs-topbreeds-Chihuahua-master495.jpg" alt="Contact Person">
                    <span>${user}</span>
                    </div>
                    <div class="right toxicity" id="toxicity${i}"></div>
                </div>
                <p class="row message-text">${message}</p>
                <div  class="right timestamp">Time AMPM</div>
            </div>`;
            $('#allMessages').append(template);
            scrollToBottom();
        }

         /**
         * Will append a single customized message to the view
         * 
         * @param {*} user 
         * @param {*} message 
         */
        function displayCustomMessageToApp(user ,message, icon, I) {
            let time;
            if (moment(slackInfomation[I].ts,"X").isSame(moment().startOf('day'), 'd')){
                time = moment(slackInfomation[I].ts,"X").format("h:mm a");    
            }
            else {
                time = moment(slackInfomation[I].ts,"X").format(" MM/DD/YY h:mm a");
            }
            const template = `<div class="user-message">
              <div class="row message-head">
                    <div class="chip username"><img class="chip-img" src="${icon}" alt="Contact Person">
                        <span>${user}</span>
                    </div>
                    <div class="right toxicity" id="toxicity${I}"></div>
                </div>
                <p class="row message-text">${message}<h8 class="right timestamp">${time}</h8></p>
            </div>`;
            $('#allMessages').append(template);
            $.ajax({
                contentType: "application/json",
                data: JSON.stringify({
                comment: {
                text: message
                },
                languages: ["en"],
                requestedAttributes: {
                TOXICITY: {}
                }
                }),
                method: 'POST',
                url: 'https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyC_mGbSsEJnpL8tD7BnO5jRXS_uTPMyFwE',
                success: function(response) {
                //console.log(response);
                //console.log(response.attributeScores.TOXICITY.summaryScore.value);
                let tox = response.attributeScores.TOXICITY.summaryScore.value
                let toxPercentage = (tox*100).toFixed(0)
                //console.log(toxPercentage,"% Toxic")
                $(`#toxicity${I}`).append(toxPercentage+"% Toxicity")
                } 
                });
                scrollToBottom();
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
            for(let i = slackInfomation.length -1; i >= 0; i--){
                let text = slackInfomation[i].text;
                text = checkIfTextMessageIsImgUrl(text);
                //aditonal User varification to see if we need more user data can be done here
                if(slackInfomation[i].user){
                    gatherUserInfomation(slackInfomation[i].user, text);
                }else{
                    console.log('bot Id', slackInfomation[i].bot_id )
                    gatherBotInfomation(slackInfomation[i].bot_id, text);
                }
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
            if(text.includes('.gif')||text.includes('.jpeg')||text.includes('.bmp')||text.includes('.png')||text.includes('.tiff')||text.includes('.jpg')){
                const imageElement = `<img class="message-img" src='${text}' >`;
                return imageElement;
            }

            return text;
        }


        // $('.displaymessage').on('click', displayAllMessages);
    
   
        gatherUserInfomation('U9ZHFFZ43')

