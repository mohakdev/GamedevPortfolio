console.log("JS Running");
const MobileMenuButton = document.getElementById("MobileMenuIcon");
const NavBar = document.getElementById("Navbar");
let MenuOpened = false;

MobileMenuButton.addEventListener("click", () =>
{
    NavBar.style.display = MenuOpened ? "none" : "block";
    MenuOpened = !MenuOpened;
})
