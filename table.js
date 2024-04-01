const char_list =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもや　ゆ　よらりるれろわ　　　をん";

const daku = {
  が: "か",
  ぎ: "き",
  ぐ: "く",
  げ: "け",
  ご: "こ",
  ざ: "さ",
  じ: "し",
  ず: "す",
  ぜ: "せ",
  ぞ: "そ",
  だ: "た",
  ぢ: "ち",
  づ: "つ",
  で: "て",
  ど: "と",
  ば: "は",
  び: "ひ",
  ぶ: "ふ",
  べ: "へ",
  ぼ: "ほ",
};

const handaku = {
  ぱ: "は",
  ぴ: "ひ",
  ぷ: "ふ",
  ぺ: "へ",
  ぽ: "ほ",
};

const small = {
  ぁ: "あ",
  ぃ: "い",
  ぅ: "う",
  ぇ: "え",
  ぉ: "お",
  っ: "つ",
  ゃ: "や",
  ゅ: "ゆ",
  ょ: "よ",
};

let coord = {};
for (let i = 0; i < 51; ++i) {
  if (char_list[i] == "　") continue;
  coord[char_list[i]] = [Math.floor(i / 5), i % 5];
}

const H = 11;
const W = 5;

let stroke = Array(H)
  .fill()
  .map(() => {
    return Array(W).fill(true);
  });
stroke[9][1] = false;
stroke[9][2] = false;
stroke[9][3] = false;
stroke[10][1] = false;
stroke[10][2] = false;
stroke[10][3] = false;
stroke[10][4] = false;

let fill = Array(H)
  .fill()
  .map(() => {
    return Array(W).fill(false);
  });

fill[7][1] = true;
fill[7][3] = true;
