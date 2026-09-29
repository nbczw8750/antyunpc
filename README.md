# 欧竞云电竞 · 单页官网

欧竞云电竞（云端电竞主机）的单页官网首页。Astro 纯静态输出 + Tailwind CSS v4，零位图、零 UI 框架运行时。

页面自上而下八个模块：顶部导航、首屏 Banner、核心特性、产品套餐、使用场景、计费说明、四步上手、页脚。

## 常用命令

```bash
npm install
npm run dev       # 本地开发，默认 http://localhost:4321
npm run build     # 构建静态产物到 dist/
npm run preview   # 预览构建结果
```

## 目录结构

```
src/
  pages/index.astro        # 页面入口，按顺序装配八个模块
  components/
    sections/              # 八个模块各一个组件
    ui/                    # 共享基元（区块标题、状态角标、背景视觉层、显卡图形）
  data/                    # 内容数据与站点常量
  styles/global.css        # 设计令牌（@theme）与组件类
```

设计令牌集中在 `src/styles/global.css` 的 `@theme` 中声明，模板只引用语义名，不硬编码色值。

## 部署到 GitHub Pages（项目页）

站点部署在 GitHub Pages **项目页**，访问地址形如 `https://<用户名>.github.io/<仓库名>/`，带子路径。

1. **替换仓库名与用户名** — 打开 `astro.config.mjs`，把顶部的两个占位常量改成真实值：

   ```js
   const GITHUB_USERNAME = '你的 GitHub 用户名';
   const GITHUB_REPO = '你的仓库名';
   ```

   `site` 与 `base` 由这两个常量派生。`base` 一旦与真实仓库名不一致，部署后全站样式与页内锚点都会 404。

2. **重新构建** — `npm run build`，确认本地构建通过。

3. **启用 Pages** — 仓库 Settings → Pages，Source 选择 **GitHub Actions**。

4. **推送** — 把代码推送到 `main` 分支。仓库已内置 `.github/workflows/deploy.yml`，会自动执行 `npm ci` → `npm run build` → 发布 `dist/`，无需手动提交构建产物。

5. **访问验证** — 打开 `https://<用户名>.github.io/<仓库名>/`，确认样式、光效与锚点均正常，浏览器控制台无资源 404。

> 若偏好手动部署，可改把 `dist/` 推送到发布分支（如 `gh-pages`），并在 Pages 的 Source 中选择该分支与目录。

> 页内锚点使用纯 `#id` 形式，天然不受 `base` 影响；不要手写以 `/` 开头的绝对资源路径。

## 上线前必须替换的占位值

以下内容当前为占位或示意文本，按文件集中存放，全项目其它位置不重复出现：

| 字段 | 位置 | 说明 |
| --- | --- | --- |
| `clientDownloadUrl` | `src/data/site.ts` | Windows 客户端安装包的真实下载地址 |
| `icp` | `src/data/site.ts` | 真实备案号文案 |
| `support.qq` / `support.group` | `src/data/site.ts` | 真实客服 QQ 与官方 QQ 群 |
| `company` | `src/data/site.ts` | 公司主体名称（如需要展示） |
| `price` | `src/data/plans.ts` | 畅玩与电竞两档的示意价（当前为 `¥4 / 小时`、`¥6 / 小时`） |

另有 `astro.config.mjs` 中的 `GITHUB_USERNAME` 与 `GITHUB_REPO`，同样属于上线前必须替换的占位值。

> `plans.ts` 里的两档价格是**示意值，不是官方定价**。上线前必须重新确认或替换，否则它会从「示意」变成事实上的真实价。每个价格数字旁必须保留「示意」标注（`priceNote` 字段），不得单独呈现数字。

## 内容口径约束

- **价格仅作示意**：全页不出现购买入口或充值入口。已开放档位展示示意价，每个价格数字必须紧邻「示意」标注，说明句统一为「以上为示意价，实际价格以客户端内实时公示为准」；未上线档位的价格位置显示「即将公布」。
- **未上线项必须标注**：macOS / Android / H5 三个平台，以及竞技区云电脑一个档位，一律降饱和描边 + 文字标注「敬请期待」或「即将上线」，档位的配置项与价格位置显示「即将公布」，且不提供可点击链接。
- **零位图**：背景光效、透视网格、显卡配图、核心特性轮播带载体全部由 CSS 生成。
- **零脚本轮播**：核心特性轮播带由 CSS scroll-snap 驱动，不写 JavaScript，也不提供左右切换按钮。
- **文案原创性**：模块标题为改写文案，与参考站点无逐字相同的标题句子。

## 说明

`AGENTS.md` 记录本仓库的 agent 工作约定与硬性约束；`openspec/changes/` 下为本次搭建的规划产物（proposal、design、spec、tasks）。