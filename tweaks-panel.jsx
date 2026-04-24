# SHUIN（朱印）LP デザイン指示書
## 海外向け日本包丁 単品ランディングページ

> **Claude Designへの指示**: この指示書に従って、単品LP（ランディングページ）をReact（.jsx）で制作してください。全セクションを1つのファイルにまとめてください。画像はセクション9に記載のURLをそのまま埋め込んでください。プレースホルダー枠（ダッシュボーダー）は使わず、必ず画像を入れてください。商品画像は添付ファイルから使用してください。

---

## 1. プロジェクト概要

日本の包丁を海外（US優先）に販売するDTCブランド「SHUIN（朱印）」の単品LP。
広告（Facebook/Instagram）からの流入を想定。1商品のみのシンプルなページ。

**目的**: 広告テスト用LP。クリック→LP→購入（または興味度の検証）
**ターゲット**: 米国の料理好き（25-45歳）、日本文化・クラフトに関心がある層
**商品**: VG-10 67層ダマスカス鋼 三徳包丁 180mm（7インチ）
**価格**: $75

---

## 2. ブランドアイデンティティ

### ブランド名
**SHUIN / 朱印**

「朱印」は日本の寺社で押される赤い証印。「本物の証」を意味する。
※ KAIグループの「Shun（旬）」とは別ブランド。音が近いためロゴで明確に差別化する。

### ブランドの性格
- 日本のクラフト文化に根ざした「静かな本物感」
- 高級感はあるが気取りすぎない（$75という価格帯に誠実）
- 「セレクトショップの目利き」的なポジション
- 偽日本包丁ブランド（Huusk, Vertoku等）との差別化 = 透明性・具体性

---

## 2.5 ポジショニング（最重要セクション）

### 競合マップと Shuin の立ち位置

```
                    高い信頼性（本物の日本製）
                         ▲
                         │
    SharpEdge            │         Shun (KAI)
    Chubo Knives         │         Seisuke/Japanny
    ($130-300)           │         ($100-250)
                         │
 ──────────────── SHUIN ─┼──────────────────────
    安い ◄───── ($75) ──►│               高い
                         │
    Kitsune Cutlery      │         F.N. Sharp
    KAN Knives           │         ($149)
    (クラファン系 $60-110)│
                         │
    Huusk / Vertoku      │
    Senken / Matsato     │
    (偽日本ブランド $30-60)│
                         ▼
                    低い信頼性（中国OEM偽装）
```

### Shuin が唯一持つ差別化ポイント

**他の全競合にない決定的な強み: 「日本在住のキュレーター」**

調査した包丁クラファン成功例:
- Kuroi Hana (Edge of Belgravia) → ロンドン拠点（£170万調達）
- Kitsune Cutlery → 米国拠点（$2.5万調達）
- KAN Kitchen Knives → 米国拠点
- Nagasaki Knives → デンマーク拠点
- Orient Knives → 不明（欧米）

**全て「日本の鋼材を使っている」と言うが、日本に拠点を置いているブランドは皆無。**
Shuinはこの空白地帯にいる。

### LP上でのポジショニングの見せ方

クラファン系が上手い「新興ブランドの信頼構築」パターンを分析し、Shuinに適用する:

**① 問題提起 → 解決策の構造（全クラファン共通）**
「素晴らしい包丁は存在するが、3つの壁がある」
- 高すぎる（中間業者のマージンが何重にも乗る）
- 偽物だらけ（"Japanese"と書いてあるが中国製）
- 選べない（100種類の中からどれを買えばいいかわからない）
→ Shuinはこの3つを同時に解決する

**② 透明性の証明（Kitsune Cutlery方式）**
- 鋼材のソースを明示: 「VG-10 by Takefu Special Steel Co., Fukui, Japan」
- 偽VG-10が横行している事実に触れ、「だからこそ日本で直接確認する」と繋げる
- 可能であれば将来的に鋼材証明書の写真を掲載

**③ 「1本に絞る」哲学（DTC新興ブランド共通）**
大手は100種類扱うが、Shuinは「この1本」に全集中。
- 三徳は日本の家庭で最も使われている万能包丁
- 初めての日本包丁として最適
- 1本に絞ることで品質管理と価格の両方を最適化

**④ 「日本にいるから見える」ストーリー（Shuin独自）**
他ブランドが言えないこと:
- 「私たちは東京に拠点を置いています」
- 「日本の鍛冶文化を日常的に触れている人間が選んでいます」
- 「海外から仕入れるのではなく、産地の近くにいるからこそわかる品質の違い」

