document.getElementById("navbar-icon").addEventListener("click", navbar_open);
document.getElementById("close-icon").addEventListener("click", navbar_close);

function navbar_open() {

    document.getElementById("mobile-navbar").classList.remove("scale-out-hor-right");
    document.getElementById("mobile-navbar").classList.add("scale-up-hor-right");


    document.getElementById("mobile-navbar").style.display = "block";

}

function navbar_close() {

    document.getElementById("mobile-navbar").classList.remove("scale-up-hor-right");
    document.getElementById("mobile-navbar").classList.add("scale-out-hor-right");

    // document.getElementById("mobile-navbar").style.display = "none";

}

var w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;


window.addEventListener("resize", close_mobile_navbar);

function close_mobile_navbar() {

    if (window.innerWidth > 768) {
        document.getElementById("mobile-navbar").style.display = "none";
    }
}