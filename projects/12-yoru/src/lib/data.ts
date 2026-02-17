import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "yoru-020",
        name: "3D クリスタルボール - Eternal Night シリーズ",
        price: 3980,
        description: "クリスタルの内部に幻想的なモチーフを閉じ込めた、美しいクリスタルランプ。ベッドサイドを小さな宇宙や神秘的な空間に変貌させます。自分へのご褒美はもちろん、大切な人への特別な日のギフトとして、圧倒的な支持を得ているYoruHeyaの看板商品です。温かみのある光が、静かな夜のひとときを至福の癒やし時間へと変えてくれます。",
        images: [
            "/products/crystal/4_2adb4c2c-86a6-4f0f-b2dc-2a32e5549923.jpg",
            "/products/crystal/5_8f792fda-535a-4c79-a90e-01553249fc8f.jpg",
            "/products/crystal/6_58435b60-1c40-4007-aeec-c8537e1ca14b.jpg",
            "/products/crystal/64_b3dbcc12-4790-4437-8159-5006225137d9.jpg"
        ],
        category: "ムードライト",
        tags: ["ベストセラー", "幻想クリスタル", "ギフト推奨"],
        variants: [
            { name: "静寂の銀河", imageUrl: "/products/crystal/4_2adb4c2c-86a6-4f0f-b2dc-2a32e5549923.jpg" },
            { name: "孤高の土星", imageUrl: "/products/crystal/5_8f792fda-535a-4c79-a90e-01553249fc8f.jpg" },
            { name: "満月の祈り", imageUrl: "/products/crystal/6_58435b60-1c40-4007-aeec-c8537e1ca14b.jpg" },
            { name: "蒼き地球", imageUrl: "/products/crystal/64_b3dbcc12-4790-4437-8159-5006225137d9.jpg" }
        ]
    },
    {
        id: "yoru-011",
        name: "たき火ディフューザー - Eternal Flame エディション",
        price: 5980,
        description: "水とアロマの微細なミストをLEDで照らし出し、リアルな炎の揺らめきを再現。超音波式アロマディフューザーとして、お好みの香りと共に極上のリラクゼーション空間を演出します。130mlの容量で最大8時間の連続使用が可能。20dBの超静音設計と水切れ自動OFF機能で、就寝時も安心してお使いいただけます。",
        images: [
            "/products/volcano/10_8bd093d8-d171-4b4a-a6a5-97220a577413.jpg",
            "/products/volcano/11_9d7c2875-be60-48d6-a271-a501751708bb.jpg",
            "/products/volcano/13_23d63683-64f1-419a-88d3-5c07f86dfd2c.jpg"
        ],
        category: "アロマ・癒やし",
        tags: ["超音波式", "アロマミスト", "至福のひととき"]
    },
    {
        id: "yoru-004",
        name: "3D回転ムーンランプ - Celestial Float",
        price: 5800,
        description: "最新の3Dプリント技術で月のクレーターまで精巧に再現。木製ベースの上で360度回転し、神秘的な夜空の一部を部屋に招き入れます。3色の調光機能とリモコン操作により、新月から満月までの情緒を自由自在に演出可能。生分解性PLA素材とブナ材を使用した、環境にも優しいヒーリングライトです。",
        images: ["/products/moon/main.png"],
        category: "インテリア照明",
        tags: ["360度回転", "PLA素材", "ギフト推奨"],
        sizes: [
            { name: "12cm", price: 0 },
            { name: "14cm", price: 1000 },
            { name: "18cm", price: 2000 }
        ]
    },
    {
        id: "yoru-005",
        name: "サンセット プロジェクションランプ",
        price: 3200,
        description: "1台でサンセット、レインボー、サン、サンセットレッドの4つの投影モードを楽しめる、多機能プロジェクションランプ。調整可能なヘッドにより、あらゆる角度から空間を彩ることができます。堅牢なアイアンシェルとPC素材のシェードを採用し、耐久性と美しさを両立。ライブ配信や写真撮影の背景としても最適です。",
        images: [
            "/products/sunset/3_1622531341560.jpg",
            "/products/sunset/4_1622531341558.jpg",
            "/products/sunset/5_1622531341538.jpg",
            "/products/sunset/6_1622531341836.jpg",
            "/products/sunset/7_1622531341837.jpg"
        ],
        category: "ムードライト",
        tags: ["4モード搭載", "角度調整自在", "撮影背景"]
    }
];

export const reviews: Review[] = [];
