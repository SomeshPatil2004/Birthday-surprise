/* Surprise button */

function openSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.classList.remove("hidden");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    createHearts(20);
}


/* Birthday countdown */

function updateCountdown() {

    const now = new Date();

    let year = now.getFullYear();

    let birthday = new Date(
        year,
        9,        // October = 9
        8,        // 8 October
        0,
        0,
        0
    );

    // If this year's birthday has passed,
    // count toward next year's birthday.

    if (now > birthday) {
        birthday = new Date(
            year + 1,
            9,
            8,
            0,
            0,
            0
        );
    }

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);

updateCountdown();


/* Floating hearts */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["❤️", "💕", "💖", "💗", "💓"];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 700);


/* Extra hearts after opening surprise */

function createHearts(number) {

    for (let i = 0; i < number; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
}