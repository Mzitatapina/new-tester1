// Function to open the modal
async function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal
async function closeModal(event) {
    var modal = event.target.closest('.modal');
    modal.style.display = "none";
    event.stopPropagation();
}


// Function to add event listeners for opening modals
function addOpenModalListener(buttonId, modalId) {
    var button = document.getElementById(buttonId);
    if (button) {
        button.onclick = async function () {
            await openModal(modalId);
        };
    }
}

// Add event listeners to open the modals
addOpenModalListener("openModalBtn1", "productModal1");
addOpenModalListener("openModalBtn2", "productModal2");
addOpenModalListener("openModalBtn3", "productModal3");
addOpenModalListener("openModalBtn4", "productModal4");
addOpenModalListener("openModalBtn5", "productModal5");
addOpenModalListener("openModalBtn6", "productModal6");
addOpenModalListener("openModalBtn7", "productModal7");
addOpenModalListener("openModalBtn8", "productModal8");



// Add event listeners to close the modals
var closeButtons = document.getElementsByClassName("closeBtn");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = async function (event) {
        await closeModal(event);
    };
}

// Close the modal if the user clicks outside of it
window.onclick = async function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}