const baseCards = [
  { id: "please", category: "first", label: "ください", speech: "ください", icon: "🙏" },
  { id: "more", category: "first", label: "もっと", speech: "もっと", icon: "➕" },
  { id: "yes", category: "first", label: "はい", speech: "はい", icon: "⭕" },
  { id: "no", category: "first", label: "いいえ", speech: "いいえ", icon: "✖" },
  { id: "help", category: "first", label: "てつだって", speech: "手伝って", icon: "🤝" },
  { id: "break", category: "first", label: "おしまい", speech: "おしまい", icon: "🏁" },
  { id: "rice", category: "food", label: "ごはん", speech: "ごはん", icon: "🍚" },
  { id: "bread", category: "food", label: "パン", speech: "パン", icon: "🍞" },
  { id: "apple", category: "food", label: "りんご", speech: "りんご", icon: "🍎" },
  { id: "banana", category: "food", label: "バナナ", speech: "バナナ", icon: "🍌" },
  { id: "snack", category: "food", label: "おかし", speech: "お菓子", icon: "🍪" },
  { id: "curry", category: "food", label: "カレー", speech: "カレー", icon: "🍛" },
  { id: "water", category: "drink", label: "みず", speech: "水", icon: "🥤" },
  { id: "tea", category: "drink", label: "おちゃ", speech: "お茶", icon: "🍵" },
  { id: "milk", category: "drink", label: "ぎゅうにゅう", speech: "牛乳", icon: "🥛" },
  { id: "juice", category: "drink", label: "ジュース", speech: "ジュース", icon: "🧃" },
  { id: "car", category: "toy", label: "くるま", speech: "車", icon: "🚗" },
  { id: "blocks", category: "toy", label: "ブロック", speech: "ブロック", icon: "🧱" },
  { id: "ball", category: "toy", label: "ボール", speech: "ボール", icon: "⚽" },
  { id: "book", category: "toy", label: "えほん", speech: "絵本", icon: "📘" },
  { id: "eat", category: "action", label: "たべる", speech: "食べる", icon: "🍽️" },
  { id: "drink", category: "action", label: "のむ", speech: "飲む", icon: "🥤" },
  { id: "go", category: "action", label: "いく", speech: "行く", icon: "🚶" },
  { id: "play", category: "action", label: "あそぶ", speech: "遊ぶ", icon: "🎈" },
  { id: "sleep", category: "action", label: "ねる", speech: "寝る", icon: "🛏️" },
  { id: "wait", category: "action", label: "まつ", speech: "待つ", icon: "⏳" },
  { id: "mom", category: "person", label: "おかあさん", speech: "お母さん", icon: "👩" },
  { id: "dad", category: "person", label: "おとうさん", speech: "お父さん", icon: "👨" },
  { id: "teacher", category: "person", label: "せんせい", speech: "先生", icon: "🧑‍🏫" },
  { id: "friend", category: "person", label: "ともだち", speech: "友達", icon: "🧑‍🤝‍🧑" },
  { id: "home", category: "place", label: "いえ", speech: "家", icon: "🏠" },
  { id: "school", category: "place", label: "がっこう", speech: "学校", icon: "🏫" },
  { id: "park", category: "place", label: "こうえん", speech: "公園", icon: "🌳" },
  { id: "toilet-place", category: "place", label: "トイレ", speech: "トイレ", icon: "🚻" },
  { id: "morning", category: "schedule", label: "あさ", speech: "朝", icon: "🌅" },
  { id: "outing", category: "schedule", label: "おでかけ", speech: "お出かけ", icon: "🎒" },
  { id: "bath", category: "schedule", label: "おふろ", speech: "お風呂", icon: "🛁" },
  { id: "dinner", category: "schedule", label: "よるごはん", speech: "夜ごはん", icon: "🍽️" },
  { id: "wash", category: "care", label: "てをあらう", speech: "手を洗う", icon: "🧼" },
  { id: "toothbrush", category: "care", label: "はみがき", speech: "歯磨き", icon: "🪥" },
  { id: "change", category: "care", label: "きがえ", speech: "着替え", icon: "👕" },
  { id: "toilet", category: "care", label: "トイレ", speech: "トイレ", icon: "🚽" },
  { id: "happy", category: "feeling", label: "うれしい", speech: "嬉しい", icon: "😊" },
  { id: "sad", category: "feeling", label: "かなしい", speech: "悲しい", icon: "😢" },
  { id: "angry", category: "feeling", label: "いや", speech: "嫌", icon: "😣" },
  { id: "tired", category: "feeling", label: "つかれた", speech: "疲れた", icon: "😴" },
  { id: "head", category: "body", label: "あたま", speech: "頭", icon: "🙂" },
  { id: "stomach", category: "body", label: "おなか", speech: "お腹", icon: "🧍" },
  { id: "hand", category: "body", label: "て", speech: "手", icon: "✋" },
  { id: "foot", category: "body", label: "あし", speech: "足", icon: "🦶" },
  { id: "hospital", category: "medical", label: "びょういん", speech: "病院", icon: "🏥" },
  { id: "dentist", category: "medical", label: "はいしゃ", speech: "歯医者", icon: "🦷" },
  { id: "medicine", category: "medical", label: "くすり", speech: "薬", icon: "💊" },
  { id: "pain", category: "medical", label: "いたい", speech: "痛い", icon: "🩹" },
];

