
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

    user_name = localStorage.getitem("user_name");
    document.getElementById("user_name").innerHTML =
    "Welcome " + user_name + "!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebaseConfig.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("Room Name - " + Room_name);
     row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";

}
