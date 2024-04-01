function ran(n) {
  return Math.floor(Math.random() * n);
}

function giveCorrectClass(obj, b) {
  obj.classList.remove("correct", "incorrect");
  obj.offsetWidth;
  obj.classList.add(b ? "correct" : "incorrect");
}
