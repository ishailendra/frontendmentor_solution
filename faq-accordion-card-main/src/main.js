let acc = document.getElementsByClassName("accordion__item");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let btnContainer = this.children[0];
    let panel = this.children[1];
    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }
    btnContainer.children[0].classList.toggle("active");
    panel.classList.toggle("show")

    let arrowImg = btnContainer.children[1];
    arrowImg.classList.toggle("arrow__rotate")
  });
}