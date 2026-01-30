# ドロップシッピングサイト構築タスク

## フェーズ 1: 基盤構築と展開 [x]
- [x] ブランディング戦略の策定 (`docs/branding_strategy.md`)
- [x] プレミアムテンプレートの共通機能強化
    - [x] 設定ファイル (`site-config.ts`) の導入
    - [x] 必須ページ (About, Terms, Privacy, FAQ) の追加
    - [x] コンポーネント (Hero, Footer) の設定ファイル対応
- [x] 10サイト分のプロジェクト展開 (`scripts/deploy_sites.sh`)
- [x] 各サイトの初期設定 (`site-config.ts`) 適用
    - [x] 01-casecanvas
    - [x] 02-soundsphere
    - [x] 03-wristtech
    - [x] 04-purrfectlife
    - [x] 05-lumiskyn
    - [x] 06-ambienthome
    - [x] 07-tinytot
    - [x] 08-shadeshift
    - [x] 09-flexgear
    - [x] 10-contentstudio

## フェーズ 2: コンテンツとアセットの個別化 [/]
- [x] Hero画像の生成と配置
    - [x] 01-casecanvas (デモ生成済み)
    - [x] 02-soundsphere
    - [x] 03-wristtech
    - [x] 04-purrfectlife
    - [x] 05-lumiskyn
    - [x] 06-ambienthome
    - [x] 07-tinytot
    - [x] 08-shadeshift
    - [x] 09-flexgear
    - [x] 10-contentstudio
- [/] 製品データの差し替え (`src/lib/data.ts`)
    - [/] 各カテゴリーに合わせたダミーデータの作成

## フェーズ 3: 仕上げと動作確認
- [ ] 各サイトのビルド確認
- [ ] 動作テスト
