// Add First Time Event
function addFirstTime() {
    const type = prompt("Is this event 'Happened' or 'Still to Happen'?");
    const event = prompt("Enter the event name:");
    if (type && event) {
        const listId = type.toLowerCase() === "happened" ? "happened-list" : "still-to-happen-list";
        const list = document.getElementById(listId);
        const li = document.createElement("li");
        li.textContent = event;
        list.appendChild(li);
    }
}

// Add Milestone
function addMilestone() {
    const milestone = prompt("Enter a milestone or anniversary:");
    if (milestone) {
        const list = document.getElementById("milestones-list");
        const li = document.createElement("li");
        li.textContent = milestone;
        list.appendChild(li);
    }
}

// Add Date Log
function addDateLog() {
    const log = document.getElementById("date-log-input").value;
    if (log) {
        const list = document.getElementById("date-logs-list");
        const li = document.createElement("li");
        li.textContent = log;
        list.appendChild(li);
        document.getElementById("date-log-input").value = "";
    }
}

// Add Vision to Vision Board
function addVision() {
    const vision = document.getElementById("vision-input").value;
    if (vision) {
        const list = document.getElementById("vision-list");
        const li = document.createElement("li");
        li.textContent = vision;
        list.appendChild(li);
        document.getElementById("vision-input").value = "";
    }
}

// Calculate Relationship Score
function calculateScore() {
    const memories = document.getElementById("happened-list").children.length;
    const milestones = document.getElementById("milestones-list").children.length;
    const dateLogs = document.getElementById("date-logs-list").children.length;
    const score = (memories * 10) + (milestones * 15) + (dateLogs * 5);
    document.getElementById("score-display").textContent = `Your Relationship Score: ${score}`;
}
