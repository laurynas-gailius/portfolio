// Top nav
function setNavMarginTopTo(margin) {
    document.getElementById("navbar").style.marginTop = margin + 'px'
};

window.onscroll = function () {
    if (window.innerWidth > 800) {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            setNavMarginTopTo(0)
        } else {
            setNavMarginTopTo(-120)
        }
    } else {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            setNavMarginTopTo(0)
        } else {
            setNavMarginTopTo(-120)
        }
    }
};

const navClass = ["fixed", "-mt-28", "ease-linear", "duration-300", "z-10", "w-full"];

window.addEventListener('load', () => {
    document.getElementById("navbar").classList = "";
    document.getElementById("navbar").classList.add(...navClass);
});

// Resume
function newTab() {
    window.open("files/resume.pdf", "_blank");
}

// Hire me
function showTooltip(id) {
    id.style.opacity = "1";
    setTimeout(function () {
        id.style.opacity = "0";
    }, 2000);
}

function copyText() {
    navigator.clipboard.writeText("laurynas@hey.com");
}

