export const modal = () => {
    // Variables
    const modals = document.querySelectorAll(".modal");
    const closeBtn = document.querySelector(".close-btn-wrapper");
    const openModalButtons = document.querySelectorAll(".open-modal");
    const rewardCards = modals[0].querySelectorAll(".modal .reward-card");
    const selectAwardButtons = document.querySelectorAll(".select-award");
    const forms = document.querySelectorAll("form");

    const gotItBtn = document.querySelector(".close-modal");
    console.log(gotItBtn);
    // Closing modal
    gotItBtn.addEventListener("click", handleCloseModal);
    closeBtn.addEventListener("click", handleCloseModal);
    window.addEventListener("click", function (ev) {
        modals.forEach(modal => {
            if (ev.target == modal) {
                handleCloseModal();
            }
        });
    });

    // Open modal
    openModalButtons.forEach(btn => btn.addEventListener("click", handleOpenModal));

    // Handle checkboxs switch in opened modal
    rewardCards.forEach(cb => cb.addEventListener("click", handleCheckboxSwitch))

    // Handle select reward on page product page
    selectAwardButtons.forEach(sb => sb.addEventListener("click", handleSelectAward));

    // Handle submit buttons
    forms.forEach(sb => sb.addEventListener("submit", handleSubmit));

    // Handlers
    function handleOpenModal() {
        modals[0].style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function handleCloseModal() {
        resetModalState();
        modals.forEach(modal => modal.style.display = "none");
        document.body.style.overflow = "auto";
    }

    function handleSelectAward(ev) {
        const title = ev.target.parentElement.parentElement.querySelector(".reward-title").innerHTML;
        const rewardCard = [...document.querySelector(".modal").querySelectorAll(".reward-card")]
            .filter(rc => {
                const searchedTitle = rc.querySelector(".reward-title").innerHTML;
                return searchedTitle.trim() === title.trim();
            })[0];

        handleCheckboxSwitch({ target: rewardCard.querySelector("label") });
    }

    function handleCheckboxSwitch(ev) {
        if (ev.target.parentElement.classList.contains("form-group")) {
            return;
        }

        const rewardCard = findParentElementByClassName(ev.target, "reward-card");
        const targetCheckbox = rewardCard.querySelector("input[type=checkbox]");
        const pledgeArea = rewardCard.querySelector(".add-pledge-section");

        if (targetCheckbox.checked) {
            targetCheckbox.checked = false;
            rewardCard.style.border = ".75px solid var(--clr-neutral-200)";
            pledgeArea.style.display = "none";
        } else {
            resetModalState();

            targetCheckbox.checked = true;
            rewardCard.style.border = "2px solid var(--clr-primary-400)";
            pledgeArea.style.display = "block";
        }
        targetCheckbox.click();
    }

    function handleSubmit(ev) {
        modals[0].style.display = "none";
        modals[1].style.display = "block";
        ev.preventDefault();
    }

    // Helper functions
    function findParentElementByClassName(el, className) {
        if (el.classList.contains(className)) {
            return el;
        }

        return findParentElementByClassName(el.parentElement, className);
    }

    function resetModalState() {
        document.getElementById("modal")
            .querySelectorAll("input[type=checkbox]")
            .forEach(cb => cb.checked = false);

        document
            .querySelectorAll(".modal .reward-card")
            .forEach(rc => rc.style.border = ".75px solid var(--clr-neutral-200)");

        document
            .querySelectorAll(".modal .add-pledge-section")
            .forEach(ps => ps.style.display = "none");
    }
}

