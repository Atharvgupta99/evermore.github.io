// Countdown Timer Feature
document.addEventListener('DOMContentLoaded', function () {
    const countdownElements = document.querySelectorAll('.countdown p');

    countdownElements.forEach((element) => {
        const targetDate = new Date(element.dataset.targetDate);
        const updateCountdown = () => {
            const now = new Date();
            const timeDifference = targetDate - now;
            if (timeDifference <= 0) {
                element.innerHTML = "It's time! 🎉";
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        };
        setInterval(updateCountdown, 1000);
    });
});

// Secret Send Feature (Surprise Messages)
const secretSendBtn = document.getElementById('secretSendBtn');
const secretMessageInput = document.getElementById('secretMessageInput');
const secretMessageBox = document.getElementById('secretMessageBox');

secretSendBtn.addEventListener('click', function () {
    const message = secretMessageInput.value.trim();
    if (message) {
        const secretMessage = document.createElement('div');
        secretMessage.classList.add('secretMessage');
        secretMessage.innerHTML = `<p>${message}</p>`;
        secretMessageBox.appendChild(secretMessage);
        secretMessageInput.value = ''; // Clear input after sending
    } else {
        alert('Please enter a message before sending!');
    }
});

// Memory Sharing & Reminders
const memorySharingForm = document.getElementById('memorySharingForm');
const memoryInput = document.getElementById('memoryInput');
const memoryBox = document.getElementById('memoryBox');

memorySharingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const memory = memoryInput.value.trim();
    if (memory) {
        const memoryDiv = document.createElement('div');
        memoryDiv.classList.add('memoryItem');
        memoryDiv.innerHTML = `<p>${memory}</p>`;
        memoryBox.appendChild(memoryDiv);
        memoryInput.value = ''; // Clear input after sharing
    } else {
        alert('Please write a memory to share!');
    }
});

// Surprise Video Message Feature
const surpriseVideoBtn = document.getElementById('surpriseVideoBtn');
const surpriseVideoContainer = document.getElementById('surpriseVideoContainer');

surpriseVideoBtn.addEventListener('click', function () {
    surpriseVideoContainer.classList.toggle('visible');
});

// Shared Goals & Countdown Feature
const sharedGoalsForm = document.getElementById('sharedGoalsForm');
const sharedGoalInput = document.getElementById('sharedGoalInput');
const sharedGoalsList = document.getElementById('sharedGoalsList');

sharedGoalsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const goal = sharedGoalInput.value.trim();
    if (goal) {
        const goalItem = document.createElement('li');
        goalItem.innerHTML = `<p>${goal}</p><span class="goalStatus">In Progress</span>`;
        sharedGoalsList.appendChild(goalItem);
        sharedGoalInput.value = ''; // Clear input after submitting
    } else {
        alert('Please enter a goal!');
    }
});

// Virtual "Date Night" Planner
const dateNightPlannerForm = document.getElementById('dateNightPlannerForm');
const dateNightInput = document.getElementById('dateNightInput');
const dateNightList = document.getElementById('dateNightList');

dateNightPlannerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const dateIdea = dateNightInput.value.trim();
    if (dateIdea) {
        const dateItem = document.createElement('li');
        dateItem.innerHTML = `<p>${dateIdea}</p><span class="planned">Planned</span>`;
        dateNightList.appendChild(dateItem);
        dateNightInput.value = ''; // Clear input after adding
    } else {
        alert('Please enter a date night idea!');
    }
});

// Couple's Playlist Feature
const playlistForm = document.getElementById('playlistForm');
const songInput = document.getElementById('songInput');
const playlistContainer = document.getElementById('playlistContainer');

playlistForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const song = songInput.value.trim();
    if (song) {
        const songItem = document.createElement('div');
        songItem.classList.add('songItem');
        songItem.innerHTML = `<p>${song}</p>`;
        playlistContainer.appendChild(songItem);
        songInput.value = ''; // Clear input after adding song
    } else {
        alert('Please enter a song name!');
    }
});

// Live Video Journals (For video-related functionality, this would depend on external APIs or media handling code)
const videoJournalBtn = document.getElementById('videoJournalBtn');
const videoJournalContainer = document.getElementById('videoJournalContainer');

videoJournalBtn.addEventListener('click', function () {
    videoJournalContainer.classList.toggle('visible');
});

// Countdown for Special Dates
const dateCountdowns = document.querySelectorAll('.dateCountdown');
dateCountdowns.forEach((countdown) => {
    const targetDate = new Date(countdown.dataset.targetDate);
    const updateCountdown = () => {
        const now = new Date();
        const timeDifference = targetDate - now;
        if (timeDifference <= 0) {
            countdown.innerHTML = "Event Started! 🎉";
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    };
    setInterval(updateCountdown, 1000);
});
