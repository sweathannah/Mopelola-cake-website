document.addEventListener("DOMContentLoaded", function () {
    let menulink = document.getElementById("menu");
    let menuClose = document.getElementById("closeDropdown");
    let dropdownmenu = document.getElementById("mobileMenu");

    menulink.addEventListener("click", function () {
        dropdownmenu.classList.remove("hidden");

    });

    menuClose.addEventListener("click", function () {
        dropdownmenu.classList.add("hidden");
    });
});


// Function to open modal with clicked image
function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    modal.classList.remove('hidden');
    modalImg.src = imgElement.src;
    document.body.classList.add('overflow-hidden'); // Disable scrolling on body
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    modal.classList.add('hidden');
    modalImg.src = '';
    document.body.classList.remove('overflow-hidden'); // Enable scrolling on body
}

// Event listener for closing the modal with close button
document.getElementById('closeModalBtn').addEventListener('click', closeModal);

// Event listener for closing the modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Event listener for keyboard 'Esc' key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const cakesLink = document.getElementById('cakes-link');
    const pastriesLink = document.getElementById('pastries-link');
    const foodLink = document.getElementById('food-link');
    
    const cakesSection = document.getElementById('cakes-section');
    const pastriesSection = document.getElementById('pastries-section');
    const foodSection = document.getElementById('food-section');
    
    cakesLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(cakesSection);
    });
    
    pastriesLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(pastriesSection);
    });
    
    foodLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(foodSection);
    });
    
    function showSection(sectionToShow) {
        cakesSection.classList.add('hidden');
        pastriesSection.classList.add('hidden');
        foodSection.classList.add('hidden');
        
        sectionToShow.classList.remove('hidden');
    }
});


