# XK Component

用于试验和沉淀 shadcn/ui、自研 Tailwind CSS 组件的 Vite 组件库。

## 开发

```bash
npm install
npm run dev
```

## 组件

### Expanding Column Menu

`src/components/expanding-column-menu.tsx`

全屏图片栏目菜单。桌面端和触屏端都只在点击栏目时展开，再次点击已展开栏目会恢复等分布局。栏目、图片、遮罩和文案使用 Motion 统一缓动，点击后立即响应。

```tsx
<ExpandingColumnMenu
  items={items}
  expandedRatio={7}
  onItemSelect={(item) => console.log(item.id)}
/>
```

每个菜单项支持图片位置、竖排标签、详情文案和数据项配置。旧文案会先快速隐藏，新文案稍后与栏目形变重叠进入，避免切换时出现空窗。组件在窄屏下自动切换为纵向手风琴布局，并适配键盘焦点与减少动态效果偏好。
