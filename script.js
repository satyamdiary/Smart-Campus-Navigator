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

function sendMessage(){

    const message = userInput.value.trim();

    if(message === "") return;

    chatBody.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

    let reply = "Sorry, I don't understand that question.";

    const msg = message.toLowerCase();

    if(msg.includes("cse")){
        reply = "The CSE Department is located in Academic Block A.";
    }
    else if(msg.includes("ece")){
        reply = "The ECE Department is located beside the CSE Block.";
    }
    else if(msg.includes("mechanical")){
        reply = "The Mechanical Department is near the Workshop Building.";
    }
    else if(msg.includes("chemical")){
        reply = "The Chemical Engineering Department is in Block C.";
    }
    else if(msg.includes("metallurgy")){
        reply = "The Metallurgy Department is near the Chemical Block.";
    }
    else if(msg.includes("cafeteria") || msg.includes("canteen")){
        reply = "The Cafeteria is near the main entrance.";
    }
    else if(msg.includes("library")){
        reply = "The Central Library is beside the Administrative Block.";
    }
    else if(msg.includes("hostel")){
        reply = "The Boys' and Girls' Hostels are behind the Academic Blocks.";
    }
    else if(msg.includes("hello") || msg.includes("hi")){
        reply = "Hello! Welcome to Smart Campus Navigator.";
    }

    chatBody.innerHTML += `<p><strong>AI:</strong> ${reply}</p>`;

    chatBody.scrollTop = chatBody.scrollHeight;

    userInput.value = "";
}