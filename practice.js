
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBI_WK7GGz_Gh1pFBvkFd4a9FRCVr5rrwQ",
    authDomain: "kwitter-33f73.firebaseapp.com",
    databaseURL: "https://kwitter-33f73-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-33f73",
    storageBucket: "kwitter-33f73.appspot.com",
    messagingSenderId: "258758984610",
    appId: "1:258758984610:web:16aabbe3b9ac3a91e2a8fb"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_user(){

    user_name = document.getElementById("add_user").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
    
}