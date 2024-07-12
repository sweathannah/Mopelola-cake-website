document.addEventListener("DOMContentLoaded", function () {
    let menulink = document.getElementById("menu");
    let menuClose = document.getElementById("closeDropdown");
    let dropdownmenu = document.getElementById('mobileMenu');

    if (menulink && menuClose && dropdownmenu) {
        menulink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default action
            dropdownmenu.classList.remove("hidden")
            menulink.classList.add("hidden");
        });

        menuClose.addEventListener("click", function () {
            dropdownmenu.classList.add("hidden");
            menulink.classList.remove("hidden");
        });
    } else {
        console.log("One or more elements not found");
    }
});
