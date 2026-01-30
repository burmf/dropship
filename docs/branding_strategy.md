# 10種のドロップシッピングサイト構築計画 - ブランディング戦略

本プロジェクトでは、以下の10カテゴリーの製品について、それぞれ独自のブランドIdentityを持つECサイトを構築します。
各サイトは「実用化レベルのUI/UX」を目指し、オーストラリア市場（AUD）をターゲットとします。

## 共通仕様
- **言語**: 英語 (English)
- **通貨**: オーストラリアドル (AUD)
- **機能**: 商品一覧、詳細、カート、会社概要（About Us）、利用規約（Terms）、FAQ
- **デザイン**: プレミアムテンプレートをベースに、各ブランドのテーマカラーとフォントで差別化

## ブランド一覧

| No. | カテゴリー | 主要製品例 | ブランド名案 (English) | コンセプト・タグライン | ターゲット層 | デザインテーマ (Colors) |
|---|---|---|---|---|---|---|
| 1 | スマホケース | iPhone/Androidケース | **CaseCanvas** | "Art in your hand." | 若者、トレンド重視層 | ポップ＆ミニマル (Pastel Pink, White, Black) |
| 2 | イヤホン | 無線イヤホン | **SoundSphere** | "Immerse in pure sound." | 通勤者、音楽愛好家 | テック＆クール (Dark Grey, Neon Blue) |
| 3 | スマートウォッチ | エントリーモデル | **WristTech** | "Smart living on your wrist." | 健康志向、ガジェット好き | モダン＆スリーク (Black, Silver, Lime Green) |
| 4 | ペット用品 | 給水ボトル | **PurrfectLife** | "Joy for your furry friends." | ペットオーナー | ウォーム＆フレンドリー (Orange, Beige, Brown) |
| 5 | 美容ガジェット | 美顔ローラー | **LumiSkyn** | "Reveal your inner glow." | 美容関心層、女性 | クリーン＆エレガント (White, Rose Gold, Soft Grey) |
| 6 | ホーム＆デコ | 夕日ランプ | **AmbientHome** | "Set the mood." | インテリア好き、Z世代 | アンビエント＆ウォーム (Sunset Orange, Deep Purple) |
| 7 | ベビー用品 | 折りたたみバス | **TinyTot** | "Big love for tiny ones." | 新米パパ・ママ | ソフト＆セーフ (Baby Blue, Pale Yellow, White) |
| 8 | サングラス | 調光サングラス | **ShadeShift** | "Style that adapts." | アウトドア派、ファッション層 | レトロ＆ヴィンテージ (Tortoise Shell Brown, Gold) |
| 9 | フィットネス | ゴムバンド | **FlexGear** | "Empower your movement." | 自宅トレーニー | エネルギッシュ＆ストロング (Red, Black, White) |
| 10 | カメラ用品 | リングライト三脚 | **ContentStudio** | "Create like a pro." | TikToker, YouTuber | プロフェッショナル＆ダーク (Matte Black, White Text) |

## 今後のステップ
1. **テンプレートの汎用化**: `premium-template` に設定ファイル (`site.config.ts`) を導入し、ブランド名や色を切り替え可能にする。
2. **必須ページの追加**: About, Terms, FAQ, Privacy Policyページをテンプレートに追加。
3. **サイトの複製と設定**: スクリプトを用いて10個のプロジェクトフォルダを作成し、設定ファイルを適用。
4. **アセット生成**: ロゴやヒーロー画像を生成し、各サイトに配置。
