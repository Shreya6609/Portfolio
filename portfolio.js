const words = [
    "Developer",
    "Problem Solver",
    "Creating",
    "Innovating",
    "Data Analyst"
];
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("btn");
    const cvFilePath = "D:\portfolio\cv\Resume_AVIK_BANERJEE"; // Replace with your CV file path

    downloadBtn.addEventListener("click", function () {
        window.location.href = cvFilePath;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const twitterButton = document.querySelector(".twitter");
    const linkedinButton = document.querySelector(".linkedin");
    const instagramButton = document.querySelector(".instagram");
    const facebookButton = document.querySelector(".facebook");

    twitterButton.addEventListener("click", function () {
        window.location.href = "https://twitter.com/ShreyaDhar66?t=ap-WvoxVMg7WFxay7hcmrQ&s=08"; // Replace with your LinkedIn URL
    });

    linkedinButton.addEventListener("click", function () {
        window.location.href = "https://www.linkedin.com/in/shreya-dhar-a7a5b4224";
    });

    instagramButton.addEventListener("click", function () {
        window.location.href = "https://instagram.com/_shreya_dhar?igshid=MzRlODBiNWFlZA=="; // Replace with your Instagram URL
    });

    facebookButton.addEventListener("click", function () {
        window.location.href = "https://www.facebook.com/Shreya.dhar.6?mibextid=2JQ9oc"; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const events = document.querySelectorAll(".event");

    tabs.forEach(tab => {
        tab.addEventListener("mouseover", function () {
            const tabId = this.getAttribute("data-tab");
            events.forEach(event => {
                event.classList.remove("active");
                if (event.getAttribute("data-tab") === tabId) {
                    event.classList.add("active");
                }
            });
        });
    });
});



const typingSpeed = 100; // Speed in milliseconds
const eraseSpeed = 50;   // Speed in milliseconds
const delayBetweenWords = 1000; // Delay in milliseconds

const textElement = document.querySelector(".text");
let wordIndex = 0;
let charIndex = 0;
let isErasing = false;

function type() {
    if (isErasing) {
        textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isErasing = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, delayBetweenWords);
        } else {
            setTimeout(type, eraseSpeed);
        }
    } else {
        textElement.textContent = words[wordIndex].substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === words[wordIndex].length) {
            isErasing = true;
            setTimeout(type, delayBetweenWords);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenWords);
});

const downloadButton = document.getElementById('downloadButton');
    const cvLink = document.getElementById('cvLink');
    
    // Replace 'cv.pdf' with the actual path to your CV file
    const cvFile = '/path/to/your-cv.pdf';

    // Function to handle the download
    function downloadCV() {
        cvLink.href = cvFile;
        cvLink.download = 'your-cv.pdf'; // Rename the downloaded file (optional)
        cvLink.click();
    }

    // Attach the download function to the button click event
    downloadButton.addEventListener('click', downloadCV);