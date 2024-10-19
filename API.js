const url = 'https://instagram243.p.rapidapi.com/userinfo/';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '976c967beamsha15e40c72e25c60p13cd5djsn7b1a1fbfc5e6',
        'x-rapidapi-host': 'instagram243.p.rapidapi.com'
    }
};

async function fetchUserData(username) {
    try {
        const response = await fetch(`${url}${username}`, options);
        
        if (!response.ok) {
            throw new Error('User not found or API request failed');
        }

        const result = await response.json();
        console.log(result); // Log the entire response
        console.log(result.data); // Log the data object to see its structure

        if (result.data) {
            displayUserInfo(result.data);
        } else {
            alert('No data available for this user');
        }
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

function displayUserInfo(data) {
    const userInfoTextArea = document.getElementById('userText');
    userInfoTextArea.value = ''; // Clear previous content

    const userInfo = `
Username: ${data.username || 'Not available'}
Bio: ${data.biography || 'No bio available'}
Followers: ${data.followers_count || '0'}
Following: ${data.following_count || '0'}
Posts: ${data.media_count || '0'}
Account Type: ${data.account_type === 1 ? 'Personal' : 'Business'}
    `;

    userInfoTextArea.value = userInfo; // Set the value of textarea to user info
}

document.getElementById('searchButton').addEventListener('click', () => {
    const username = document.getElementById('usernameInput').value.trim();
    if (username) {
        fetchUserData(username);
    } else {
        alert('Please enter a username');
    }
});
