# 推特協作專案(前後分離)
Demo: https://jiangshuuu.github.io/twitter_project/
![alt text](https://github.com/JiangShuuu/twitter_project/blob/main/src/assets/DemoGif.gif)
## 瀏覽專案
### 使用者測試帳號:
  
account: user1
  
email: user1@example.com
  
password: 12345678
  
### 管理者測試帳號:
  
account: root
  
email: root@example.com
  
password: 12345678
## 功能介紹
### 前台
- 使用者帳號無法登入後台
- 未擁有帳號的使用者可以註冊新帳號登入(帳號、名稱、email不可重複)
- 使用者需要登入才能進入網站，不可透過修改路由、表單元件繞過登入程序
- 使用者登入後會保存登入憑證，若使用者登出則刪除認證
- 使用者登入後可以創建推文、回覆推文、查看喜歡的推文(排序由新至舊)
- 追蹤其他使用者、對喜歡的貼文按愛心、查看其他使用者資料
- 使用者可以編輯個人資料，個人頭照、背景照片、暱稱、自我介紹，符合字數和不重複的規定才能儲存變更
- 使用者無法編輯其他使用者資料、追蹤自己
- 使用者可以修改帳號設定，變更帳號、名稱、Email
### 後台
- 管理者帳號無法登入前台
- 管理者可以在後台瀏覽全部推文、刪除推文
- 使用者可以看到全部的使用者資料，推文數、愛心數、追蹤數、被追蹤數(排序由多至少)
### 使用技術
- Vue 使用框架提升開發效率，模組化元件、UI與資料分離
- Vuex 網站全域狀態管理
- SCSS 樣式模組化，變數集中管理
### 使用套件
- moment 簡化JS的時間格式處理程序，更快速的達到與時間相關的效果呈現
- sweetalert2 快速創建美觀、易修改的彈窗套件
- vee-validate 完成前端表單驗證機制
- better-scroll 內容過長的部分使用卷軸替代，提高使用者體驗
## 如何啟動專案
### 1. 本機需安裝 node.js 與 npm
### 2. 開啟終端機建立資料夾或到指定存放位置
### 3. 在該資料夾位置，將專案 clone 到本地
```
git clone https://github.com/JiangShuuu/twitter_project.git
```
### 4. 透過終端機進入資料夾位置後，輸入：
```
npm install
```

### 安裝完成後，繼續輸入：
```
npm run serve
```

### 終端機顯示此行訊息代表成功運行，打開瀏覽器進入網址：
```
Listening on http://localhost:8080
```

## MAC M1 啟動錯誤
若在步驟 4 出現一卡車錯誤並且無顯示 node_modules 資料夾，代表安裝失敗，修正如下：
```
npm remove node-sass
```
```
npm install sass
```
接著重新接續 步驟4 即可

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
  
## 相關連結
前端repo: https://github.com/JiangShuuu/twitter_project
  
後端repo: https://github.com/Yung-Che/twitter-api-2020
  
Heroku: https://protected-springs-71103.herokuapp.com/
## 團隊成員
### 前端
- [廖錦蕓](https://github.com/yunimm)
- [John](https://github.com/JiangShuuu)
### 後端
- [Orion](https://github.com/Eklipsorz)
- [戴雍澈](https://github.com/Yung-Che)
