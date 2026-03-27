// Helper Functions
const getEBD = (id) => document.getElementById(id);

// Elements
const output = getEBD('paragraph-output');
const startBtn = getEBD('game-start');

// Prompts the game chooses from.
// AI Generated Prompts / Sentances, couldn't think of anything.
const paragraphs = [
    "Digital landscapes are built with logic, one line of code at a time.",
    "The art of problem-solving is often more important than the syntax itself.",
    "Hardware is the body of the machine, but software is its wandering mind.",
    "Innovation usually happens at the intersection of two unrelated ideas.",
    "A clean workspace is a silent partner in the creative process.",
    "True mastery of a craft comes from repeating the basics until they are second nature.",
    "The internet is a vast ocean of information where one must learn to swim or sink.",
    "Silence is sometimes the most productive sound in a developer's studio.",
    "Every great achievement began as a simple thought that refused to go away.",
    "Data is the new currency, but wisdom remains the only way to spend it well.",
    "The transition from a blank screen to a finished project is a unique kind of magic.",
    "Artificial intelligence is a mirror reflecting our own human ingenuity and bias.",
    "Cybersecurity is a constant game of cat and mouse in a world that never sleeps.",
    "The most elegant code is often the code that was eventually deleted.",
    "Virtual reality offers a glimpse into worlds that exist only in our imagination.",
    "Efficiency is doing things right; effectiveness is doing the right things.",
    "The glow of the monitor is the modern equivalent of a campfire's light.",
    "Algorithms shape our world in ways that are often invisible to the naked eye.",
    "Collaboration across time zones is the heartbeat of the modern open-source movement.",
    "Focus is the ability to say no to a thousand good ideas to protect one great one.",
    "The smell of fresh coffee in the morning is a universal reset button.",
    "Walking through a park in autumn feels like stepping into a living oil painting.",
    "A handwritten note carries a weight that a digital message can never replicate.",
    "Cooking a meal from scratch is a quiet rebellion against a fast-paced world.",
    "The sound of rain against a windowpane is nature's most soothing white noise.",
    "Finding a forgotten five-dollar bill in an old jacket is a small, pure victory.",
    "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
    "A library is a room full of doors that lead to a thousand different lives.",
    "The best conversations usually happen after the sun goes down and the world goes quiet.",
    "Laundry is the only chore that is never truly finished, only paused.",
    "A well-worn pair of shoes tells the story of every mile you've traveled.",
    "The simplest way to change your perspective is to look at the stars for five minutes.",
    "Morning light has a way of making even the most mundane objects look significant.",
    "A shared meal is the shortest distance between two strangers.",
    "Sometimes, the most productive thing you can do is take a long, aimless walk.",
    "Mountains don't seek attention; they simply exist and command it.",
    "The tide reminds us that everything in life has a natural rhythm of coming and going.",
    "A single seed contains the blueprint for a forest if given enough time and soil.",
    "Wildflowers don't care where they grow; they just focus on reaching for the light.",
    "The desert teaches us that even in the harshest conditions, life finds a way to thrive.",
    "Old trees are the silent historians of the landscapes they inhabit.",
    "A thunderstorm is a reminder of the raw, unscripted power of the atmosphere.",
    "The ocean doesn't apologize for its depth, and neither should you.",
    "Seasons change slowly, then all at once, much like the habits of our lives.",
    "Fire provides warmth and destruction in equal measure, depending on how it's tended.",
    "Courage is not the absence of fear, but the realization that something else is more important.",
    "Mistakes are the rough drafts of a masterpiece yet to be completed.",
    "Comparison is a thief that steals the joy from your own unique progress.",
    "The most important lessons are often the ones we tried the hardest to avoid.",
    "Kindness is a language that the deaf can hear and the blind can see.",
    "An open mind is like a parachute; it only works when it is actually open.",
    "Happiness is not a destination, but a way of traveling through the day.",
    "We see the world not as it is, but as we are.",
    "Forgiveness is the fragrance that the flower leaves on the heel that crushed it.",
    "Great things are not done by impulse, but by a series of small things brought together.",
    "The sun shines on everyone, regardless of whether they appreciate the warmth.",
    "Curiosity is the engine that keeps the spirit young, no matter the age of the body.",
    "Integrity is doing the right thing even when you know nobody is watching.",
    "A bird sitting on a tree is never afraid of the branch breaking, because its trust is in its wings.",
    "To know yourself is the beginning of all true wisdom.",
    "In an age of distraction, focused attention is a rare and valuable commodity.",
    "Your phone is a tool, but it shouldn't be the hand that guides your life.",
    "Social media is a highlight reel, rarely showing the bloopers of real existence.",
    "Minimalism isn't about having less; it's about making room for more of what matters.",
    "Travel doesn't just change your location; it changes your internal map.",
    "The best time to plant a tree was twenty years ago; the second best time is now.",
    "Rest is not a reward for hard work; it is a requirement for it.",
    "Public speaking is the art of turning butterflies into a synchronized flight formation.",
    "A sense of humor is the shock absorber of life's bumpy roads.",
    "Listening is often more powerful than speaking, though it earns less applause.",
    "Every bug fixed is a lesson learned in the psychology of your past self.",
    "Documentation is a love letter to your future self when you've forgotten everything.",
    "The cloud is just someone else's computer, but with better air conditioning.",
    "Designing for everyone often means designing for no one in particular.",
    "Complexity is easy; simplicity is the hardest thing to achieve in design.",
    "A prototype is worth a thousand meetings and ten thousand emails.",
    "Legacy code is just code that actually works and generates value.",
    "User experience is the difference between a tool and a toy.",
    "Version control is the closest thing we have to a time machine.",
    "Open source is the ultimate proof that humans can build great things together for free.",
    "A dark mode interface is a mercy for the eyes in the middle of the night.",
    "Encryption is the lock on the door of our digital private lives.",
    "The best interface is the one that disappears when the user is focused.",
    "Software updates are the digital equivalent of a spring cleaning for your devices.",
    "The speed of light is the ultimate speed limit for any network engineer.",
    "The stars don't compete with the moon; they both shine when it's their time.",
    "A quiet room is often the loudest place for a busy mind.",
    "Success is stumbling from failure to failure without loss of enthusiasm.",
    "Every exit is an entry somewhere else.",
    "The most valuable thing you can spend is your time, for it never comes back.",
    "True wealth is the ability to fully experience life.",
    "If you want to go fast, go alone; if you want to go far, go together.",
    "The only constant in the universe is change itself.",
    "A dream without a plan is just a wish.",
    "Character is how you treat those who can do absolutely nothing for you.",
    "You cannot pour from an empty cup; take care of yourself first.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "The shadow proves that there is light nearby.",
    "In the end, we only regret the chances we didn't take.",
    "And just like that, the hundredth paragraph completes the collection."
];

