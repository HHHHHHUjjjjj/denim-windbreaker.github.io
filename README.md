# 页面结构

这是一个使用 GitHub Pages 兼容的 `github-pages` Gem 构建的 Jekyll 站点。`index.html` 通过 `_layouts/default.html` 和 Liquid include 在构建阶段组合页面，支持本地 Jekyll 预览和 GitHub Pages 项目站点部署。

- `_layouts/default.html`：统一管理页面结构、样式和脚本资源。
- `_includes/page/`：导航、生成台、诊断台、定稿弹窗、浮层和内嵌图片数据等页面片段。
- `_config.yml`：站点地址、项目站点仓库路径 `baseurl` 与构建排除项。
- `assets/css/site.css`：页面样式。
- `assets/js/generator.js`、`assets/js/diagnosis.js`：按顺序加载的页面脚本。
- `Gemfile`、`Gemfile.lock`：锁定 GitHub Pages 兼容的 Jekyll 依赖。

安装依赖后，在仓库根目录运行 `bundle exec jekyll serve --baseurl "" --host 0.0.0.0 --port 8000`，再访问 Codespaces 转发的 8000 端口根路径。本地预览使用根路径，而 GitHub Pages 项目站点部署在 `https://hhhhhhujjjjj.github.io/denim-windbreaker.github.io/`，因此线上资源路径需包含 `/denim-windbreaker.github.io` 前缀。

提示词优先保留商品设计与用户填写的商品描述；若参考照片含模特，会先按所选品类提取商品并移除原模特。只有所选输出类型或任务需要模特时，才生成新模特。启用角标或在补充要求中明确要求文字时，会要求生成可见的图形化角标；未要求时不添加角标或文字。
