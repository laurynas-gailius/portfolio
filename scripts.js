// Top nav
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth > 800) {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            document.getElementById("navbar").style.marginTop = "0";
        } else {
            document.getElementById("navbar").style.marginTop = "-80px";
        }
    } else {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            document.getElementById("navbar").style.marginTop = "0";
        } else {
            document.getElementById("navbar").style.marginTop = "-80px";
        }
    }
}

// Resume
function newTab() {
    window.open(
    "files/resume.pdf", "_blank");
}

// Hire me

function showTooltip(id){
    id.style.opacity = "1";
    setTimeout(function() {
        id.style.opacity = "0";
    }, 1500);
}

function copyText() {
    navigator.clipboard.writeText
        ("laurynas@hey.com");
}