// Inital Values
let currentIndex = 0;
let spanElements = [];
let streak = 0;
let charactersCorrect = 0;
let totalCharacters = 0;
let startTime;
let timeElapsedInMinutes = 0;
let timeElapsedInSeconds = 0;
let timeInterval;
let lastInputTime = 0;
let timeSinceLastInput = 0;
let wpmAvgTick = 0;
let wpmAverages = [];

// Start game function
function startGame() {
    currentIndex = 0;
    streak = 0;
    charactersCorrect = 0;
    output.innerHTML = "";
    startTime = Date.now();
    wpmAverages = [];
    
    const text = paragraphs[Math.ceil(Math.random() * paragraphs.length)]; // AI Corrected my syntax for this.
    
    spanElements = [...text].map(char => {
        const span = document.createElement('span');
        span.innerText = char;
        span.classList.add('char');
        // Use this to track if the player ever messes up this letter
        span.dataset.hasBeenWrong = "false"; 
        output.appendChild(span);
        return span;
    });
    
    totalCharacters = spanElements.length;
    
    // Update the button's visuals
    startBtn.disabled = true;
    startBtn.textContent = "Playing...";
    
    updateUI();
    document.addEventListener('keydown', handleTyping); // Bind typing so the game can handle input
    timeInterval = setInterval(count, 15); // Begin time interval
}

