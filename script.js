
const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", searchProfile);

function searchProfile(){
    console.log("namaste");
    }
    
    let api = "https://api.github.com/user/";
    
    let fetch = document.createElement("script");
    fetch.src = `https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js`;
    
    fetch.integrity =   `ha512-DZqqY3PiOvTP9HkjWg06ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ ==`;
    fetch.crossOrigin = "anonymous";
    document.body.appenChild(fetch);
    
    let main = document.getElementById("outputArea");
    let inputBox = document.getElementById("profile-name").value;
    const userGetFunction = (name) =>{
        axios(api + name).then((response)=>{
            userCard(response.data);
            repoGetFunction(name);}).catch((err) =>{
                if(err.response.status == 404){
                    errorFunction("No profile with this username");}});}
                    const repoGetFunction = (name) => {
                        axios(
                            api+
                            name+
                            "/repos?sort=created").then((response)=>{
                                repoCardFunction(response.data);}).catch((err)=>{
                                    errorFunction("Problem fetching repos");});}
                    const userCard = (user) =>{
                        let id = user.name||user.login;
                        let info = user.bio?`<p>${user.bio}</p>`: "";
                        let cardElement = `<div class = "card"><div><img src ="${user.avatar_url}" alt ="${user.name}" class="avatar"></div>
                        <div class="user-info">
                        <h2>${id}</h2>${info}<ul><li>${user.followers}<strong>Followers</strong></li><li>${user.following}<strong>Following</strong></li><li>${user.public_repos}<strong>Repos</strong></li></ul>
                        <div id="repos"></div></div>`;
                        main.innerHTML = cardElement}
                        const errorFunction = (error) => {
                            let cardHTML = `<div class="card"><h1>$${error}</h1></div>`;
                            main.innerHTML =cardHTML }

                            const repoCardFunction (repos) => {
                                
                            }

                    
                               