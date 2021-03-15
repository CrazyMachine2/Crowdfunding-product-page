import { modal } from "./modal.js";

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