// Function to count time and WPM
// AI fixed my update order
function count() {
    const currentTime = Date.now();
    
    if ((currentTime - lastInputTime) >= 2500) {
        getEBD('game-status').innerText = "Status: Paused (Inactive)";
        getEBD('game-status').style.color = "#f1c40f";
        return;
    }
    
    timeElapsedInSeconds = (currentTime - startTime) / 1000;
    const timeElapsedInMinutes = timeElapsedInSeconds / 60;
    
    const mins = Math.floor(timeElapsedInSeconds / 60);
    const secs = Math.floor(timeElapsedInSeconds % 60).toString().padStart(2, '0');
    
    let currentWPM = 0;
    if (timeElapsedInSeconds > 2) {
        currentWPM = Math.round((currentIndex / 5) / timeElapsedInMinutes);
    }
    
    wpmAvgTick++;
    if (wpmAvgTick >= 4) {
        wpmAvgTick = 0;
        wpmAverages.push(currentWPM);
    }
    
    getEBD('game-wpm').innerText = `Speed: ${currentWPM} WPM`;
    getEBD('game-time').innerText = `Time Elapsed: ${mins}:${secs}`;
}

// Function to handle input
function handleTyping(event) {
    if (event.key === " ") event.preventDefault(); // Prevent the browser from doing whatever it usually does
    if (event.key.length !== 1) return; // Ignore function keys like tab, F1, arrows, etc.
    
    lastInputTime = Date.now();
    
    const currentSpan = spanElements[currentIndex];
    const expectedChar = currentSpan.innerText;
    
    if (event.key === expectedChar) {
        // This block runs when the player hits the right key.
        currentSpan.classList.remove('incorrect', 'current');
        
        // If the player missed the character before, make yellow. Otherwise, make green.
        if (currentSpan.dataset.hasBeenWrong === "true") {
            currentSpan.classList.add('corrected');
        } else {
            charactersCorrect++; // Only increment if the player perfected it the first time.
            currentSpan.classList.add('perfect');
        }
        
        // Increment values
        currentIndex++;
        streak++;
        getEBD('game-status').innerText = "Status: Good!";
        getEBD('game-status').style.color = "#4dfd4d";
        
        // If the player is not done, update outputs, otherwise end the game.
        if (currentIndex < totalCharacters) {
            updateUI();
        } else {
            endGame();
        }
    } else {
        // This block runs when the player hits the wrong key.
        currentSpan.classList.add('incorrect');
        currentSpan.dataset.hasBeenWrong = "true";
        
        streak = 0;
        getEBD('game-status').innerText = "Status: Fix the error!";
        getEBD('game-status').style.color = "#ff4d4d";
        updateUI();
    }
}

// Function to update outputs
function updateUI() {
    // Handle Highlight
    spanElements.forEach(s => s.classList.remove('current'));
    if (spanElements[currentIndex]) {
        spanElements[currentIndex].classList.add('current');
    }
    
    const percent = Math.ceil((currentIndex / totalCharacters) * 100); // AI Corrected Syntax here
    const accuracy = Math.round((charactersCorrect / currentIndex) * 100) || 100; // AI explained how I can calculate accuracy as a percentage.
    getEBD('paragraph-progress').innerText = `Progress: ${percent}% (${currentIndex} / ${totalCharacters})`;
    getEBD('game-accuracy').innerText = `Accuracy: ${accuracy}%`;
    getEBD('game-streak').innerText = `Streak: ${streak}`;
}

// Function to end the game
function endGame() {
    updateUI();
    clearInterval(timeInterval);
    timeInterval = null;
    document.removeEventListener('keydown', handleTyping);
    startBtn.disabled = false;
    startBtn.textContent = "Play Again";
    getEBD('game-status').innerText = "Status: Finished!";
    getEBD('game-status').style.color = "white";
    
    let averageWpm = 0;
    let averagesTotal = 0;
    let totalAverages = wpmAverages.length;
    wpmAverages.forEach(function(avg) {
        averagesTotal += avg;
    });
    averageWpm = Math.round((averagesTotal / totalAverages));
    getEBD('game-wpm').innerText = `Average Speed: ${averageWpm} WPM`;
}

startBtn.addEventListener('click', startGame);
document.addEventListener('keydown', function(event) {
    if (event.key == "Enter") {
        if (!startBtn.disabled) {
            startGame();
        }
    }
});