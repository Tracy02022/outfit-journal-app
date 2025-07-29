# 👗 Outfit Journal App

A personal style diary and shoppable fashion journal — designed to help you express your mood, outfit, and lifestyle in an aesthetic and thoughtful way.

---

## 🌟 Features

- 🧥 **Look of the Day**: Highlight your daily mood and style
- 📔 **Outfit Journal**: Chronological entries with photos, mood tags, and outfit notes
- 🛍️ **Buy the Look**: Add item details (image, price, tags), and enable shopping
- 👩‍💻 **Admin Upload Mode**: You can upload outfits and manage items via a dedicated upload panel
- 📱 **Mobile-first UI**: Soft magazine-like interface with elegant typography and tone

---

## 🧭 Project Structure
<details>
<summary>📂 Click to view folder structure</summary>

<br/>

<pre>

outfit-journal-app/
├── app/ # App Router 页面
│ ├── home/ # 首页（主 Look + Journal）
│ ├── journal/ # Outfit Journal 列表
│ ├── cart/ # 购物车
│ ├── me/ # 个人中心
│ ├── upload/ # 上传穿搭（admin）
│ └── layout.tsx # 全局布局（含 TabBar）
│
├── components/ # UI 组件
│ ├── OutfitCard.tsx
│ ├── NavBar.tsx
│ ├── ItemModal.tsx
│ └── UserAvatar.tsx
│
├── lib/ # 工具 & Firebase 初始化
│ ├── firebase.ts
│ └── utils.ts
│
├── public/ # 静态资源（图片等）
│ ├── avatar.jpg
│ ├── look-of-day.jpg
│ └── outfit*.jpg
│
├── styles/ # 全局样式（Tailwind）
│ └── globals.css
│
├── README.md
├── .gitignore
├── package.json
├── tsconfig.json
└── tailwind.config.js

</pre>

</details>