const categoryNames = {
  first: "はじめて",
  food: "食べ物",
  drink: "飲み物",
  toy: "おもちゃ",
  action: "動詞",
  person: "人物",
  place: "場所",
  schedule: "予定",
  care: "身支度",
  feeling: "気持ち",
  body: "からだ",
  medical: "医療・歯科",
  custom: "自作",
};

const state = {
  category: "first",
  caption: "bottom",
  customCaption: "bottom",
  talk: [],
  customCards: JSON.parse(localStorage.getItem("pecsCustomCards") || "[]"),
};

const allCards = () => [...baseCards, ...state.customCards];
const cardGrid = document.querySelector("#cardGrid");
const talkBar = document.querySelector("#talkBar");
const sentencePreview = document.querySelector("#sentencePreview");

function makeCard(card, className = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `picture-card caption-${card.caption || state.caption} ${className}`;
  button.dataset.cardId = card.id;
  button.setAttribute("aria-label", `${card.label}を追加`);

  const art = document.createElement("div");
  art.className = "card-art";
  if (card.image) {
    const img = document.createElement("img");
    img.src = card.image;
    img.alt = "";
    art.append(img);
  } else {
    art.textContent = card.icon || "□";
  }

  const label = document.createElement("div");
  label.className = "card-label";
  label.textContent = card.label;
  button.append(art, label);
  return button;
}

function renderCards() {
  const query = document.querySelector("#searchInput").value.trim().toLowerCase();
  const cards = allCards().filter((card) => {
    const inCategory = state.category === "custom" ? card.category === "custom" : card.category === state.category;
    const matches = !query || `${card.label} ${card.speech}`.toLowerCase().includes(query);
    return inCategory && matches;
  });

  cardGrid.innerHTML = "";
  if (!cards.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = `${categoryNames[state.category]}のカードはまだありません。`;
    cardGrid.append(empty);
    return;
  }

  cards.forEach((card) => {
    const node = makeCard(card);
    node.addEventListener("click", () => addToTalk(card));
    cardGrid.append(node);
  });
}

function addToTalk(card) {
  state.talk.push(card);
  renderTalk();
}

function renderTalk() {
  talkBar.innerHTML = "";
  state.talk.forEach((card, index) => {
    const chip = makeCard(card, "talk-chip");
    chip.title = "タップで外す";
    chip.addEventListener("click", () => {
      state.talk.splice(index, 1);
      renderTalk();
    });
    talkBar.append(chip);
  });

  const sentence = state.talk.map((card) => card.speech || card.label).join(" ");
  sentencePreview.textContent = sentence || "カードをタップしてここに並べます";
}

function speakTalk() {
  const sentence = state.talk.map((card) => card.speech || card.label).join("、");
  if (!sentence || !("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(sentence);
  utterance.lang = "ja-JP";
  utterance.rate = Number(document.querySelector("#voiceRate").value);
  window.speechSynthesis.speak(utterance);
}

function updatePreview() {
  const preview = document.querySelector("#customPreview");
  const label = preview.querySelector(".card-label");
  const art = preview.querySelector(".card-art");
  const text = document.querySelector("#customText").value.trim() || "カード名";

  preview.classList.toggle("caption-top", state.customCaption === "top");
  preview.classList.toggle("caption-bottom", state.customCaption === "bottom");
  label.textContent = text;

  const file = document.querySelector("#customImage").files[0];
  if (!file) {
    art.className = "card-art image-placeholder";
    art.textContent = "画像";
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    art.className = "card-art";
    art.innerHTML = `<img src="${reader.result}" alt="">`;
  };
  reader.readAsDataURL(file);
}

function saveCustomCard(imageData) {
  const label = document.querySelector("#customText").value.trim();
  if (!label) {
    document.querySelector("#customText").focus();
    return;
  }

  const card = {
    id: `custom-${Date.now()}`,
    category: document.querySelector("#customCategory").value,
    label,
    speech: document.querySelector("#customSpeech").value.trim() || label,
    caption: state.customCaption,
    image: imageData,
    icon: "□",
  };

  state.customCards.push(card);
  localStorage.setItem("pecsCustomCards", JSON.stringify(state.customCards));
  state.category = card.category;
  document.querySelectorAll(".category").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === state.category);
  });
  renderCards();
  document.querySelector("#makerModal").close();
}

