# playwright.dev

這個網站是使用 [Docusaurus](https://docusaurus.io/) 建立的。內容來自 microsoft/playwright 儲存庫。

## 開發

### 設定專案

```sh
npm install
```

### 生成文件

```sh
SRC_DIR=../playwright npm run roll
```

### 移除舊版本

```sh
node src/versions.js --delete 1.16
```

### 執行開發伺服器

```sh
npm run start-nodejs
```

> [!IMPORTANT]  
> 文件預設會以「目前版本」模式啟動。若要查看最新版本的文件（以及你的修改），請訪問 `/next` 或連按 shift 5 次。

其他語言 (java, python, .NET) 可參考 `package.json`。

### 執行正式環境建置與服務

```sh
npm run build
npm run serve
```

### 在 Windows 上執行

若要在 PowerShell 內生成文件，請正確設定環境變數，例如：

```powershell
$env:SRC_DIR="C:\Users\user\src\playwright"; npm run roll
```

### 執行端對端測試

#### 在本機執行

在一個終端機執行：

```sh
npm run start-nodejs
```

再於另一個終端機執行，會自動使用本機 docusaurus 伺服器：

```sh
npx playwright test nodejs
```

#### 在不同環境執行

可以設定 `BASE_URL=https://playwright.dev` 環境變數，否則預設使用 `http://localhost:3000`。

### 發佈版本後的文件更新

#### Cherry-picking

1. 前往 [Cherry-picking GitHub Actions workflow](https://github.com/microsoft/playwright/actions/workflows/cherry_pick_into_release_branch.yml)
1. 使用版本號 (例如 `1.25`) 和以逗號分隔的提交 SHA (從 main 分支取得) 執行
1. 等待 PR [被建立](https://github.com/microsoft/playwright/pulls)，檢閱並合併

#### 穩定文件生成

1. 前往 [Release GitHub Actions workflow](https://github.com/microsoft/playwright.dev/actions/workflows/roll-stable.yml)
1. 執行並等待 PR [被建立](https://github.com/microsoft/playwright.dev/pulls)。PR 會從 playwright 儲存庫的 release 分支複製變更。
2. 檢閱並合併 PR。
