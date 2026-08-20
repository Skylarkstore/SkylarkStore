/* =====================================================
   SKYLARK STORE
   JavaScript
===================================================== */


/* =====================================================
   LINKS
===================================================== */

const DISCORD_LINK =
    "https://discord.gg/7AyvD7xrEW";


const TIKTOK_LINK =
    "https://www.tiktok.com/@keiplaymc?_r=1&_t=ZS-991rtrOnDPx";


const SERVER_IP =
    "skylarksmp.srein.xyz";


/* =====================================================
   ELEMENTS
===================================================== */

const modal =
    document.getElementById("purchaseModal");

const purchaseText =
    document.getElementById("purchaseText");

const toast =
    document.getElementById("toast");

const toastText =
    document.getElementById("toastText");


/* =====================================================
   SELECTED PRODUCT
===================================================== */

let selectedRank = "";

let selectedPrice = "";

let selectedDestination = "";


/* =====================================================
   SCROLL TO STORE
===================================================== */

function scrollToRanks() {

    document.getElementById("ranks").scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   PURCHASE
===================================================== */

function buyRank(
    rank,
    price,
    destination = "discord"
) {

    selectedRank = rank;

    selectedPrice = price;

    selectedDestination = destination;


    purchaseText.innerHTML =
        `You selected <strong>${rank}</strong> for <strong>${price === "TikTok Live Gift" ? price : "₱" + price}</strong>.`;


    modal.classList.add("active");

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    modal.classList.remove("active");

}


/* =====================================================
   CONFIRM PURCHASE
===================================================== */

function confirmPurchase() {

    if (selectedDestination === "tiktok") {

        window.open(
            TIKTOK_LINK,
            "_blank"
        );

        closeModal();

        return;
    }


    window.open(
        DISCORD_LINK,
        "_blank"
    );

    closeModal();

}


/* =====================================================
   DISCORD
===================================================== */

function openDiscord() {

    window.open(
        DISCORD_LINK,
        "_blank"
    );

}


/* =====================================================
   TIKTOK
===================================================== */

function openTikTok() {

    window.open(
        TIKTOK_LINK,
        "_blank"
    );

}


/* =====================================================
   COPY SERVER IP
===================================================== */

function copyIP() {

    navigator.clipboard.writeText(SERVER_IP)

        .then(() => {

            showToast(
                "Server IP copied!"
            );

        })

        .catch(() => {

            showToast(
                SERVER_IP
            );

        });

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    toastText.textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =====================================================
   CLOSE MODAL OUTSIDE
===================================================== */

modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =====================================================
   FOOTER DEAD LINKS
===================================================== */

document.querySelectorAll(
    '.footer-links a[href="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

        }
    );

});