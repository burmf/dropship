"use client";

import { motion } from "framer-motion";
import { Sparkles, Moon, Zap, Gift, Flame, Wind, Volume2, Magnet, Palette, Sun, Camera } from "lucide-react";

type FeatureItem = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const featuresByProduct: Record<string, FeatureItem[]> = {
    "yoru-020": [
        {
            icon: <Sparkles className="h-6 w-6 text-amber-400" />,
            title: "立体的な内部デザイン",
            description: "透明度の高いクリスタルの内部に、立体的なモチーフを再現。銀河・土星・月・地球など、多彩なデザインからお選びいただけます。"
        },
        {
            icon: <Moon className="h-6 w-6 text-amber-400" />,
            title: "温かみのある間接照明",
            description: "木製ベースから優しい光が広がり、お部屋を温かく包みます。寝室やリビングのムード作りに最適です。"
        },
        {
            icon: <Zap className="h-6 w-6 text-amber-400" />,
            title: "安全設計（低電圧）",
            description: "36V以下の低電圧設計で、お子様のいるご家庭でも安心。プラグイン式で簡単にお使いいただけます。"
        },
        {
            icon: <Gift className="h-6 w-6 text-amber-400" />,
            title: "ギフトにも最適",
            description: "誕生日・記念日・引越し祈いなど、あらゆるシーンの贈り物として喜ばれています。"
        }
    ],
    "yoru-011": [
        {
            icon: <Wind className="h-6 w-6 text-amber-400" />,
            title: "超音波式アロマミスト",
            description: "超音波振動で水を微細な霧に変え、香りと共に炎のような揺らめきを演出。130mlの容量でしっかりとお部屋を癒やします。"
        },
        {
            icon: <Palette className="h-6 w-6 text-amber-400" />,
            title: "7色のライト演出",
            description: "たき火のような暖色から、気分に合わせた7色のカラーチェンジが可能。固定カラーでの点灯も楽しめます。"
        },
        {
            icon: <Volume2 className="h-6 w-6 text-amber-400" />,
            title: "20dBの超静音設計",
            description: "動作音が極めて静かなため、就寝前のリラックスタイムや、集中したいデスクワーク中の使用にも最適です。"
        },
        {
            icon: <Zap className="h-6 w-6 text-amber-400" />,
            title: "安全な自動停止",
            description: "水がなくなると自動的に電源がオフになるスマートチップを搭載。空焚きの心配がなく、安心してお使いいただけます。"
        }
    ],
    "yoru-004": [
        {
            icon: <Sparkles className="h-6 w-6 text-amber-400" />,
            title: "精巧な3Dプリント",
            description: "最新技術により月のクレーターまでリアルに再現。生分解性PLA素材を使用し、肌触りも滑らかで安全です。"
        },
        {
            icon: <Wind className="h-6 w-6 text-amber-400" />,
            title: "360度回転機能",
            description: "木製ベースの上でゆったりと自転。どの角度から見ても美しく、部屋に神秘的な天体ショーを演出します。"
        },
        {
            icon: <Palette className="h-6 w-6 text-amber-400" />,
            title: "3色調光 ＆ リモコン操作",
            description: "ウォームホワイト、ホワイト、温かみのあるイエローの3色に対応。リモコンで明るさや色を自由自在に操れます。"
        },
        {
            icon: <Gift className="h-6 w-6 text-amber-400" />,
            title: "ナチュラルな木製ベース",
            description: "高品質なブナ材（オーク）の台座が、モダンな月と調和。インテリアの質感をワンランク高めます。"
        }
    ],
    "yoru-005": [
        {
            icon: <Sun className="h-6 w-6 text-amber-400" />,
            title: "4つの投影モード",
            description: "サンセット、レインボー、サン、サンセットレッドの4モードを搭載。これ1台であらゆる雰囲気を演出できます。"
        },
        {
            icon: <Camera className="h-6 w-6 text-amber-400" />,
            title: "撮影背景に最適",
            description: "高解像プロジェクションにより、壁一面をドラマチックな背景に。ライブ配信やポートレート撮影の質を高めます。"
        },
        {
            icon: <Zap className="h-6 w-6 text-amber-400" />,
            title: "堅牢なアイアンシェル",
            description: "耐久性に優れたアイアン素材の筐体を採用。調整可能なヘッドにより、狙った場所へ正確に照射可能です。"
        },
        {
            icon: <Palette className="h-6 w-6 text-amber-400" />,
            title: "USB給電 ＆ 5W出力",
            description: "1.5mのUSBケーブルが付属し、PCやモバイルバッテリーから給電可能。5Wのパワフルな光を届けます。"
        }
    ]
};

// デフォルトの特徴（未定義の商品用）
const defaultFeatures: FeatureItem[] = [
    {
        icon: <Sparkles className="h-6 w-6 text-amber-400" />,
        title: "こだわりの品質",
        description: "YoruHeyaが厳選した、高品質な素材と先進的な技術を採用。長くご愛用いただける逸品です。"
    },
    {
        icon: <Moon className="h-6 w-6 text-amber-400" />,
        title: "癒やしの空間演出",
        description: "日常に特別な時間を。お部屋を幻想的な空間に変える、YoruHeyaならではの体験をお届けします。"
    },
    {
        icon: <Zap className="h-6 w-6 text-amber-400" />,
        title: "安心・安全設計",
        description: "高品質なパーツを使用し、安全性にも配慮。お子様やペットのいるご家庭でも安心です。"
    },
    {
        icon: <Gift className="h-6 w-6 text-amber-400" />,
        title: "ギフトにも最適",
        description: "大切な人への贈り物として。特別な日のサプライズに、きっと喜ばれます。"
    }
];

interface ProductFeaturesProps {
    productId: string;
}

export default function ProductFeatures({ productId }: ProductFeaturesProps) {
    const features = featuresByProduct[productId] || defaultFeatures;

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">選ばれる理由</h2>
                <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all hover:bg-white/[0.07] group"
                    >
                        <div className="mb-4 p-3 rounded-xl bg-amber-500/10 w-fit group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
