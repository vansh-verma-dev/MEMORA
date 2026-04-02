// Source - https://stackoverflow.com/a/76978444
// Posted by Roko C. Buljan, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-02, License - CC BY-SA 4.0

const flipBook = (elBook) => {
  elBook.style.setProperty("--c", 0); // Set current page
  elBook.querySelectorAll(".page").forEach((page, idx) => {
    page.style.setProperty("--i", idx);
    page.addEventListener("click", (evt) => {
      const curr = evt.target.closest(".back") ? idx : idx + 1;
      elBook.style.setProperty("--c", curr);
    });
  });
};

document.querySelectorAll(".book").forEach(flipBook);