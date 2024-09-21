// Add hover effect for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#084d4f';  // Change to dark green on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#00ffff';  // Revert to cyan
    });
});

// Hover animations for feature cards
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
