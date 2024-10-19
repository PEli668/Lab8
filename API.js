const url = 'https://instagram243.p.rapidapi.com/userinfo/';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '976c967beamsha15e40c72e25c60p13cd5djsn7b1a1fbfc5e6',
        'x-rapidapi-host': 'instagram243.p.rapidapi.com'
    }
};

// Function to fetch user data
async function fetchUserData(username) {
    try {
        const response = await fetch(`${url}${username}`, options);

        // Check if response is OK (status code 200)
        if (!response.ok) {
            throw new Error('User not found or API request failed');
        }

        const result = await response.json(); // Parse response as JSON

        // Display user information
        displayUserInfo(result);
    } catch (error) {
        console.error(error);
        alert(error.message); // Show an alert with the error message
    }
}

// Function to display user information
function displayUserInfo(data) {
    const userInfoContainer = document.getElementById('user-info-container');
    userInfoContainer.innerHTML = ''; // Clear previous content

    // Create elements to display user data
    const usernameElement = document.createElement('h3');
    usernameElement.textContent = `Username: ${data.username}`;

    const bioElement = document.createElement('p');
    bioElement.textContent = `Bio: ${data.bio || 'No bio available'}`;

    const followersElement = document.createElement('p');
    followersElement.textContent = `Followers: ${data.followers_count || '0'}`;

    const followingElement = document.createElement('p');
    followingElement.textContent = `Following: ${data.following_count || '0'}`;

    const postsElement = document.createElement('p');
    postsElement.textContent = `Posts: ${data.media_count || '0'}`;

    // Append elements to the container
    userInfoContainer.appendChild(usernameElement);
    userInfoContainer.appendChild(bioElement);
    userInfoContainer.appendChild(followersElement);
    userInfoContainer.appendChild(followingElement);
    userInfoContainer.appendChild(postsElement);
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', () => {
    const username = document.getElementById('usernameInput').value.trim(); // Get the input value
    if (username) {
        fetchUserData(username); // Fetch user data if username is not empty
    } else {
        alert('Please enter a username'); // Alert if username is empty
    }
});
