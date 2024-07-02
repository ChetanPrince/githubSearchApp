const input = document.getElementById("name-input");


// procedure to follow to display profile of a user to outputArea

function searchProfile(){
    console.log("Search button is pressed")
    const insideBox =document.getElementById("insideOutputBox");
    insideBox.innerHTML = `<p>SearchBtn is Pressed</p>`;
}

// step 1: user tries to enter a name or an id then clicks button to display the result
// step 1.1: when user tries to enter a name or id the script converts the name into a string and converts it into lowercase letters 
// step 1.2: input is then is asyned and awaited until api outputs a result if input name or id is a valid name and id the result should then display profile image in a div and in another div profile stats for each stat interpolation and correspoinding variable s are displayed

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", searchProfile);