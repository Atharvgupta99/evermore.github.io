const suggestions = [
    { type: 'romantic', location: 'Beach', activity: 'Watch the sunset together', outfit: 'Casual yet elegant', venue: 'Beachfront restaurant', booking: 'Available for booking', budget: 50, seasonal: 'summer' },
    { type: 'romantic', location: 'Rooftop', activity: 'Candlelit dinner with a view', outfit: 'Smart casual', venue: 'Rooftop cafe', booking: 'Book a table', budget: 80, seasonal: 'winter' },
    { type: 'adventure', location: 'Mountain', activity: 'Hiking and picnic', outfit: 'Outdoor gear', venue: 'Mountain lodge', booking: 'Reserve a spot', budget: 40, seasonal: 'fall' },
    { type: 'adventure', location: 'Amusement park', activity: 'Ride roller coasters and games', outfit: 'Comfortable clothing', venue: 'Theme park', booking: 'Online ticketing available', budget: 100, seasonal: 'spring' },
    { type: 'fun', location: 'Arcade', activity: 'Play games and win prizes', outfit: 'Casual', venue: 'Local arcade', booking: 'No booking needed', budget: 20, seasonal: 'year-round' },
    { type: 'relaxing', location: 'Spa', activity: 'Couple massage and spa treatment', outfit: 'Casual', venue: 'Luxury spa', booking: 'Reserve a spa package', budget: 150, seasonal: 'year-round' },
    { type: 'romantic', location: 'Park', activity: 'Stroll through the park and have a picnic', outfit: 'Comfortable yet chic', venue: 'City park', booking: 'No booking required', budget: 30, seasonal: 'spring' },
    { type: 'special', location: 'Winery', activity: 'Wine tasting', outfit: 'Semi-formal', venue: 'Winery', booking: 'Book a tour', budget: 75, seasonal: 'fall' },
    { type: 'romantic', location: 'Restaurant', activity: 'Dinner with candlelight and soft music', outfit: 'Formal attire', venue: 'Fine dining restaurant', booking: 'Make a reservation', budget: 120, seasonal: 'year-round' },
    { type: 'adventure', location: 'Kayak', activity: 'Kayaking on the river', outfit: 'Swimwear and comfortable shoes', venue: 'River station', booking: 'Book a kayak', budget: 50, seasonal: 'summer' },
    // Add more date ideas as needed
];

let selectedDateType = '';
let selectedBudget = 0;
let includeSeasonal = false;

function showDateTemplate() {
    // Show the pop-up template to choose date preferences
    document.getElementById('popup-template').style.display = 'flex';
}

function closePopup() {
    // Close the pop-up template
    document.getElementById('popup-template').style.display = 'none';
}

function generateDate() {
    // Get the selected values from the template
    selectedDateType = document.getElementById('date-type').value;
    selectedBudget = parseInt(document.getElementById('budget').value);
    includeSeasonal = document.getElementById('seasonal-events').checked;

    // Filter suggestions based on the selected type, budget, and seasonal/event checkbox
    const filteredSuggestions = suggestions.filter(suggestion => 
        suggestion.type === selectedDateType && 
        suggestion.budget <= selectedBudget &&
        (includeSeasonal ? suggestion.seasonal : true)
    );

    displaySuggestions(filteredSuggestions); // Display the filtered date suggestions
    closePopup(); // Close the pop-up after selecting preferences
}

function displaySuggestions(suggestionsArray) {
    // Clear the previous suggestions before displaying new ones
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = '';

    // Display the first 5 suggestions based on the filtered criteria
    suggestionsArray.slice(0, 5).forEach(suggestion => {
        const suggestionCard = document.createElement('div');
        suggestionCard.classList.add('date-card');
        
        suggestionCard.innerHTML = `
            <img src="images/${suggestion.location.toLowerCase()}.jpg" alt="${suggestion.location}">
            <h3>${suggestion.activity}</h3>
            <p><strong>Location:</strong> ${suggestion.location}</p>
            <p><strong>Outfit:</strong> ${suggestion.outfit}</p>
            <p><strong>Venue:</strong> ${suggestion.venue}</p>
            <p><strong>Booking:</strong> ${suggestion.booking}</p>
            <p><strong>Budget:</strong> $${suggestion.budget}</p>
        `;
        
        suggestionsContainer.appendChild(suggestionCard);
    });
}

// Shuffle suggestions to show random date ideas
function shuffleSuggestions() {
    // Shuffle the suggestions array and display the first 5 random suggestions
    const shuffled = suggestions.sort(() => Math.random() - 0.5);
    displaySuggestions(shuffled);
}

function setCountdown() {
    const reminderDate = document.getElementById('reminder-date').value;
    if (!reminderDate) {
        alert("Please select a date.");
        return;
    }

    const countdownTimer = document.getElementById('countdown-timer');
    const targetDate = new Date(reminderDate);
    const currentDate = new Date();
    const diffTime = targetDate - currentDate;
    const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    countdownTimer.textContent = `You have ${daysRemaining} days left until your special date!`;
}
