function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const openBtn = document.querySelector('.open-btn');

    if (sidebar.style.width === '250px' || sidebar.style.width === '') {
        sidebar.style.width = '0';
        mainContent.style.marginLeft = '0';
        openBtn.style.display = 'block';
    } else {
        sidebar.style.width = '250px';
        mainContent.style.marginLeft = '250px';
        openBtn.style.display = 'none';
    }
}

function showContent(section) {
    const contentDisplay = document.getElementById('contentDisplay');
    let content = '';

    switch(section) {
        case 'home':
            content = `
                <h2>Welcome to Your Dashboard</h2>
                <p>This is a simple dashboard page.</p>
            `;
            break;
        case 'profile':
            content = `
                <h2>Profile</h2>
                <p>This is the profile section.</p>
                <p><a href="login.html">Logout</a></p>
            `;
            break;
        case 'settings':
            content = `
                <h2>Settings</h2>
                <p>This is the settings section.</p>
            `;
            break;
        case 'business-plans':
            content = `
                <h2>Business Plans</h2>
                <p>This is the business plans section.</p>
                <a href="new-business.html">New Business</a>
                <div id="business-plans" class="card-container"></div>
            `;
            break;
        case 'about-us':
            content = `
                <h2>About Us</h2>
                <p>This is the about us section.</p>
            `;
            break;
        default:
            content = `
                <h2>Welcome to Your Dashboard</h2>
                <p>This is a simple dashboard page.</p>
            `;
    }

    contentDisplay.innerHTML = content;
}

function uploadProfilePicture() {
    const profileImage = document.getElementById('profileImage');
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function getGreeting() {
    let greeting = 'Hello';
    return greeting;
}

function displayGreeting() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const latestUser = users[users.length - 1];
    const greeting = getGreeting();
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = `${greeting}, ${latestUser.firstName}!`;
}

document.addEventListener('DOMContentLoaded', displayGreeting);

function createBusiness() {
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const startDate = document.getElementById('start-date').value;
    const associates = document.getElementById('associates').value;
    const about = document.getElementById('about').value;

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${name}</h2>
        <p>${about}</p>
    `;
    card.onclick = function() {
        showPopup(name, type, country, state, startDate, associates, about);
    };

    document.getElementById('business-plans').appendChild(card);
}

function showPopup(name, type, country, state, startDate, associates, about) {
    document.getElementById('popup-name').innerText = name;
    document.getElementById('popup-type').innerText = `Business Type: ${type}`;
    document.getElementById('popup-location').innerText = `Location: ${country}, ${state}`;
    document.getElementById('popup-start-date').innerText = `Start Date: ${startDate}`;
    document.getElementById('popup-associates').innerText = associates ? `Associates: ${associates}` : 'No known associates';
    document.getElementById('popup-about').innerText = about;

    document.getElementById('popup').style.display = 'block';
}

function editBusiness() {
    // Add edit functionality here
}

function deleteBusiness() {
    // Add delete functionality here
}
