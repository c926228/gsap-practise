# gsap-practise

此專案用來練習vue3, gsap, unocss

使用以下工具：
- [gsap](https://greensock.com/get-started/)
- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/) ( IonIcons )
- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎


### 樣式＆動畫效果參考以下網站
- HotSpringWebsite - [るるる温泉](https://ru-ru-ru.com/) : illimited slid

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
## 規範
- 參考[schaoss/vue3-new-project-tempalte](https://github.com/schaoss/vue3-new-project-tempalte)
### General
- 專案、class、圖片、圖片路徑 名稱使用`kebab-case`
- 路徑、JS變數 名稱使用`lowerCamelCase`
- vue檔 名稱使用 `UpperCamelCase` 
  - index.vue = 上層資料夾名稱.vue，單一頁面的路徑時使用UpperCamelCase
- 常數 名稱使用`UPPER_SNAKE_CASE`
- 單一頁面使用單獨路徑，相關components放在此路徑下

### Commit Message 
#### 格式  
**type(scope): subject**  
`type`（必要）：commit 的類別  
如：feat, fix, docs, style, refactor, test, chore  
`scope`（可選）：commit 影響的範圍  
如：資料庫、控制層、模板層等，視專案不同改變  
`subject`（必要）：commit 的簡短描述，不超過 50 個字元，結尾不加句號，盡量讓 Commit 單一化，一次只更動一個主題   

> 範例
feat(優惠券): 加入搜尋按鈕，調整畫面

#### type 類別規範
`Feat`: 新增/修改功能 (feature)。  
`Fix`: 修補 bug (bug fix)。  
`Refactor`: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。  
`Docs`: 文件 (documentation)。  
`Hotfix`: 修正正式環境bug  
`Perf`: 改善效能 (A code change that improves performance)。  
`Test`: 增加測試 (when adding missing tests)。  
`CI`: 新增/更新 自動部署 腳本（Continuous Integration）  
`Chore`: maintain  不影響程式碼運行，建構程序或輔助工具的變動，例如修改 config、Grunt Task 任務管理工具  
`Revert`: 撤銷回复先前的 commit 例如：revert: type(scope): subject (回复版本：xxxx)。  
`Style`: 格式 (不影響程式碼運行的變動 white-space, formatting  
`Missing` semi colons, etc)。   
`Chore`: 建構程序或輔助工具的變動 (maintain)。 