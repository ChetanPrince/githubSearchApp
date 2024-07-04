async function getGitHubProfile(){
    const username = document.getElementById("name-input").value;
    const profileContainer = document.getElementById("insideOutputBox");
    profileContainer.innerHTML = "";
    if(username === ""){
        alert("Please enter a username");
        return;
    }
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        if(!response.ok){
            throw new Error("UserName Not Found");
        }
        displayProfile(data);
    }
    catch(error){
        profileContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

// function displayProfile(data) where profile container is set with innerhtml interpolation method and image in a profile div with other data like h2 name or login oaragraohs username bio repos follows followign location and html url for profile on github are set inside another div inside the main div with class naem profile detailsthen divs are ended

function displayProfile(data){
    const profileContainer = document.getElementById("insideOutputBox");
    profileContainer.innerHTML = `<div class="profile"><img src="${data.avatar_url}" alt="${data.login}">
    <div class="profile-details">
    <h2>${data.name || data.login}</h2>
    <p><strong>Username:</strong>${data.login}</p>
    <p><strong>Bio:</strong>${data.bio|| "N/A"}</p>
    <p><strong>Public Repositories:</strong>${data.public_repos}</p>
    <p><strong>Followers:</strong>${data.followers}</p>
    <p><strong>Following:</strong>${data.followings}</p>
    <p><strong>Location:</strong>${data.location || "N/A"}</p>
    <p><a href="${data.html_url}" target="_blank" alt="${data.login}_url">View Profile On GitHub</a></p>
    </div></div>
    
    `
}