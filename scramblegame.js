const quotesList = [
    {
        quote: "Love is the most twisted curse of all.",
        character: "gojo satoru",
        anime: "Jujutsu Kaisen",
        funFact: "Gojo is known as the strongest sorcerer in Jujutsu Kaisen."
    },
    {
        quote: "Never trust anyone too much. Remember the devil was once an angel.",
        character: "ken kaneki",
        anime: "Tokyo Ghoul",
        funFact: "Ken was the first half-human half-ghoul hybrid."
    },
    {
        quote: "If you win, you live. If you lose, you die. If you don't fight, you won't win.",
        character: "eren yeager",
        anime: "Attack on Titan",
        funFact: "Eren can control other titans using the Founding Titan's power."
    }
];

 
const selectedQuote = quotesList[Math.floor(Math.random() * quotesList.length)];


function scrambleName(name) {
    return name.split('').sort(() => Math.random() - 0.5).join('');
}


const scrambledName = scrambleName(selectedQuote.character);


document.getElementById("quote").innerText = `"${selectedQuote.quote}"`;
document.getElementById("scrambled-name").innerText = scrambledName;
document.getElementById("anime-hint").innerText = `Hint: This character is from ${selectedQuote.anime}`;


function checkAnswer() {
    const userGuess = document.getElementById("user-input").value.trim().toLowerCase();
    const correctAnswer = selectedQuote.character.toLowerCase();
    
    if (userGuess === correctAnswer) {
        document.getElementById("feedback").innerHTML = `✅ Correct! <br> Fun Fact: ${selectedQuote.funFact}`;
    } else {
        document.getElementById("feedback").innerText = "❌ Incorrect! Try again.";
    }
}
