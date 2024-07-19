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
    const products = {
        foil_cakes: {
            title: "Foil Cakes",
            price: "#1000.00",
            image: "Assets/Images/foil_cakes.jpg",
            description: "Delicious foil-wrapped cakes perfect for any occasion."
        },
        butter_icing_cake: {
            title: "Butter Icing Cake",
            price: "#10000.00",
            image: "Assets/Images/butter_icing_cake.jpg",
            description: "Rich and creamy butter icing cake for special events."
        },
        fondant_icing_cake: {
            title: "Fondant Icing Cake",
            price: "#10000.00",
            image: "Assets/Images/fondant_icing_cake.jpg",
            description: "Elegant fondant icing cake for a touch of class."
        },
        cupcakes: {
            title: "12 in 1 Cup Cake",
            price: "#10000.00",
            image: "Assets/Images/cupcakes.jpg",
            description: "A dozen of our best cupcakes, perfect for parties."
        },
        naked_sponge_cake: {
            title: "Naked Sponge Cake",
            price: "#10000.00",
            image: "Assets/Images/naked_sponge_cake.jpg",
            description: "Simple and delicious naked sponge cake."
        },
        cartoon_cake: {
            title: "Cartoon Cake",
            price: "#15000.00",
            image: "Assets/Images/cartoon_cake.jpg",
            description: "Fun and colorful cartoon-themed cake for kids."
        },
        naked_cake: {
            title: "Naked Cake",
            price: "#300.00",
            image: "Assets/Images/naked_cake.jpg",
            description: "Minimalist naked cake with a rustic look."
        },
        cake_parfait: {
            title: "Cake Parfait",
            price: "#2500.00",
            image: "Assets/Images/cake_parfait.jpg",
            description: "Layered cake parfaits in a jar, perfect for a quick treat."
        },
        creamed_sliced_cake: {
            title: "Creamed Sliced Cake",
            price: "#1000.00",
            image: "Assets/Images/creamed_sliced_cake.jpg",
            description: "Slices of cake with rich cream layers."
        }
    };

    function updateProductDetails() {
        const productSelect = document.getElementById('product-select');
        const selectedProduct = productSelect.value;
        
        if (products[selectedProduct]) {
            const product = products[selectedProduct];
            console.log(product);
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-title').textContent = product.title;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-description').textContent = product.description;
        }
    }

    // Attach event listener to the product select dropdown
    document.getElementById('product-select').addEventListener('change', updateProductDetails);

    // Handle the form submission
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Display a success message or send this data to a server.
        alert(`Thank you, ${name}! Your order has been placed.`);
        console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
    });
});

