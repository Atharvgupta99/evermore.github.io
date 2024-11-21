function calculateResult() {
    const answers = {
        q1: document.getElementById("q1").value,
        q2: document.getElementById("q2").value,
        q3: document.getElementById("q3").value,
        q4: document.getElementById("q4").value,
    };

    const resultText = `
        Your perfect date style:
        - Weekend: ${answers.q1}
        - Romantic Dinner: ${answers.q2}
        - Dream Location: ${answers.q3}
        - Fun Bonding Activity: ${answers.q4}
    `;
    document.getElementById("result").innerText = resultText;
}

function compareResults() {
    const userResults = document.getElementById("result").innerText;
    const partnerResults = document.getElementById("partner-results").value;

    if (!userResults || !partnerResults) {
        document.getElementById("comparison-result").innerText = "Please ensure both results are entered.";
        return;
    }

    const compatibility = userResults === partnerResults ? "Perfect Match! ❤️" : "You have different styles, but opposites attract! 💞";
    document.getElementById("comparison-result").innerText = compatibility;
}