### ストーリーセクションの改訂コピー

旧: 一般的な「中間マージンカット」ストーリー
新: 以下の3段構成

**段落1 — 問題提起:**
```
There are two types of "Japanese knives" sold online.

The first costs $30 and ships from a warehouse in Shenzhen.
The listing says "Japanese Damascus steel." The steel is not from Japan.
The Damascus pattern is acid-etched, not forged. It arrives in 3 weeks.

The second costs $200 and ships from a curated shop in the US or Europe.
The steel is real. The craft is real. But so is the 3x markup from
importers, distributors, and retail overhead.
```

**段落2 — 解決策:**
```
Shuin exists in the space between.

We're based in Tokyo. We evaluate knives the way a sommelier
evaluates wine — not by the label, but by what's inside. Every knife
we offer uses verified VG-10 steel from Takefu Special Steel, clad in
67 layers of genuine Damascus. We check the grind, the edge geometry,
the handle fit, and the out-of-box sharpness. If it doesn't pass,
we don't list it.
```

**段落3 — なぜこの価格か:**
```
By focusing on a single knife and shipping direct from Japan,
we eliminate every cost that doesn't make the blade sharper.
No showroom. No catalog of 200 SKUs. No Amazon fees.

The result: the same steel and craftsmanship found in $180 knives,
delivered for $75. Not because we cut corners — because we cut
middlemen.
```

### ヒーローコピーの改訂

旧:
```
The Santoku Perfected
67-layer VG-10 Damascus steel. Hand-finished in the tradition
of Japanese bladesmiths. Professional-grade craftsmanship
— without the markup.
```

新:
```
One Knife. No Middlemen.
Curated in Tokyo. 67-layer VG-10 Damascus.
The $180 blade — for $75.
```

→ このコピーの方がポジショニングが明確。「何が違うのか」が一瞬でわかる。

### 追加セクション案:「The Problem with "Japanese" Knives」

FAQの前に、短い教育セクションを追加する（クラファン系で非常に効果的なパターン）。

```
THE PROBLEM WITH "JAPANESE" KNIVES

Thousands of knives sold online claim to be "Japanese." Most aren't.

They use vague terms like "Japanese-inspired steel" or "traditional
Japanese craftsmanship" while shipping from factories that have
never seen Japan. The handles are generic. The Damascus patterns
are cosmetic. The steel grade is undisclosed.

Shuin takes the opposite approach: full transparency.

✦ Steel: VG-10 by Takefu Special Steel Co. (Fukui, Japan)
✦ Construction: 67 forged Damascus layers (not acid-etched)
✦ Finish: Hand-hammered tsuchime
✦ Handle: Natural rosewood, octagonal wa-style
✦ Curated by: Our team in Tokyo, Japan
```

このセクションは「偽日本包丁」問題を知っている層（Reddit、YouTube knife community等）に強く刺さる。知らない層にも「だからここは信頼できる」というシグナルになる。

### ロゴコンセプト
- 朱印（赤い印章）をモチーフにしたスクエアまたは丸印のシンボル
- 印章の中に「朱印」の漢字
- 印章の下または横に「SHUIN」のローマ字
- 色: 朱色（#C0392B〜#D94F3B 付近の赤）
- 質感: 印章のかすれ・にじみを表現すると本物感が出る

---

## 3. デザイン方向性

### 美学
**「和の静謐 × モダンラグジュアリー」**

- 全体的にダーク基調（漆黒〜墨色）
- 朱色（赤）をアクセントカラーとして限定的に使用
- 和紙のテクスチャ、墨のにじみ、金属の光沢感を微細に取り入れる
- 余白を大胆に使う（詰め込まない）
- 競合参考: SharpEdge（品のあるダーク系）、F.N. Sharp（商品特化LP）

### 避けるべきもの
- 「SAMURAI」「KATANA」「NINJA」的な安直な日本イメージ
- 桜、富士山、芸者などのクリシェ
- 過度な割引表示（50% OFF!!みたいなもの → 偽ブランドに見える）
- 明るすぎるUIや、ポップすぎる色使い
- Inter, Roboto, Arial などの汎用フォント

---

## 4. カラーパレット