function addCustomCard() {
  const file = document.querySelector("#customImage").files[0];
  if (!file) {
    saveCustomCard("");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => saveCustomCard(reader.result);
  reader.readAsDataURL(file);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function drawCard(ctx, card, x, y, w, h) {
  ctx.save();
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 4;
  ctx.fillRect(x, y, w, h);
  ctx.strokeRect(x, y, w, h);

  const labelTop = (card.caption || state.caption) === "top";
  const labelH = Math.max(42, h * 0.2);
  const artY = labelTop ? y + labelH : y;
  const artH = h - labelH;
  const labelY = labelTop ? y : y + artH;

  ctx.fillStyle = "#f4f7f7";
  ctx.fillRect(x + 10, artY + 10, w - 20, artH - 20);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (card.image) {
    try {
      const img = await loadImage(card.image);
      ctx.drawImage(img, x + 10, artY + 10, w - 20, artH - 20);
    } catch {
      ctx.font = `${Math.floor(Math.min(w, artH) * 0.2)}px sans-serif`;
      ctx.fillStyle = "#777";
      ctx.fillText("画像", x + w / 2, artY + artH / 2);
    }
  } else {
    ctx.font = `${Math.floor(Math.min(w, artH) * 0.42)}px sans-serif`;
    ctx.fillStyle = "#111";
    ctx.fillText(card.icon || "□", x + w / 2, artY + artH / 2);
  }

  drawLabel(ctx, card.label, x, labelY, w, labelH);
  ctx.restore();
}

function drawLabel(ctx, text, x, y, w, h) {
  ctx.fillStyle = "#111";
  ctx.font = `bold ${Math.max(26, Math.floor(h * 0.42))}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + w / 2, y + h / 2, w - 18);
}

async function renderPrintSheet() {
  const canvas = document.querySelector("#printCanvas");
  const ctx = canvas.getContext("2d");
  const layout = document.querySelector("#printLayout").value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const configs = {
    medium: { cols: 3, rows: 2 },
    small: { cols: 6, rows: 2 },
    wide: { cols: 1, rows: 2 },
    tall: { cols: 2, rows: 1 },
  };
  const { cols, rows } = configs[layout];
  const gap = 30;
  const cardW = (canvas.width - gap * (cols + 1)) / cols;
  const cardH = (canvas.height - gap * (rows + 1)) / rows;
  const cards = state.talk.slice(0, cols * rows);

  for (const [index, card] of cards.entries()) {
    const col = index % cols;
    const row = Math.floor(index / cols);
    await drawCard(ctx, card, gap + col * (cardW + gap), gap + row * (cardH + gap), cardW, cardH);
  }
}

document.querySelectorAll(".category").forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelectorAll(".category").forEach((item) => item.classList.toggle("active", item === button));
    renderCards();
  });
});

document.querySelectorAll("[data-caption]").forEach((button) => {
  button.addEventListener("click", () => {
    state.caption = button.dataset.caption;
    document.querySelectorAll("[data-caption]").forEach((item) => item.classList.toggle("active", item === button));
    renderCards();
  });
});

document.querySelectorAll("[data-custom-caption]").forEach((button) => {
  button.addEventListener("click", () => {
    state.customCaption = button.dataset.customCaption;
    document.querySelectorAll("[data-custom-caption]").forEach((item) => item.classList.toggle("active", item === button));
    updatePreview();
  });
});

document.querySelector("#searchInput").addEventListener("input", renderCards);
document.querySelector("#speakButton").addEventListener("click", speakTalk);
document.querySelector("#clearTalk").addEventListener("click", () => {
  state.talk = [];
  renderTalk();
});
document.querySelector("#openMaker").addEventListener("click", () => document.querySelector("#makerModal").showModal());
document.querySelector("#customText").addEventListener("input", updatePreview);
document.querySelector("#customImage").addEventListener("change", updatePreview);
document.querySelector("#addCustomCard").addEventListener("click", addCustomCard);
document.querySelector("#printCards").addEventListener("click", async () => {
  await renderPrintSheet();
  document.querySelector("#printModal").showModal();
});
document.querySelector("#printLayout").addEventListener("change", () => renderPrintSheet());
document.querySelector("#downloadSheet").addEventListener("click", async () => {
  await renderPrintSheet();
  const link = document.createElement("a");
  link.download = "pecs-card-sheet.png";
  link.href = document.querySelector("#printCanvas").toDataURL("image/png");
  link.click();
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

renderCards();
renderTalk();
