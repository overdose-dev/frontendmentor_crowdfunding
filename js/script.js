const pledgeConts = document.querySelectorAll(".pledgeContainer");
const bookmarkBtn = document.getElementById("bookmarkBtn");
const bookmarkText = document.getElementById("bookmarkTxt");
const bookmarkImg = document.getElementById("bookmarkImg");
const enterPledge = document.querySelectorAll(".enterPledgeSection");

document.querySelectorAll("#pledgeOptions").forEach((option) => {
  option.addEventListener("click", () => {
    const index = option.dataset.index;
    pledgeConts.forEach((pledgeCont, idx) => {
      if (index == idx + 1) {
        pledgeCont.style.outlineColor = "#3cb4ac";
        enterPledge[idx].style.display = "block";
      } else {
        pledgeCont.style.outlineColor = "";
        enterPledge[idx].style.display = "none";
      }
    });
  });
});

bookmarkBtn.addEventListener("click", () => {
  if (bookmarkText.textContent === "Bookmark") {
    bookmarkText.textContent = "Bookmarked";
    bookmarkText.style.color = "#157a74";
  } else {
    bookmarkText.textContent = "Bookmark";
    bookmarkText.style.color = "";
  }
  bookmarkImg.classList.toggle("bookmarked");
});
