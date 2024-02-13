document.addEventListener('DOMContentLoaded', function () {
    // Set the birthday date (replace with the actual birthday date)
    const birthdayDate = new Date('2024-03-10T00:00:00');

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = birthdayDate - currentDate;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = formatTime(days);
            document.getElementById('hours').textContent = formatTime(hours);
            document.getElementById('minutes').textContent = formatTime(minutes);
            document.getElementById('seconds').textContent = formatTime(seconds);
        } else {
            // Birthday has passed, update the message
            document.getElementById('message').innerHTML = "<p>Happy Birthday, Jinnie!</p>";
            document.getElementById('countdown').style.display = 'none';
        }
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function changeBackground() {
        const section = document.getElementById('birthdaySection');
        section.style.backgroundImage = `url('${getRandomImage(images)}')`;
    }

    function generateImageArray(folderPath, numberOfImages) {
        const images = [];
        for (let i = 1; i <= numberOfImages; i++) {
            images.push(`${folderPath}image${i}.jpg`);
        }
        return images;
    }

    function getRandomImage(images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Usage
    const folderPath = 'assets'; // Path to your images folder
    const numberOfImages = 27;

    const images = generateImageArray(folderPath, numberOfImages);

    // Initial call to update countdown and background on page load
    updateCountdown();
    changeBackground();

    // Call updateCountdown every second
    setInterval(updateCountdown, 1000);
    // Call changeBackground every 5 minutes
    setInterval(changeBackground, 300000); // 5 minutes in milliseconds
});
