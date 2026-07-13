import nightLordsImage from '../1.jpg'
import ravenGuardImage from '../2.jpg'
import imperialFistsImage from '../3.jpg'
import ironWarriorsImage from '../4.jpg'
import salamandersImage from '../5.jpg'
import {
  ExpandingColumnMenu,
  type ExpandingColumnMenuItem,
} from './components/expanding-column-menu'

const menuItems: ExpandingColumnMenuItem[] = [
  {
    id: 'night-lords',
    label: '夜之领主',
    title: '黑夜之主',
    eyebrow: '第八军团 · 叛军',
    description:
      '诞生于诺斯特拉莫被毒云笼罩的天空之下，夜之领主在第一声枪响之前，便已将恐惧本身化作武器。',
    image: nightLordsImage,
    imagePosition: '66% center',
    facts: [
      { label: '原体', value: '康拉德·科兹' },
      { label: '战术', value: '恐惧突袭' },
    ],
  },
  {
    id: 'raven-guard',
    label: '暗鸦守卫',
    title: '自暗影而来',
    eyebrow: '第十九军团 · 忠诚派',
    description:
      '暗鸦守卫从隐蔽处发动突袭，在瓦解更强大的敌军后，再度消失于黑暗之中。',
    image: ravenGuardImage,
    imagePosition: '50% 42%',
    facts: [
      { label: '原体', value: '科沃斯·科拉克斯' },
      { label: '战术', value: '暗影战' },
    ],
  },
  {
    id: 'imperial-fists',
    label: '帝国之拳',
    title: '最后的高墙',
    eyebrow: '第七军团 · 忠诚派',
    description:
      '帝国之拳是永不退让的守卫者与攻城大师。当其他防线尽数崩溃，他们依然坚守原地。',
    image: imperialFistsImage,
    imagePosition: '50% 38%',
    facts: [
      { label: '原体', value: '罗格·多恩' },
      { label: '战术', value: '围城防御' },
    ],
  },
  {
    id: 'iron-warriors',
    label: '钢铁勇士',
    title: '钢铁在内',
    eyebrow: '第四军团 · 叛军',
    description:
      '钢铁勇士冷酷、缜密，并为消耗战而生。在他们眼中，任何堡垒都只是时间与火力的问题。',
    image: ironWarriorsImage,
    imagePosition: '52% 44%',
    facts: [
      { label: '原体', value: '佩图拉博' },
      { label: '战术', value: '围城战' },
    ],
  },
  {
    id: 'salamanders',
    label: '火蜥蜴',
    title: '烈焰不熄',
    eyebrow: '第十八军团 · 忠诚派',
    description:
      '火蜥蜴军团以坚韧、荣誉与对凡人的守护闻名。他们踏过烈焰，以近距离的毁灭性火力迎击帝皇之敌。',
    image: salamandersImage,
    imagePosition: '50% 36%',
    facts: [
      { label: '原体', value: '伏尔甘' },
      { label: '战术', value: '烈焰突击' },
    ],
  },
]

export function App() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-[#101417]">
      <ExpandingColumnMenu
        className="h-full w-full"
        items={menuItems}
      />
    </main>
  )
}
