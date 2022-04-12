function handleButtonClick1() {
  if (document.getElementById("buttonPeriod1")) {
    document
      .getElementById("buttonPeriod1")
      .classList.remove("product__switch_noactive");
    document
      .getElementById("buttonPeriod2")
      .classList.add("product__switch_noactive");
  }
}
function handleButtonClick2() {
  if (document.getElementById("buttonPeriod2")) {
    document
      .getElementById("buttonPeriod2")
      .classList.remove("product__switch_noactive");
    document
      .getElementById("buttonPeriod1")
      .classList.add("product__switch_noactive");
  }
}
