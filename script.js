document.addEventListener('DOMContentLoaded', () => {
    // Handle learn more button clicks
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const disasterType = e.target.closest('.disaster-card').classList[1];
            window.location.href = `/disasters/${disasterType}.html`;
        });
    });

    // Chat functionality
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendMessage');

    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            // Simulate bot response (replace with actual AI integration)
            setTimeout(() => {
                const botResponse = "I understand your concern about " + message + ". Let me help you with that...";
                addMessage(botResponse, 'bot');
            }, 1000);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    function addMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Experience sharing functionality
    const experienceForm = document.getElementById('experienceText');
    const submitExperience = document.getElementById('submitExperience');
    const experiencesList = document.getElementById('experiencesList');

    submitExperience.addEventListener('click', () => {
        const experience = experienceForm.value.trim();
        if (experience) {
            addExperience(experience);
            experienceForm.value = '';
        }
    });

    function addExperience(experience) {
        const experienceDiv = document.createElement('div');
        experienceDiv.classList.add('experience-card');
        experienceDiv.innerHTML = `
            <p>${experience}</p>
            <small>Posted on ${new Date().toLocaleDateString()}</small>
        `;
        experiencesList.prepend(experienceDiv);
    }
}); 