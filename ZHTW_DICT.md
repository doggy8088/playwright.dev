# Playwright 文件 zh-TW 術語字典與風格指南

本字典適用於本倉庫所有 .mdx 文件翻譯，請在翻譯前先搜尋是否已有對應詞彙，若需新增詞條，請依照現有格式追加並保持字母排序。

## 翻譯原則
- 保留專有名詞：Playwright、JavaScript、TypeScript、Node.js、CI、CD、Docker、API、CLI 等不翻譯。
- 介面/類別/方法/選項名稱一律保留原文（以反引號標示，例如 `page.locator()`）。
- 句首術語與段落標題首字母大小寫依原文；一般敘述採台灣常用語氣，避免過度直譯。
- 連結文字沿用原文，必要時於括號補充中文註解。
- 英文變數、程式碼與參數值不翻譯。
- 標點使用全形中文標點，程式碼區塊與行內程式碼附近保留半形。

## 常用對照
- assertion → 斷言
- async → 非同步
- await → 等待（await 保留於程式碼）
- browser → 瀏覽器
- browser context → 瀏覽器情境（BrowserContext 保留原文）
- CI → CI（不翻譯）
- CLI → CLI（不翻譯）
- codegen → 錄製測試（codegen 工具保留原文作為功能名）
- console message → 主控台訊息
- coverage → 覆蓋率
- debug → 偵錯
- device → 裝置
- emulation → 模擬
- evaluation → 求值／執行評估（視語境）
- event → 事件
- exception/error → 例外／錯誤（Exception/ Error 類別名不翻）
- fixture → 佈置（測試佈置）
- flaky → 不穩定（flaky 測試）
- frame → 框架（Frame 類別名不翻）
- handle → 控制代碼（句內名詞）；元素控制代碼（ElementHandle）
- headless → 無頭（模式）
- hook → 掛勾（測試掛勾）
- inspector → 檢查器
- locator → 定位器
- mock → 模擬（名詞/動詞視語境）
- network → 網路
- parallel → 平行
- permission → 權限
- playwright test → Playwright Test（不翻譯產品名）
- plugin → 外掛
- poll → 輪詢
- retries → 重試次數
- route → 路由
- screenshot → 螢幕截圖
- selector → 選擇器
- snapshot → 快照
- tracing/trace viewer → 追蹤/追蹤檢視器
- timeout → 逾時
- viewport → 檢視區
- WebSocket → WebSocket（不翻）

## 語體建議
- 多用「您」與禮貌語氣，技術說明保持中性精準。
- 句子盡量短，先重點後補充。
- 英文行內碼以反引號包裹；區塊碼使用原樣格式。

## 範例
- 原文：Use locators to find elements.
- 建議：使用定位器尋找元素。

---

## 新增術語（aria-snapshots 相關）
- accessibility tree → 無障礙樹
- aria snapshot → aria 快照
- accessible element → 無障礙元素
- accessible name → 無障礙名稱
- role → 角色（ARIA/HTML 角色保留原文）
- attribute → 屬性
- hierarchical structure → 階層結構
- tree-like syntax → 樹狀語法
- node → 節點
- indentation → 縮排
- YAML representation → YAML 表示法
- partial matching → 部分比對
- strict matching → 嚴格比對
- regular expression → 正規表示式
- Chrome DevTools → Chrome DevTools（產品名不翻）

## Service Worker 相關術語
- service worker → Service Worker（專有名詞不翻譯）
- fetch event → fetch 事件（`FetchEvent` 類別名保留原文）
- proxy → 代理
- cache/caching → 快取
- offline → 離線
- registration → 註冊
- activation → 啟動
- interception → 攔截
- handler → 處理器
- listener → 監聽器
- transparent → 透明
- optimization → 最佳化
- main script → 主腳本
- external network → 外部網路
- sub-frame → 子框架

如需新增詞條，請於本檔案最後追加，並附上簡短語境說明。

## 新增術語（test-projects 相關）
- project → 專案（測試專案）
- configuration → 組態設定
- dependencies → 相依性
- teardown → 拆除（測試拆除）
- setup → 設定（測試設定）
- filter → 篩選器
- logical group → 邏輯群組
- environment → 環境
- staging → 測試環境
- production → 正式環境
- subset → 子集合
- worker → 工作程序
- sequence → 序列
- registry → 註冊表
- branded browsers → 品牌瀏覽器
- emulated → 模擬的
- tablet → 平板電腦
- mobile devices → 行動裝置
- desktop → 桌面
- viewport → 檢視區
- profile → 設定檔

## 新增術語（UI Mode 相關）
- UI Mode → UI 模式
- timeline → 時間軸
- sidebar → 側邊欄
- attachment → 附件
- metadata → 元資料 (Metadata 類別名保留原文)
- watch mode → 觀看模式
- time travel → 時光旅行
- pop out → 彈出
- pick locator → 選擇定位器
- DevTools → DevTools（產品名不翻譯）
- playground → 操作區
- tab → 分頁標籤
- slider → 滑桿
- icon → 圖示
- endpoint → 端點
- interface → 介面
- container → 容器
- terminal → 終端機
- hover → 懸停
- expand → 展開
- block → 區塊
- triangle → 三角形
- strict mode → 嚴格模式
