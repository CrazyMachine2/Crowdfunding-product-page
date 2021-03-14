
main();

function main() {
    bookmark();
    modal();
};


function bookmark() {
    const button = document.querySelector(".bookmark");
    const bookmarkImg = button.querySelector("img");
    const btnText = button.querySelector(".btn-text");

    button.addEventListener("click", function (ev) {
        const isBookmarked = button.classList.contains("is-bookmarked");
        button.removeChild(bookmarkImg);

        if (isBookmarked) {
            button.classList.remove("is-bookmarked");
            bookmarkImg.src = "../../images/icon-bookmark.svg";
            btnText.textContent = "Bookmark";
        } else {
            button.classList.add("is-bookmarked");
            bookmarkImg.src = "../../images/icon-bookmark-checked.svg"
            btnText.textContent = "Bookmarked";
        }

        button.prepend(bookmarkImg);
    })
}

function modal() {
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn-wrapper");
    const buttons = document.querySelectorAll(".open-modal");

    closeBtn.addEventListener("click", function (ev) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener("click", function (ev) {
        if (ev.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    buttons.forEach(btn => {
        btn.addEventListener("click", function(){
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        })
    })
}

