export const modal = () => {

    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn-wrapper");
    const buttons = document.querySelectorAll(".open-modal");
    
    // const selectAwardButtons = document.querySelectorAll(".select-award");
    // selectAwardButtons.forEach(sb => sb.addEventListener("click", handleSelectAward));

    const customCheckbox = modal.querySelectorAll("label");
    customCheckbox.forEach(cb => cb.addEventListener("click", handleCheckboxSwitch))

    // Closing modal
    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", function (ev) {
        if (ev.target == modal) {
            closeModal();
        }
    });

    // Open modal
    buttons.forEach(btn => btn.addEventListener("click", openModal));

    // Helper functions
    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        resetModalState();
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    function handleSelectAward(ev) {
        const title = ev.target.parentElement.parentElement.querySelector(".reward-title").innerHTML;
        const rewardCard = [...document.querySelector(".modal").querySelectorAll(".reward-card")]
        .filter(rc =>{
            const searchedTitle = rc.querySelector(".reward-title").innerHTML;
            return searchedTitle.trim() === title.trim();
        })[0];

        handleCheckboxSwitch({target: rewardCard.querySelector("label")});
    }

    function handleCheckboxSwitch(ev) {
        const targetCheckbox = ev.target.previousElementSibling;

        const rewardCard = ev.target.parentElement.parentElement;
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

    function findParentElementByClassName(el, className) {
        if(el.classList.contains(className)){
            return el;
        }

        findParentElementByClassName(ev.parentElement, className);
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

