document.addEventListener('DOMContentLoaded', () => {
    // Play birthday song and display message
    document.getElementById('playSong').addEventListener('click', function() {
        let audio = new Audio('whatsapp-status.mp3');
        audio.play();
        displayMessage();
    });

    function displayMessage() {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = "Wishing you a day filled with love and joy!";
    }

    // Handle wish form submission
    document.getElementById('wishForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const wishInput = document.getElementById('wishInput');
        const wishText = wishInput.value;
        if (wishText) {
            addWish(wishText);
            wishInput.value = '';
            playSecondSong();
            showThankYou();
            alertThankYou(); // Display the alert message
        }
    });

    function addWish(wish) {
        const wishesContainer = document.getElementById('wishesContainer');
        const wishElement = document.createElement('div');
        wishElement.textContent = wish;
        wishesContainer.appendChild(wishElement);
    }

    function playSecondSong() {
        let secondAudio = new Audio('second-birthday-song.mp3');
        secondAudio.play();
    }

    function showThankYou() {
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.textContent = 'Thank you for your wish!';
        const audio = new Audio('thankyou.mp3');
        audio.play();
        setTimeout(() => {
            thankYouMessage.textContent = ''; // Clear the message after 3 seconds
        }, 3000);
    }

    // Function to alert "Thank You"
    function alertThankYou() {
        alert('Thanks a lot for your kind wishes! Truly appreciate it 🙏');
    }

    // Real-time clock
    function updateClock() {
        const clock = document.getElementById('clock');
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);

    // Confetti animation

    createConfetti();
});
