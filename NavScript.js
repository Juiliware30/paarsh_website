// JavaScript for Toggle Menu 

document.getElementById('menu-btn').addEventListener('click', function(){
    event.stopPropagation();
    console.log("gvhewbvu");
    var menu = document.querySelector('.phone-menu');
    if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
    } else {
    menu.style.display = "none";
    }
});

// Hide the menu when clicking outside the navbar
document.addEventListener('click', function(event) {
    var menu = document.querySelector('.phone-menu');
    var isClickInsideMenu = menu.contains(event.target);
    var isClickInsideButton = document.getElementById('menu-btn').contains(event.target);

    if (!isClickInsideMenu && !isClickInsideButton) {
        menu.style.display = "none"; // Hide the menu
    }
});


