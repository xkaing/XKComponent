# XK Component

用于试验和沉淀 shadcn/ui、自研 Tailwind CSS 组件的 Vite 组件库。

## 开发

```bash
npm install
npm run dev
```

## 组件

### Border Stream Light

`src/components/border-stream-light.tsx`

顶部边缘流光组件，由四个模糊椭圆色块、透明度和关键帧位移叠加构成。

动画参数参考 `/Users/xkai/Desktop/border-stream-light` 中的原始 HTML/CSS。原实现的 `vw` 比例使用容器查询宽度单位映射，因此组件放入任意宽度的容器后仍能保持原始构图。

```tsx
<BorderStreamLight />
```

父元素需使用相对定位并处理所需的边界裁剪。组件会绝对定位到父元素顶部。
