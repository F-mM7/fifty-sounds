const ctx = table.getContext("2d");
const size = 60;

let n;

const maru = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳";
const dakuten = "ﾞ";
const handakuten = "ﾟ";

ctx.font = size * 1 + "px x";

function draw_cell(i, j) {
  if (stroke[i][j]) ctx.strokeRect((10 - i) * size, j * size, size, size);
  if (fill[i][j]) ctx.fillRect((10 - i) * size, j * size, size, size);
}

function draw_table() {
  ctx.clearRect(0, 0, 660, 300);
  for (let i = 0; i < H; ++i) for (let j = 0; j < W; ++j) draw_cell(i, j);
}

function setQuestion() {
  n = ran(N);
  // while (list[n].length < 2) n = ran(N);

  while (display.firstChild) display.removeChild(display.firstChild);

  let next_idx = 0;
  let symbol_list = {};

  for (let x of list[n]) {
    let box = document.createElement("div");
    box.classList.add("box");
    let symbol = document.createElement("div");
    symbol.classList.add("symbol");

    let is_daku = false;
    let is_handaku = false;

    if (daku[x]) {
      x = daku[x];
      is_daku = true;
    }
    if (handaku[x]) {
      x = handaku[x];
      is_handaku = true;
    }
    if (small[x]) {
      x = small[x];
      symbol.classList.add("small");
    }

    if (!symbol_list[x]) symbol_list[x] = coord[x] ? maru[next_idx++] : x;

    symbol.innerText = symbol_list[x];
    if (is_daku) symbol.innerText += dakuten;
    if (is_handaku) symbol.innerText += handakuten;
    box.appendChild(symbol);
    display.appendChild(box);
  }

  draw_table();
  for (let x in symbol_list) {
    if (x == "ー") continue;
    ctx.fillText(
      symbol_list[x],
      (10.01 - coord[x][0]) * size,
      (0.86 + coord[x][1]) * size
    );
  }

  console.log(list[n]);
}

function judge() {
  return answer.text.value == list[n];
}

answer.addEventListener("submit", (e) => {
  e.preventDefault();
  if (judge()) {
    setQuestion();
    giveCorrectClass(question, true);
  } else {
    giveCorrectClass(question, false);
  }
  answer.text.value = "";
});

setQuestion();
