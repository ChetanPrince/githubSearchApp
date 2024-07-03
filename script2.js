async function getGitHubProfile() {
    const username = document.getElementById('name-input').value;
    const profileContainer = document.getElementById('insideOutputBox');
    profileContainer.innerHTML = '';

    if (username === '') {
        alert('Please enter a GitHub username');
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }

        const data = await response.json();
        displayProfile(data);
    } catch (error) {
        profileContainer.innerHTML = `<h1>${error.message}</h1>`;
    }
}

function displayProfile(data) {
    const profileContainer = document.getElementById('insideOutputBox');
    profileContainer.innerHTML = `
        <div class="profile">
            <img src="${data.avatar_url}" alt="${data.login}">
            <div class="profile-details">
                <h2>${data.name || data.login}</h2>
                <p><strong>Username:</strong> ${data.login}</p>
                <p><strong>Bio:</strong> ${data.bio || 'N/A'}</p>
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Following:</strong> ${data.following}</p>
                <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
                <p><a href="${data.html_url}" target="_blank">View Profile on GitHub</a></p>
            </div>
        </div>
    `;
}
