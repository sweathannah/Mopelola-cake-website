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


