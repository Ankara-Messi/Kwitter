// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC7gt3K68268a6TgKUxA3yp2cnulw2SKYQ",
      authDomain: "chathubapp-1aca2.firebaseapp.com",
      databaseURL: "https://chathubapp-1aca2-default-rtdb.firebaseio.com",
      projectId: "chathubapp-1aca2",
      storageBucket: "chathubapp-1aca2.appspot.com",
      messagingSenderId: "329494658748",
      appId: "1:329494658748:web:3dcbb15a2c1703bf005ab9"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localstorage.getItem("user_name")
    room_name=localstorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
        
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
})

document.getElementById("msg").value = "";
}

//End code
      } });  }); }
getData();