| 用途 | 色名 | コード | 備考 |
|------|-------|--------|------|
| 背景（主） | 漆黒 | #0A0A08 | ほぼ黒だが純黒ではない（温かみ） |
| 背景（サブ） | 墨色 | #121210 | セクション交互の背景 |
| テキスト（主） | 生成色 | #E8E0D6 | 白ではなく和紙のような色 |
| テキスト（サブ） | 灰 | #999999 | 説明文・補足 |
| アクセント | 朱色 | #C0392B | CTA、ロゴ、ラベル、ハイライト |
| アクセント（ホバー） | 明朱 | #D94F3B | ボタンホバー時 |
| 境界線 | 微白 | rgba(255,255,255,0.06) | セクション仕切り |

---

## 5. タイポグラフィ

| 用途 | フォント | ウェイト | 備考 |
|------|----------|----------|------|
| 見出し（H1, H2） | Cormorant Garamond | 600-700 | セリフ体。上品で時代を超えた印象 |
| ラベル・カテゴリ | Outfit | 500 | サンセリフ。小さく、レタースペース広め（3-4px）、全大文字 |
| 本文 | Outfit | 300-400 | サンセリフ。読みやすい |
| 価格・数値 | Cormorant Garamond | 700 | セリフ体。大きく表示 |

**タイプ処理ルール:**
- ラベル: 11px / レタースペース 3-4px / 大文字 / 朱色
- 見出し: clamp(28px, 4vw, 48px) 程度のレスポンシブサイズ
- 本文: 14-16px / 行間 1.7-1.9
- ヒーローのキャッチコピー: clamp(36px, 6vw, 64px) 最大サイズ

---

## 6. ページ構成 & セクション詳細

### Section 1: ナビゲーションバー（固定）

**レイアウト**: 左にロゴ + "SHUIN"、右に "ORDER NOW" ボタン
**挙動**: スクロールで背景がブラーガラスに変化（transparent → rgba背景 + backdrop-filter）
**ボタンスタイル**: 朱色ボーダーのゴーストボタン、小さめ

---

### Section 2: ヒーロー（ファーストビュー）

**占有**: 100vh（画面全体）
**背景**: 包丁の美しい写真（暗い背景に包丁が浮かぶ構図）
  - 現状はプレースホルダー画像。後で実物写真に差し替え
  - 背景は brightness(0.2) + saturate(0.6) で暗く処理
  - 下方向にグラデーションフェードで次セクションへ自然につなぐ
  - スクロールでわずかにズーム（パララックス効果）

**コンテンツ（中央揃え）:**
```
[朱印ロゴ（印章）]

CURATED IN TOKYO · SHIPPED FROM JAPAN  ← ラベル（朱色、大文字）

One Knife.
  No Middlemen.      ← "No Middlemen."はイタリック＋朱色

Curated in Tokyo. 67-layer VG-10 Damascus.
The $180 blade — for $75.

[ORDER — $75]  ← 朱色背景のCTAボタン（パルスグロウアニメーション）

Free shipping to the US · 30-day guarantee  ← 小さいグレー文字
```

**アニメーション**: 各要素が下から順にフェードイン（0.2秒ずつディレイ）

---

### Section 3: ストーリー（ポジショニング）

**レイアウト**: 左テキスト + 右画像（2カラム、モバイルは縦積み）
**ラベル**: "Why We Exist"（朱色）

**見出し（H2、左カラム上部）:**
```
One Knife. Zero Markup.
```
→ "Zero Markup." は朱色

**左カラム（テキスト）— 3段構成:**

段落1（問題提起）:
```
There are two types of "Japanese knives" sold online.

The first costs $30 and ships from a warehouse in Shenzhen.
The listing says "Japanese Damascus steel." The steel is not
from Japan. The Damascus pattern is acid-etched, not forged.

The second costs $200 from a curated shop in the US or Europe.
The steel is real. The craft is real. But so is the 3x markup
from importers, distributors, and retail overhead.
```

段落2（解決策）:
```
Shuin exists in the space between.

Based in Tokyo, we evaluate knives the way a sommelier evaluates
wine — not by the label, but by what's inside. Every knife uses
verified VG-10 steel from Takefu Special Steel, clad in 67 layers
of genuine Damascus.
```
→ "Based in Tokyo" は朱色またはボールドで強調

段落3（価格の理由）:
```
By focusing on a single knife and shipping direct from Japan,
we eliminate every cost that doesn't make the blade sharper.

The result: the same steel found in $180 knives, delivered
for $75.
```
→ 最後の一文はイタリック＋やや明るい色

