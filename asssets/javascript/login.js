'use strict';
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
            database.ref().on("child_added", function(childSnapshot) {
                var knownUsers = childSnapshot.val().username;
                console.log(knownUsers);
                if ( $('#userName').val().toLowerCase().trim()!== knownUsers){
                    $('#sign-up').css("visibility","visible");
                    //add to local storage
                    localStorage.currentUser = $('#userName').val().toLowerCase().trim();
                    console.log("current user",localStorage.currentUser)
                 }
                 else {
                    $('#requirement1').text('Username is unavailable.')
                 }
            });
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
                    //add to local storage
                    localStorage.currentUser = $('#userName2').val().toLowerCase().trim();
                    console.log("current user",localStorage.currentUser)

                    //console.log('valid user')

                    $("#logIn").attr("href", "slackContent.html");
                }
                else{
                    $('#invalid').css("visibility","visible");
                    //console.log('error')
                }
            })
        });