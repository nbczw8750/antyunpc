import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 真实仓库值：origin = github.com/nbczw8750/antyunpc。
// base 必须保持 '/<仓库名>' 的形式，否则部署到 GitHub Pages 项目页后，
// 静态资源与页内锚点都会 404。
const GITHUB_USERNAME = 'nbczw8750';
const GITHUB_REPO = 'antyunpc';

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${GITHUB_REPO}`,
  vite: {
    plugins: [tailwindcss()],
  },
});