**右カラム（画像）:**
- 包丁の製造工程 or 刃のクローズアップ写真（プレースホルダー）
- 画像の左上にオフセットした赤い枠線（デコレーション）
- 画像右下に小さいタグ：「CURATED IN TOKYO」（暗い背景に朱色テキスト）

---

### Section 4: スペック（仕様）

**背景**: わずかに明るい（rgba白 1.5%程度）
**ラベル**: "Specifications"（中央揃え）
**見出し**: "Built to Outperform"（中央揃え）

**商品画像エリア:**
- 中央に大きく包丁の横向き全体写真（プレースホルダー枠）
- 背景に微かな朱色グラデーション（左上から右下）

**スペックグリッド（6つ、3×2 or レスポンシブ）:**
各カードは左ボーダー（朱色、薄め）のスタイル

| ラベル | 値 | 補足 |
|--------|------|------|
| Steel | VG-10 Core | 67-layer Damascus cladding |
| Hardness | HRC 60±1 | Long-lasting edge retention |
| Edge | 15° per side | Double bevel, hand-sharpened |
| Blade | 7" / 180mm | Hammered tsuchime finish |
| Handle | Rosewood | Octagonal wa-handle |
| Weight | ~165g | Balanced for control |

---

### Section 5: Why Shuin（差別化ポイント）

**ラベル**: "Why Shuin"
**レイアウト**: 縦並びの番号付きリスト（01, 02, 03, 04）

各アイテムのレイアウト:
```
[番号（大きく薄い朱色）]  [タイトル（セリフ体22px）]
                          [説明文（グレー14px、最大560px幅）]
──────────────────────────── ← 薄い区切り線
```

**内容:**

**01 — Same Steel, Fraction of the Price**
VG-10 by Takefu Special Steel — the same core material used in $180+ knives from established brands. Our direct-ship model removes the retail markup, not the quality.

**02 — Tsuchime Hammered Finish**
The hammered texture isn't just visual. It creates air pockets between the blade and food, reducing drag and preventing slices from sticking — a functional detail perfected over centuries.

**03 — Wa-Handle for All-Day Comfort**
The traditional octagonal rosewood handle positions naturally in a pinch grip, reducing fatigue during extended prep. Lighter and more balanced than western handles.

**04 — Curated, Not Mass-Produced**
We don't carry hundreds of SKUs. Every knife we offer has been personally evaluated for grind quality, F&F, and out-of-box sharpness before it earns the Shuin seal.

---

### Section 6: 比較表

**背景**: わずかに明るい
**ラベル**: "Comparison"
**見出し**: "How Shuin Compares"

**テーブル:**

| FEATURE | **SHUIN** | Major Brands ($150+) | Amazon Generic |
|---------|-----------|---------------------|----------------|
| Core Steel | VG-10 | VG-10 / VG-MAX | Varies / unclear |
| Damascus Layers | 67 layers | 33–71 layers | 67 layers* |
| Handle | Rosewood octagonal | Pakkawood / resin | G10 / plastic |
| Finish | Hand-hammered | Machine / hand | Machine only |
| Edge Angle | 15° per side | 15–16° | 12–18° |
| Ships From | Japan | Japan / US / EU | China |
| Price | **$75** | $150–$250 | $30–$60 |

SHUINの列は色を強調（朱色のヘッダー、本文は白系）。
他の列はグレーで控えめに。
テーブル下に注釈: *Many Amazon-listed "Damascus" knives use etched patterns rather than genuine forged layers.

---

### Section 7: レビュー

**ラベル**: "Testimonials"
**見出し**: "From Our Kitchen to Yours"
**補足**: "Reviews will appear here as orders are fulfilled"（グレー小文字）

**レイアウト**: 3カラムのカードグリッド（モバイルは縦積み）

各カード:
- 薄いグラス風背景（rgba白3%、ボーダー rgba白6%）
- ★★★★★（朱色）
- レビュー文（イタリック、引用符付き）
- 名前 — 地域

現段階はプレースホルダー3つ。ローンチ後に実レビューに差し替え。

---

### Section 8: ナイフケア

**背景**: わずかに明るい
**ラベル**: "Knife Care"
**見出し**: "Simple to Maintain"

4つの簡潔なケアポイント（朱色の小さい記号 + テキスト、2×2グリッド）:
- Hand wash and dry immediately after use
- Use wooden or soft plastic cutting boards
- Sharpen with a whetstone at 15° angle
- Store in a saya, block, or magnetic strip

