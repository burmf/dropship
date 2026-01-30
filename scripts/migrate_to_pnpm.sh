#!/bin/bash

# 全プロジェクトをpnpmに移行するスクリプト
# 実行: chmod +x migrate_to_pnpm.sh && ./migrate_to_pnpm.sh

echo "🚀 全プロジェクトをpnpmに移行します..."
echo ""

PROJECTS_DIR="$HOME/Documents/dropship/projects"

# 全プロジェクトフォルダを取得
for project in "$PROJECTS_DIR"/*/; do
    project_name=$(basename "$project")
    echo "📦 $project_name を移行中..."
    
    cd "$project"
    
    # 1. package-lock.json を削除
    rm -f package-lock.json
    
    # 2. node_modules を削除
    rm -rf node_modules
    
    # 3. pnpm install を実行
    pnpm install --silent
    
    if [ $? -eq 0 ]; then
        echo "   ✅ $project_name 完了"
    else
        echo "   ❌ $project_name 失敗"
    fi
    
    echo ""
done

echo "🎉 移行完了！"
echo ""
echo "今後のコマンド:"
echo "  npm install  →  pnpm install"
echo "  npm run dev  →  pnpm dev"
echo "  npx vercel   →  pnpm dlx vercel"
