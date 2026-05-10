const baseCards = [
  { id: "please", category: "first", label: "ください", speech: "ください", icon: "🙏" },
  { id: "more", category: "first", label: "もっと", speech: "もっと", icon: "➕" },
  { id: "yes", category: "first", label: "はい", speech: "はい", icon: "⭕" },
  { id: "no", category: "first", label: "いいえ", speech: "いいえ", icon: "✖" },
  { id: "help", category: "first", label: "てつだって", speech: "手伝って", icon: "🤝" },
  { id: "break", category: "first", label: "おしまい", speech: "おしまい", icon: "🏁" },
  { id: "again", category: "first", label: "もういっかい", speech: "もう一回", icon: "🔁" },
  { id: "different", category: "first", label: "ちがう", speech: "違う", icon: "↔️" },
  { id: "look", category: "first", label: "みて", speech: "見て", icon: "👀" },
  { id: "want", category: "first", label: "ほしい", speech: "欲しい", icon: "🙌" },
  { id: "rice", category: "food", label: "ごはん", speech: "ごはん", icon: "🍚" },
  { id: "bread", category: "food", label: "パン", speech: "パン", icon: "🍞" },
  { id: "apple", category: "food", label: "りんご", speech: "りんご", icon: "🍎" },
  { id: "banana", category: "food", label: "バナナ", speech: "バナナ", icon: "🍌" },
  { id: "snack", category: "food", label: "おかし", speech: "お菓子", icon: "🍪" },
  { id: "curry", category: "food", label: "カレー", speech: "カレー", icon: "🍛" },
  { id: "noodle", category: "food", label: "めん", speech: "麺", icon: "🍜" },
  { id: "egg", category: "food", label: "たまご", speech: "卵", icon: "🥚" },
  { id: "meat", category: "food", label: "おにく", speech: "お肉", icon: "🍖" },
  { id: "fish", category: "food", label: "さかな", speech: "魚", icon: "🐟" },
  { id: "vegetable", category: "food", label: "やさい", speech: "野菜", icon: "🥦" },
  { id: "ice", category: "food", label: "アイス", speech: "アイス", icon: "🍨" },
  { id: "water", category: "drink", label: "みず", speech: "水", icon: "🥤" },
  { id: "tea", category: "drink", label: "おちゃ", speech: "お茶", icon: "🍵" },
  { id: "milk", category: "drink", label: "ぎゅうにゅう", speech: "牛乳", icon: "🥛" },
  { id: "juice", category: "drink", label: "ジュース", speech: "ジュース", icon: "🧃" },
  { id: "sports-drink", category: "drink", label: "スポドリ", speech: "スポーツドリンク", icon: "🧴" },
  { id: "soup", category: "drink", label: "スープ", speech: "スープ", icon: "🥣" },
  { id: "car", category: "toy", label: "くるま", speech: "車", icon: "🚗" },
  { id: "blocks", category: "toy", label: "ブロック", speech: "ブロック", icon: "🧱" },
  { id: "ball", category: "toy", label: "ボール", speech: "ボール", icon: "⚽" },
  { id: "book", category: "toy", label: "えほん", speech: "絵本", icon: "📘" },
  { id: "tablet", category: "toy", label: "タブレット", speech: "タブレット", icon: "📱" },
  { id: "puzzle", category: "toy", label: "パズル", speech: "パズル", icon: "🧩" },
  { id: "train-toy", category: "toy", label: "でんしゃ", speech: "電車", icon: "🚃" },
  { id: "music", category: "toy", label: "おんがく", speech: "音楽", icon: "🎵" },
  { id: "eat", category: "action", label: "たべる", speech: "食べる", icon: "🍽️" },
  { id: "drink", category: "action", label: "のむ", speech: "飲む", icon: "🥤" },
  { id: "go", category: "action", label: "いく", speech: "行く", icon: "🚶" },
  { id: "play", category: "action", label: "あそぶ", speech: "遊ぶ", icon: "🎈" },
  { id: "sleep", category: "action", label: "ねる", speech: "寝る", icon: "🛏️" },
  { id: "wait", category: "action", label: "まつ", speech: "待つ", icon: "⏳" },
  { id: "sit", category: "action", label: "すわる", speech: "座る", icon: "🪑" },
  { id: "stand", category: "action", label: "たつ", speech: "立つ", icon: "🧍" },
  { id: "run", category: "action", label: "はしる", speech: "走る", icon: "🏃" },
  { id: "read", category: "action", label: "よむ", speech: "読む", icon: "📖" },
  { id: "write", category: "action", label: "かく", speech: "書く", icon: "✏️" },
  { id: "listen", category: "action", label: "きく", speech: "聞く", icon: "👂" },
  { id: "mom", category: "person", label: "おかあさん", speech: "お母さん", icon: "👩" },
  { id: "dad", category: "person", label: "おとうさん", speech: "お父さん", icon: "👨" },
  { id: "teacher", category: "person", label: "せんせい", speech: "先生", icon: "🧑‍🏫" },
  { id: "friend", category: "person", label: "ともだち", speech: "友達", icon: "🧑‍🤝‍🧑" },
  { id: "grandma", category: "person", label: "おばあちゃん", speech: "おばあちゃん", icon: "👵" },
  { id: "grandpa", category: "person", label: "おじいちゃん", speech: "おじいちゃん", icon: "👴" },
  { id: "sibling", category: "person", label: "きょうだい", speech: "きょうだい", icon: "🧒" },
  { id: "doctor", category: "person", label: "おいしゃさん", speech: "お医者さん", icon: "🧑‍⚕️" },
  { id: "home", category: "place", label: "いえ", speech: "家", icon: "🏠" },
  { id: "school", category: "place", label: "がっこう", speech: "学校", icon: "🏫" },
  { id: "park", category: "place", label: "こうえん", speech: "公園", icon: "🌳" },
  { id: "toilet-place", category: "place", label: "トイレ", speech: "トイレ", icon: "🚻" },
  { id: "car-place", category: "place", label: "くるま", speech: "車", icon: "🚙" },
  { id: "bus", category: "place", label: "バス", speech: "バス", icon: "🚌" },
  { id: "shop", category: "place", label: "おみせ", speech: "お店", icon: "🏪" },
  { id: "station", category: "place", label: "えき", speech: "駅", icon: "🚉" },
  { id: "library", category: "place", label: "としょかん", speech: "図書館", icon: "🏛️" },
  { id: "morning", category: "schedule", label: "あさ", speech: "朝", icon: "🌅" },
  { id: "outing", category: "schedule", label: "おでかけ", speech: "お出かけ", icon: "🎒" },
  { id: "bath", category: "schedule", label: "おふろ", speech: "お風呂", icon: "🛁" },
  { id: "dinner", category: "schedule", label: "よるごはん", speech: "夜ごはん", icon: "🍽️" },
  { id: "break-time", category: "schedule", label: "やすみ", speech: "休み", icon: "☕" },
  { id: "study", category: "schedule", label: "べんきょう", speech: "勉強", icon: "📚" },
  { id: "therapy", category: "schedule", label: "れんしゅう", speech: "練習", icon: "📝" },
  { id: "bedtime", category: "schedule", label: "ねるじかん", speech: "寝る時間", icon: "🌙" },
  { id: "wash", category: "care", label: "てをあらう", speech: "手を洗う", icon: "🧼" },
  { id: "toothbrush", category: "care", label: "はみがき", speech: "歯磨き", icon: "🪥" },
  { id: "change", category: "care", label: "きがえ", speech: "着替え", icon: "👕" },
  { id: "toilet", category: "care", label: "トイレ", speech: "トイレ", icon: "🚽" },
  { id: "mask", category: "care", label: "マスク", speech: "マスク", icon: "😷" },
  { id: "shoes", category: "care", label: "くつ", speech: "靴", icon: "👟" },
  { id: "bag", category: "care", label: "かばん", speech: "かばん", icon: "🎒" },
  { id: "hair", category: "care", label: "かみ", speech: "髪", icon: "💇" },
  { id: "happy", category: "feeling", label: "うれしい", speech: "嬉しい", icon: "😊" },
  { id: "sad", category: "feeling", label: "かなしい", speech: "悲しい", icon: "😢" },
  { id: "angry", category: "feeling", label: "いや", speech: "嫌", icon: "😣" },
  { id: "tired", category: "feeling", label: "つかれた", speech: "疲れた", icon: "😴" },
  { id: "fun", category: "feeling", label: "たのしい", speech: "楽しい", icon: "😄" },
  { id: "scared", category: "feeling", label: "こわい", speech: "怖い", icon: "😟" },
  { id: "hot", category: "feeling", label: "あつい", speech: "暑い", icon: "🥵" },
  { id: "cold", category: "feeling", label: "さむい", speech: "寒い", icon: "🥶" },
  { id: "sleepy", category: "feeling", label: "ねむい", speech: "眠い", icon: "🥱" },
  { id: "head", category: "body", label: "あたま", speech: "頭", icon: "🙂" },
  { id: "stomach", category: "body", label: "おなか", speech: "お腹", icon: "🧍" },
  { id: "hand", category: "body", label: "て", speech: "手", icon: "✋" },
  { id: "foot", category: "body", label: "あし", speech: "足", icon: "🦶" },
  { id: "eye", category: "body", label: "め", speech: "目", icon: "👁️" },
  { id: "ear", category: "body", label: "みみ", speech: "耳", icon: "👂" },
  { id: "mouth", category: "body", label: "くち", speech: "口", icon: "👄" },
  { id: "tooth", category: "body", label: "は", speech: "歯", icon: "🦷" },
  { id: "hospital", category: "medical", label: "びょういん", speech: "病院", icon: "🏥" },
  { id: "dentist", category: "medical", label: "はいしゃ", speech: "歯医者", icon: "🦷" },
  { id: "medicine", category: "medical", label: "くすり", speech: "薬", icon: "💊" },
  { id: "pain", category: "medical", label: "いたい", speech: "痛い", icon: "🩹" },
  { id: "fever", category: "medical", label: "ねつ", speech: "熱", icon: "🌡️" },
  { id: "cough", category: "medical", label: "せき", speech: "咳", icon: "🤧" },
  { id: "injection", category: "medical", label: "ちゅうしゃ", speech: "注射", icon: "💉" },
  { id: "checkup", category: "medical", label: "けんさ", speech: "検査", icon: "🩺" },
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

const cardPools = {
  first: [
    "こんにちは", "ありがとう", "ごめんね", "だいじょうぶ", "わかった", "わからない", "いやです", "いいです", "これ", "それ",
    "あれ", "こっち", "あっち", "どこ", "だれ", "なに", "いつ", "いっしょに", "ひとりで", "ゆっくり",
    "はやく", "ちょっとまって", "もうすこし", "できた", "できない", "かして", "どうぞ", "みせて", "きいて", "よんで",
    "あけて", "しめて", "とって", "おいて", "やめて", "はじめる", "つぎ", "まえ", "おなじ", "だいすき",
    "きらい", "えらぶ", "これがいい", "もういらない", "おねがい", "さがす", "なくした", "みつけた", "おしえて", "つかう"
  ],
  food: [
    "おにぎり", "みそしる", "うどん", "そば", "ラーメン", "スパゲッティ", "ピザ", "ハンバーグ", "からあげ", "ポテト",
    "サラダ", "トマト", "にんじん", "きゅうり", "とうもろこし", "いちご", "みかん", "ぶどう", "もも", "なし",
    "ヨーグルト", "チーズ", "プリン", "ゼリー", "ケーキ", "チョコ", "せんべい", "クッキー", "ドーナツ", "ホットケーキ",
    "おもち", "のり", "ふりかけ", "納豆", "豆腐", "コロッケ", "ぎょうざ", "しゅうまい", "ハム", "ソーセージ",
    "えび", "かに", "ツナ", "パンケーキ", "シリアル", "サンドイッチ", "お弁当", "おかわり", "小さいごはん", "大きいごはん"
  ],
  drink: [
    "むぎちゃ", "ココア", "カルピス", "りんごジュース", "オレンジジュース", "ぶどうジュース", "炭酸", "お湯", "冷たい水", "あたたかいお茶",
    "みそ汁", "牛乳少し", "牛乳たくさん", "飲みたい", "いらない", "ストロー", "コップ", "ペットボトル", "水筒", "氷",
    "ホットミルク", "豆乳", "飲むヨーグルト", "薬の水", "うがい水", "給食の牛乳", "朝の水", "寝る前の水", "休み時間の水", "もう一口",
    "半分", "全部", "冷まして", "こぼれた", "ふいて", "入れて", "少なく", "多く", "おかわり飲み物", "飲み終わり",
    "スプーンで飲む", "水分補給", "甘い飲み物", "すっぱい飲み物", "ぬるい", "あつい飲み物", "飲めた", "飲めない", "持ってきて", "片づける"
  ],
  toy: [
    "ぬいぐるみ", "人形", "ミニカー", "プラレール", "レゴ", "積み木", "ままごと", "粘土", "お絵かき", "折り紙",
    "シール", "カード", "ゲーム", "動画", "テレビ", "リモコン", "風船", "シャボン玉", "砂場", "すべり台",
    "ブランコ", "自転車", "三輪車", "縄跳び", "楽器", "太鼓", "ピアノ", "マイク", "ライト", "水遊び",
    "プール", "電車遊び", "道路遊び", "お医者さんごっこ", "お店屋さん", "迷路", "図鑑", "しかけ絵本", "電池", "充電",
    "貸して", "順番", "交代", "一緒に遊ぶ", "一人で遊ぶ", "片づけ", "壊れた", "直して", "もう一回遊ぶ", "終わりにする"
  ],
  action: [
    "見る", "話す", "歌う", "踊る", "作る", "切る", "貼る", "塗る", "消す", "開ける",
    "閉める", "入れる", "出す", "持つ", "運ぶ", "探す", "選ぶ", "並べる", "片づける", "洗う",
    "拭く", "着る", "脱ぐ", "履く", "かぶる", "押す", "引く", "投げる", "取る", "渡す",
    "待つ", "止まる", "歩く", "登る", "降りる", "乗る", "降りる車", "笑う", "泣く", "怒る",
    "休む", "頑張る", "練習する", "勉強する", "質問する", "答える", "呼ぶ", "集まる", "離れる", "帰る"
  ],
  person: [
    "ぼく", "わたし", "あなた", "家族", "お兄ちゃん", "お姉ちゃん", "弟", "妹", "赤ちゃん", "保育士さん",
    "支援員さん", "看護師さん", "歯医者さん", "店員さん", "運転手さん", "警察官", "消防士", "近所の人", "お客さん", "クラスの子",
    "男の子", "女の子", "大人", "子ども", "みんな", "誰か", "一人", "二人", "グループ", "先生に言う",
    "お母さんに言う", "お父さんに言う", "友達に言う", "助ける人", "遊ぶ人", "待つ人", "迎えに来る人", "送る人", "好きな人", "苦手な人",
    "療育の先生", "学校の先生", "園の先生", "祖父母", "親戚", "お医者さんに相談", "係の人", "受付の人", "知らない人", "いつもの人"
  ],
  place: [
    "教室", "廊下", "玄関", "台所", "リビング", "寝室", "洗面所", "お風呂場", "庭", "ベランダ",
    "スーパー", "コンビニ", "薬局", "病院", "歯医者", "療育", "児童館", "図書室", "体育館", "プール",
    "駅", "バス停", "電車", "車の中", "駐車場", "公民館", "レストラン", "カフェ", "公園のトイレ", "遊具",
    "砂場", "ベンチ", "家に帰る", "学校に行く", "外", "中", "上", "下", "前", "後ろ",
    "右", "左", "近く", "遠く", "静かな場所", "休む場所", "待つ場所", "集合場所", "入口", "出口"
  ],
  schedule: [
    "起きる", "朝ごはん", "着替え", "登園", "登校", "朝の会", "自由遊び", "制作", "運動", "給食",
    "昼ごはん", "歯磨き", "昼寝", "帰りの会", "お迎え", "宿題", "おやつ", "テレビ時間", "お風呂", "晩ごはん",
    "薬", "トイレ時間", "寝る準備", "明日", "今日", "昨日", "午前", "午後", "土曜日", "日曜日",
    "病院の日", "歯医者の日", "買い物", "散歩", "外遊び", "雨の日", "晴れの日", "イベント", "誕生日", "休みの日",
    "出発", "到着", "待ち時間", "終わりの時間", "次の予定", "変更", "中止", "もうすぐ", "あとで", "今"
  ],
  care: [
    "顔を洗う", "うがい", "鼻をかむ", "爪切り", "髪をとかす", "服を選ぶ", "ズボン", "靴下", "上着", "帽子",
    "手袋", "ハンカチ", "ティッシュ", "水筒を持つ", "連絡帳", "靴を履く", "靴を脱ぐ", "かばんを置く", "かばんを持つ", "手を拭く",
    "汗を拭く", "着替えを入れる", "洗濯に出す", "パジャマ", "オムツ", "パンツ", "トイレットペーパー", "流す", "手洗い場", "消毒",
    "体温を測る", "薬を飲む", "目薬", "絆創膏", "冷やす", "温める", "休憩する", "水を飲む", "姿勢を直す", "椅子に座る",
    "机を拭く", "ゴミを捨てる", "食器を下げる", "口を拭く", "エプロン", "スプーン", "フォーク", "箸", "準備する", "片づける"
  ],
  feeling: [
    "びっくり", "ドキドキ", "不安", "安心", "さみしい", "恥ずかしい", "くやしい", "わくわく", "落ち着く", "落ち着かない",
    "うるさい", "静かがいい", "まぶしい", "暗い", "痛い", "かゆい", "気持ち悪い", "お腹すいた", "のどかわいた", "眠れない",
    "やりたい", "やりたくない", "好き", "苦手", "困った", "助かった", "わからなくて不安", "できてうれしい", "失敗した", "もう大丈夫",
    "まだ無理", "休みたい", "一人がいい", "一緒がいい", "抱っこして", "離れて", "近い", "遠い", "大きい音がいや", "人が多い",
    "暑すぎる", "寒すぎる", "疲れすぎた", "楽しかった", "嫌だった", "心配", "平気", "怖くない", "頑張った", "ほっとした"
  ],
  body: [
    "顔", "首", "肩", "腕", "ひじ", "指", "爪", "背中", "胸", "腰",
    "おしり", "ひざ", "すね", "かかと", "つま先", "鼻", "ほっぺ", "あご", "舌", "のど",
    "髪", "おでこ", "まゆげ", "まつげ", "耳たぶ", "手首", "足首", "おへそ", "皮膚", "骨",
    "筋肉", "心臓", "息", "体", "右手", "左手", "右足", "左足", "上の歯", "下の歯",
    "目が痛い", "耳が痛い", "お腹が痛い", "頭が痛い", "足が痛い", "手が痛い", "かゆい所", "ぶつけた所", "けが", "熱い所"
  ],
  medical: [
    "受付", "待合室", "診察", "先生に見せる", "聴診器", "体温計", "血圧", "検尿", "レントゲン", "吸入",
    "点滴", "消毒", "包帯", "湿布", "目薬", "塗り薬", "飲み薬", "粉薬", "シロップ", "薬局",
    "診察券", "保険証", "予約", "待つ", "呼ばれる", "口を開ける", "あーん", "歯を見る", "削る音", "うがい",
    "虫歯", "歯ブラシ", "フッ素", "耳鼻科", "眼科", "皮膚科", "小児科", "リハビリ", "検査結果", "痛くない",
    "少し痛い", "終わった", "頑張った", "休む", "水を飲む", "マスク", "咳が出る", "鼻水", "お腹が痛い", "気持ち悪い"
  ],
};

const categoryIcons = {
  first: "💬",
  food: "🍽️",
  drink: "🥤",
  toy: "🧩",
  action: "✨",
  person: "🙂",
  place: "📍",
  schedule: "🗓️",
  care: "🧼",
  feeling: "💛",
  body: "🧍",
  medical: "🏥",
};

function buildSupplementalCards() {
  const existingByCategory = baseCards.reduce((map, card) => {
    map[card.category] ||= new Set();
    map[card.category].add(card.label);
    return map;
  }, {});

  return Object.entries(cardPools).flatMap(([category, labels]) => {
    const existing = existingByCategory[category] || new Set();
    const needed = Math.max(0, 50 - existing.size);
    return labels
      .filter((label) => !existing.has(label))
      .slice(0, needed)
      .map((label, index) => ({
        id: `extra-${category}-${index}`,
        category,
        label,
        speech: label,
        icon: categoryIcons[category] || "□",
      }));
  });
}

const supplementalCards = buildSupplementalCards();

const state = {
  category: "first",
  caption: "bottom",
  customCaption: "bottom",
  talk: [],
  customCards: JSON.parse(localStorage.getItem("pecsCustomCards") || "[]"),
};

const allCards = () => [...baseCards, ...supplementalCards, ...state.customCards];
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