---

### Section 8.5: 教育セクション（偽日本包丁問題）

**背景**: メイン背景（暗い）
**ラベル**: "Transparency"
**見出し**: "The Problem with 'Japanese' Knives"

**レイアウト**: 左にテキスト、右にチェックリスト風のスペックカード

**左テキスト:**
```
Thousands of knives sold online claim to be "Japanese."
Most aren't.

They use vague terms like "Japanese-inspired" while shipping
from factories that have never seen Japan. The Damascus patterns
are cosmetic acid-etching. The steel grade is undisclosed.

Shuin takes the opposite approach.
```

**右カード（ダーク背景 + 微ボーダー）:**
タイトル: "Full Transparency" （朱色）
```
✦ Steel: VG-10 by Takefu Special Steel Co., Fukui, Japan
✦ Layers: 67 forged Damascus (not acid-etched)
✦ Finish: Hand-hammered tsuchime
✦ Handle: Natural rosewood, octagonal wa-style
✦ Curated by: Our team in Tokyo, Japan
```
各行の「✦」は朱色、テキストは生成色（#E8E0D6）

このセクションは、Reddit / YouTube のナイフコミュニティで「偽日本包丁」問題を知っている層に強く刺さる。知らない層にも「だからここは信頼できる」というシグナルになる。

---

### Section 9: FAQ

**ラベル**: "FAQ"
**見出し**: "Common Questions"
**レイアウト**: アコーディオン形式（最大幅700px、中央揃え）

**Q&A内容:**

**Q: Where is this knife made?**
A: The blade is forged using VG-10 steel from Takefu Special Steel Co. in Japan, with 67-layer Damascus cladding. The knife is assembled with a hand-finished rosewood octagonal handle. Shuin is based in Tokyo and personally inspects quality before listing.

**Q: How is this only $75?**
A: Simple: we don't operate retail stores, carry large inventories of hundreds of SKUs, or sell through Amazon. By curating a single knife at a time and shipping direct, we pass the savings directly to you — without compromising on materials or finish.

**Q: How long does shipping take?**
A: US orders typically arrive in 7–14 business days. We'll provide tracking as soon as your knife ships. Shipping rates vary by region and will be calculated at checkout.

**Q: What is your return policy?**
A: We offer a 30-day satisfaction guarantee. If you're not completely happy with your knife, contact us for a full refund. We just ask that the knife is returned in its original condition.

**Q: Is this knife suitable for beginners?**
A: Absolutely. The Santoku is the most popular knife type in Japanese home kitchens for a reason — its flat edge and compact size make it intuitive for slicing, dicing, and chopping. No rocking technique required.

**Q: Can left-handed users use this knife?**
A: Yes. The blade has a symmetrical double bevel (sharpened equally on both sides), and the octagonal handle is ambidextrous by design.

---

### Section 10: 最終CTA（購入セクション）

**背景**: 上下が暗→中央に朱色グラデーションが微かに光る
**id**: "buy"（ナビからのアンカーリンク先）

**コンテンツ（中央揃え）:**
```
[朱印ロゴ]

Ready to Elevate Your Kitchen?

The Shuin Santoku — 67-layer VG-10 Damascus,
hand-hammered finish, rosewood octagonal handle.
Delivered from Japan.

┌─────────────────────────────┐
│  Shuin Santoku 180mm        │  ← グレー小文字
│                             │
│       $75                   │  ← 大きいセリフ体
│                             │
│    [ADD TO CART]             │  ← 朱色CTAボタン（パルスグロウ）
│                             │
│  ● Free US Shipping         │
│  ● 30-Day Returns           │  ← 小さいグレー文字（朱色ドット）
│  ● Ships from Japan         │
└─────────────────────────────┘
```

カード部分: ガラス風カード（rgba白3%背景 + 微ボーダー）

---

### Section 11: フッター

**レイアウト**: 左ロゴ、中央コピーライト、右リンク
```
[朱印ロゴ小] SHUIN     © 2026 Shuin. Curated in Tokyo, Japan.     Shipping | Returns | Contact
```

---

## 7. インタラクション & アニメーション

