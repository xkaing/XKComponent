# XK Component

用于试验和沉淀 shadcn/ui、自研 Tailwind CSS 组件的 Vite 组件库。

## 开发

```bash
npm install
npm run dev
```

## 组件

### Apple Intelligence

`src/components/apple-intelligence.tsx`

纯 CSS 流光边界，由四个模糊椭圆色块叠加构成，支持顶部和底部镜像两种方向：

```tsx
<AppleIntelligence position="top" />
<AppleIntelligence position="bottom" />
```

父元素需使用相对定位并留出可见区域。组件会绝对定位到父元素的顶部或底部。
