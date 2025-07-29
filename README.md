# outfit-journal-app

outfit-journal-app/
├── app/                 # App Router 页面目录
│   ├── home/            # 首页（展示主Look + Journal）
│   ├── journal/         # Outfit Journal列表页
│   ├── cart/            # 购物车页
│   ├── me/              # 个人中心页
│   ├── upload/          # 上传页面（仅 admin 可见）
│   └── layout.tsx       # 全局布局（可加底部 TabBar）
│
├── components/          # 可复用 UI组件
│   ├── OutfitCard.tsx
│   ├── NavBar.tsx
│   ├── ItemModal.tsx
│   └── UserAvatar.tsx
│
├── lib/                 # 工具 & Firebase 初始化
│   ├── firebase.ts
│   └── utils.ts
│
├── public/              # 图片 & 静态资源
│   ├── avatar.jpg
│   ├── look-of-day.jpg
│   ├── outfit1.jpg
│   └── outfit2.jpg
│
├── styles/              # 自定义全局样式
│   └── globals.css
│
├── .gitignore
├── README.md
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── next.config.js