| 要素 | 効果 |
|------|------|
| ヒーロー背景 | スクロールで微ズーム（パララックス） |
| 各セクション | Intersection Observerで下からフェードイン |
| CTAボタン | ゆっくり呼吸するグロウ（box-shadow パルス） |
| CTAボタンホバー | 上に2px浮き上がり + グロウ強調 |
| FAQアコーディオン | クリックでスムーズ展開 + 「+」が45度回転して「×」に |
| ナビバー | スクロール60px以降でブラーガラス背景に変化 |
| 画面全体 | 極薄のノイズ/グレインテクスチャをオーバーレイ（opacity 3-4%） |

---

## 8. レスポンシブ対応

| ブレークポイント | 変更点 |
|----------------|--------|
| ~768px以下 | 2カラム → 1カラムに（ストーリー、スペック等） |
| ~768px以下 | フォントサイズを clamp() で自動縮小 |
| ~768px以下 | 比較テーブルは横スクロール対応 |
| ~480px以下 | ヒーローのパディング調整、ボタンフル幅 |

---

## 9. 画像について

### 画像の調達方法（ハイブリッド）
商品のサンプルはまだ手元にないため、以下の方法で仮画像を埋め込む。
サンプル到着後、撮影した実物写真に差し替える。

### 商品画像（Product）
以下のAliExpress商品ページの画像を使用する。これが実際に販売する商品に最も近い。
- **XITUO VG10 Damascus Santoku / Rosewood Octagonal Handle**
- URL: https://www.aliexpress.com/item/33016803494.html
- このページから商品画像をダウンロードし、Claude Designに添付して使用する
- 背景の白を削除し、ダーク背景に合成するか、ダーク系の画像があればそちらを優先

### 雰囲気・ライフスタイル画像（Mood）
以下のUnsplash画像をそのまま使用可能（フリーライセンス）。URLをそのまま埋め込む。

**ヒーロー背景用（暗い調理シーン）:**
- https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80
  （暗いキッチンでの調理風景）

**ストーリーセクション用（クラフト・伝統のイメージ）:**
- https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&q=80
  （鍛冶・金属加工のイメージ）

**食材カット用（動画の代替）:**
- https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80
  （野菜のスライス・暗いトーン）

### 各セクションの画像配置

| セクション | 画像種別 | 配置 | 処理 |
|-----------|---------|------|------|
| ヒーロー | Unsplash（調理シーン） | 全画面背景 | brightness(0.2) saturate(0.6) + 下方向グラデーション |
| ストーリー | 商品画像 or Unsplash | 右カラム、縦長 | saturate(0.7) brightness(0.8)、赤枠デコレーション付き |
| スペック | 商品画像（横全体） | 中央、横長 | 暗背景にフロート、微かな朱色グラデーション |
| 最終CTA | なし（テキストのみ） | — | 背景は朱色グラデーションで雰囲気を出す |

### 重要な注意点
- **プレースホルダーの枠（ダッシュボーダー + テキスト）は使わない**。必ず何らかの画像を入れる
- 商品画像がない箇所はUnsplashのムード写真で埋める
- 暗い画像をさらに暗くして使う（filter: brightness で調整）
- 将来的にサンプル撮影後に差し替えるので、画像サイズ・比率は統一しておく

---

## 10. 技術メモ

- React（JSX）で制作
- Tailwindのコアユーティリティクラスを使用可
- Google Fonts: Cormorant Garamond + Outfit
- 外部ライブラリ: lucide-react（アイコン必要な場合）
- localStorage は使用不可（Claude.ai 環境制約）
- 全て単一ファイル（.jsx）にまとめる
- CSS変数でカラーテーマを管理

---

## 11. 競合分析サマリー（デザイン判断の根拠）

**調査した競合17社の共通パターン:**

1. ダークUI + プロダクト写真がほぼ業界標準
2. 「日本の伝統 × モダン」のストーリーテリングは全社共通
3. スペックは「Steel / Edge / Hardness / Handle」の4-6項目がタイル表示
4. 過度な割引表示は偽ブランドのシグナル（避ける）
5. 社会的証明（レビュー）+ リスク除去（返品保証）は必須
6. 比較表はDTCブランドの定番（F.N. Sharp, Dream of Japan）

**Shuinの差別化ポイント:**
- 「日本在住のキュレーターが直接選定」→ 海外ブランドにはない信頼性
- 単品特化 → 「100商品の1つ」ではなく「これ1本に全力」
- $75 → $180クラスと同素材でありながら中間マージンをカット
- 産地・素材の透明性（VG-10, Takefu Special Steel, 67層を明記）
