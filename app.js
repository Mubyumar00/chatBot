document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        const chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += <p><strong>You:</strong> ${userInput}</p>;
        
        // Simple bot response
        const botResponse = getBotResponse(userInput);
        chatBox.innerHTML += <p><strong>Bot:</strong> ${botResponse}</p>;
        
        document.getElementById('user-input').value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
});

function getBotResponse(input) {
    // Simple responses
    const responses = {
        "hi": "Hello! How can I help you?",
        "how are you?": "I'm just a bot, but thanks for asking!",
        "bye": "Goodbye! Have a great day!"
    };
    
    return responses[input.toLowerCase()] || "I'm sorry, I didn't understand that.";
}