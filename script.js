
const input = document.getElementById("profile-name").value;
const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", searchProfile);

function searchProfile(){
    console.log("namaste");
}

let api = "https://api.github.com/user/";

let fetch = document.createElement("script");
fetch.src = `https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js`;

fetch.integrity =   `ha512-DZqqY3PiOvTP9HkjWg06ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ ==`;