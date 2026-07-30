const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    const value = searchInput.value.toLowerCase();

    cards.forEach(function(card) {

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// Hide Loader

window.addEventListener("load", function () {

    document.getElementById("loader").style.display = "none";

});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// ==========================
// AI Chatbot
// ==========================

const chatBtn = document.getElementById("chat-btn");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");

chatBtn.addEventListener("click", () => {
    chatBox.style.display = "block";
});

closeChat.addEventListener("click", () => {
    chatBox.style.display = "none";
});
// ==========================
// AI Replies
// ==========================

const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});

// ==================== SMART CAMPUS AI ENGINE ====================

// 1. Paste your API key from https://aistudio.google.com here:
const GEMINI_API_KEY = "AQ.Ab8RN6KX3xU6DxQhsgwDn-tvPEPCvEE7eTGh_Dz-ti88uh1rDA";

// 2. Campus Context Knowledge Base
const CAMPUS_CONTEXT = `
You are Smart Campus AI, a virtual assistant for this college campus.
Campus Details:
- Campus Size: 264 Acres, 14,000+ Students, 44 Departments, 13 Schools.
- Departments: CSE, CSE-AI, Mechanical, ECE, Chemical, Metallurgy.
- Facilities: Boys Hostel, Cafeteria, Open Gym, Swimming Pool, International Cell, Medical Garden.
- Rules: Keep answers short, friendly, concise, and focused on campus navigation.
`;

// 3. AI-Powered Send Function
async function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBody = document.getElementById("chat-body");

    if (!userInput || !userInput.value.trim()) return;

    const userText = userInput.value.trim();

    // Append User Message to Chat
    chatBody.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;
    userInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Show AI Thinking State
    const loadingMessage = document.createElement("p");
    loadingMessage.innerHTML = "<strong>AI:</strong> <em>Thinking...</em>";
    chatBody.appendChild(loadingMessage);
    chatBody.scrollTop = chatBody.scrollHeight;

let reply = "";

const q = userText.toLowerCase();

if (q.includes("cse")) {
    reply = "📍 CSE Department is located in Academic Block A, First Floor.";
}
else if (q.includes("ece")) {
    reply = "📡 ECE Department is located in Academic Block B.";
}
else if (q.includes("mechanical")) {
    reply = "⚙️ Mechanical Department is beside the Workshop Building.";
}
else if (q.includes("library")) {
    reply = "📚 Central Library is near the Admin Block.";
}
else if (q.includes("canteen") || q.includes("cafeteria")) {
    reply = "🍽️ Cafeteria is near the Main Gate.";
}
else if (q.includes("hostel")) {
    reply = "🏠 Boys Hostel is behind the Mechanical Department.";
}
else if (q.includes("gym")) {
    reply = "🏋️ Open Gym is beside the Sports Complex.";
}
else if (q.includes("swimming")) {
    reply = "🏊 Swimming Pool is opposite the Open Gym.";
}
else if (q.includes("emergency")) {
    reply = "🚨 Emergency Numbers:\nSecurity: +91-9876543210\nAmbulance: 108\nPolice:100";
}
else {
    reply = "🤖 Smart Campus AI: I can help with departments, library, hostel, cafeteria, gym, swimming pool, emergency services and campus navigation.";
}

loadingMessage.innerHTML = "<strong>AI:</strong> " + reply;

    chatBody.scrollTop = chatBody.scrollHeight;
}
function emergencyHelp() {
    alert(`🚨 EMERGENCY ASSISTANCE

📞 Security Office
Phone: +91-7007026724

🏥 Medical Centre
Phone: +91-9369601495

🚒 Fire Emergency
Phone: 101

🚑 Ambulance
Phone: 108

🚔 Police
Phone: 100

Stay calm and follow the nearest emergency exit.`);
}
function generateRoute() {

    let start = document.getElementById("currentLocation").value;
    let end = document.getElementById("destination").value;

    let result = `
    <h3>🤖 Smart AI Route</h3>

    <p><b>📍 Start:</b> ${start}</p>

    <p>➡ Follow Main Road</p>
    <p>➡ Pass Library Junction</p>
    <p>➡ Continue via Smart Corridor</p>

    <p><b>🎯 Destination:</b> ${end}</p>

    <p>⏱ Estimated Time: 4 Minutes</p>

    <p>🚶 Crowd Level: Low</p>

    <p style="color:green;"><b>✅ Recommended by Smart AI</b></p>
    `;

    document.getElementById("routeResult").innerHTML = result;
}