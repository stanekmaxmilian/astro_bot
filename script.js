// script.js

// Launch button click event listener
const launchButton = document.getElementById('launch-button');

launchButton.addEventListener('click', () => {
    alert('🚀 Astro Bot Activated!');
    createSparkleEffect();
    console.log('Astro Bot Activated');
});

// Create sparkle particle effects animation
function createSparkleEffect() {
    // Implementation of sparkle effect
    console.log('Sparkle effect created');
}

// Keyboard shortcut support for Space and Enter keys
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
        alert('🚀 Astro Bot Activated!');
        createSparkleEffect();
        console.log('Astro Bot Activated via keyboard');
    }
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element is in view:', entry.target);
            // Implement animation
        }
    });
});

// Example of observing an element
const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
elementsToObserve.forEach(element => observer.observe(element));

console.log('Intersection observer initialized');