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
    
    modal.classList.add('show')
    modal.classList.remove('hidden');
    modalImg.src = imgElement.src;
    document.body.classList.add('overflow-hidden'); // Disable scrolling on body
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    modal.classList.remove('show')
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






// Function to display diverse images based on the seleced one
// function displayImage(){
//     const productSelect = document.getElementById('product-select');
//     const selectedProduct = productSelect.value;
//     const productImage = document.getElementById('product-image');
    
//     let imageURL = "";

//     if (selectedProduct == "foil_cakes"){
//         imageURL = "Assets/Pastries/Cakes/foil_cakes.jpg"
//     } else if (selectedProduct == "butter_icing_cake") {
//         imageURL = "Assets/Pastries/Cakes/olori_akanbi_cake.jpg"
//     } else if (selectedProduct == "fondant_icing_cake") {
//         imageURL = "Assets/Pastries/Cakes/Wedding_cake.jpg"
//     } else if (selectedProduct == "cupcakes") {
//         imageURL = "Assets/Pastries/Cakes/12 in 1 cup-cake.jpg"
//     } else if (selectedProduct == "naked_sponge_cake") {
//         imageURL = "Assets/Pastries/Cakes/Naked_sponge_cake.jpg"
//     } else if (selectedProduct == "cartoon_cake") {
//         imageURL = "Assets/Pastries/Cakes/Blue_alabi_cake.jpg"
//     } else if (selectedProduct == "naked_cake") {
//         imageURL = "Assets/Pastries/Cakes/Naked_cake.jpg"
//     } else if (selectedProduct == "cake_parfait") {
//         imageURL = "Assets/Pastries/Cakes/Cake-parfait.jpg"
//     } else if (selectedProduct == "creamed_sliced_cake") {
//         imageURL = "Assets/Pastries/Cakes/sliced_cakes.jpg"
//     } else {

//     }

//     defaultText = document.getElementById('default-text')
//     if (imageURL){
//         productImage.src = imageURL;
//         productImage.classList.remove('hidden');
//         defaultText.classList.add('hidden')
//     } else {
//         productImage.classList.add('hidden')
//         defaultText.classList.remove('hidden')
//     }
    
// }
// displayImage()

// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// window.onload = function() {
//     const product = getQueryParam('product');
//     const productSelect = document.getElementById('product-select');

//     if (product) {
//         productSelect.value = product;
//         displayImage();
//     }
// }

function displayImage() {
    const productSelect = document.getElementById('product-select');
    const selectedProduct = productSelect.value;
    const productImage = document.getElementById('product-image');
    const defaultText = document.getElementById('default-text');
    
    const productImages = {
        "foil_cakes": "Assets/Pastries/Cakes/foil_cakes.jpg",
        "butter_icing_cake": "Assets/Pastries/Cakes/olori_akanbi_cake.jpg",
        "fondant_icing_cake": "Assets/Pastries/Cakes/Wedding_cake.jpg",
        "cupcakes": "Assets/Pastries/Cakes/12 in 1 cup-cake.jpg",
        "naked_sponge_cake": "Assets/Pastries/Cakes/Naked_sponge_cake.jpg",
        "cartoon_cake": "Assets/Pastries/Cakes/Blue_alabi_cake.jpg",
        "naked_cake": "Assets/Pastries/Cakes/Naked_cake.jpg",
        "cake_parfait": "Assets/Pastries/Cakes/Cake-parfait.jpg",
        "creamed_sliced_cake": "Assets/Pastries/Cakes/sliced_cakes.jpg",
        "cartoon_cake(girls)": "Assets/Pastries/Cakes/sophia_cake.jpg",
        "round-cake": "Assets/Pastries/Cakes/Red-round cake.jpg",
        "Bento_cake": "Assets/Pastries/Cakes/Bento_cake.jpg",
        "wedding_cake": "Assets/Pastries/Cakes/Two_step_wedding_cake.jpg",
        "floral_cake": "Assets/Pastries/Cakes/white cake with pink flowers.jpg",
        "graduation_crayon_cake": "Assets/Pastries/Cakes/Graduation_cake.jpg"
    };

    if (productImages[selectedProduct]) {
        productImage.src = productImages[selectedProduct];
        productImage.classList.remove('hidden');
        defaultText.classList.add('hidden');
    } else {
        productImage.classList.add('hidden');
        defaultText.classList.remove('hidden');
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function() {
    const product = getQueryParam('product');
    const productSelect = document.getElementById('product-select');

    if (product) {
        productSelect.value = product;
        displayImage();
    }
}


function toggleDropdown() {
            document.getElementById("dropdown-content").classList.toggle("hidden");
        }

        function selectProduct(value, text) {
            document.getElementById("selected-product-text").innerText = text;
            document.getElementById("selected-product-text").dataset.value = value;
            toggleDropdown();
        }

        window.onclick = function(event) {
            if (!event.target.matches('.dropdown-button') && !event.target.matches('.dropdown-content div')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (!openDropdown.classList.contains('hidden')) {
                        openDropdown.classList.add('hidden');
                    }
                }
            }
        }


