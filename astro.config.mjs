import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 上线前必须替换：把下面的占位值换成真实的 GitHub 用户名与仓库名。
// base 必须保持 '/<仓库名>' 的形式，否则部署到 GitHub Pages 项目页后，
// 静态资源与页内锚点都会 404。
const GITHUB_USERNAME = 'USERNAME';
const GITHUB_REPO = 'REPO';

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${GITHUB_REPO}`,
  vite: {
    plugins: [tailwindcss()],
  },
});