/* =====================================================
   SKYLARK STORE
   JavaScript
===================================================== */


/* =====================================================
   SETTINGS
===================================================== */

const DISCORD_LINK =
    "https://discord.gg/zcwrEhsnP";


const PAYMENT_DISCORD =
    "https://discord.gg/7AyvD7xrEW";


const SERVER_IP =
    "skylarsmp.srein.xyz";


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


let selectedProduct = "";
let selectedPrice = "";


/* =====================================================
   SCROLL TO STORE
===================================================== */

function scrollToRanks() {

    document
        .getElementById("ranks")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   PURCHASE
===================================================== */

function buyProduct(product, price) {

    selectedProduct = product;

    selectedPrice = price;


    purchaseText.innerHTML =
        `You selected <strong>${product}</strong> for <strong>₱${price}</strong>.`;


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

    window.open(
        PAYMENT_DISCORD,
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
   COPY SERVER IP
===================================================== */

function copyIP() {

    navigator.clipboard
        .writeText(SERVER_IP)

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
   CLICK OUTSIDE MODAL
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