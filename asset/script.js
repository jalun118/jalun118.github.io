const button = document.querySelector(".tombol-menu");
const menu = document.querySelector(".menu");
const MainMenu = document.querySelector(".main-menu");
const targetli = document.querySelector(".target-li");
const adul = document.querySelector(".ada-ul-lagi");

// function Menu() {
//     if (menu.classList !== "show") {
//         menu.classList.add('show');
//         MainMenu.style.maxHeight = MainMenu.scrollHeight + "px";
//     }
//     else {
//         menu.classList.remove('show');
//         MainMenu.style.maxHeight = 0;
//     }
// }


const accordion1 = document.querySelector(".accordion1-item-header");
const btnsubmenu = document.querySelector(".btn-sub-menu");

btnsubmenu.addEventListener("click", (e) => {

    btnsubmenu.classList.toggle("active");
    const accordion2 = accordion1.nextElementSibling;
    if (btnsubmenu.classList.contains("active")) {
        accordion2.style.maxHeight = accordion2.scrollHeight + "px";
    }
    else {
        accordion2.style.maxHeight = 0;
    }
});
function menu_bar() {
    nav.classList.toggle('show');
}

button.addEventListener("click", (e) => {
    menu.classList.toggle('show');
    if (menu.classList.contains("show")) {
        MainMenu.style.maxHeight = MainMenu.scrollHeight + "px";
        // MainMenu.style.maxHeight = "30000px";
    }
    else {
        MainMenu.removeAttribute("style");
    }
});

adul.addEventListener("click", () => {
    if (adul.classList != "show") {
        adul.classList.toggle("show");
    }
});
adul.addEventListener("mouseenter", () => {
    if (adul.classList != "show") {
        adul.classList.add("show");
    }
});
adul.addEventListener("mouseleave", () => {
    adul.classList.remove("show");
});

const NoScroll = document.querySelector(".page-no-scroll");

NoScroll.addEventListener("click", function (e) {
    e.preventDefault();
});

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", (e) => {

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});



const tblDownload = document.querySelector(".btn-tp-1");
const iconDownload = document.querySelector(".icon-download");

tblDownload.addEventListener("click", () => {
    if (tblDownload.classList != "click") {
        tblDownload.classList.add("clik");
        // tblDownload.textContent= "Berhasil";
        iconDownload.classList.replace("fa-download", "fa-check");
        setTimeout(() => {
            // tblDownload.textContent= "Clik Kembali Jika Gagal";
            iconDownload.classList.replace("fa-check", "fa-rotate-left");
            setTimeout(() => {
                // tblDownload.textContent= "Download"
                tblDownload.classList.remove("clik");
                iconDownload.classList.replace("fa-rotate-left", "fa-download");
            }, 5000);
        }, 2000);
    }
});

const tblWatch = document.querySelector(".btn-tp-2");
const iconWatch = document.querySelector(".icon-watch");

tblWatch.addEventListener("click", () => {
    if (tblWatch.classList != "click") {
        tblWatch.classList.add("clik");
        // tblWatch.textContent= "Berhasil";
        iconWatch.classList.replace("fa-play", "fa-check");
        setTimeout(() => {
            // tblWatch.textContent= "Clik Kembali Jika Gagal";
            iconWatch.classList.replace("fa-check", "fa-rotate-left");
            setTimeout(() => {
                // tblWatch.textContent= "Download"
                tblWatch.classList.remove("clik");
                iconWatch.classList.replace("fa-rotate-left", "fa-play");
            }, 5000);
        }, 2000);
    }
});

const tblscrolltop = document.querySelector(".btn-tp-3");

tblscrolltop.addEventListener("click", (e) => {
    setTimeout(() => {
        document.documentElement.scrollTop = 0;
    }, 500);
});

const tblScU = document.querySelector(".tombol-scroll-up");

window.onscroll = function () {
    scrollCheck()
};

function scrollCheck() {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        tblScU.classList.remove("hidden");
    } else {
        tblScU.classList.add("hidden");
    }
}