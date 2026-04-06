export type Fragment = {
  slug: string;
  preview: string;
  ja: string[];
  en: string[];
  order: number;
};

export const fragments: Fragment[] = [
  {
    slug: "river-meets",
    preview: "River meets the sea",
    ja: [
      "川は流れ、海に触れる",
      "そのあいだに境界がある",
      "水だけは変わらない",
    ],
    en: [
      "River meets the sea",
      "Between them, a boundary",
    ],
    order: 1,
  },
  {
    slug: "heat-remains",
    preview: "Only the lingering heat remains",
    ja: [
      "熱は冷えていく",
      "夜が続く",
      "余熱だけが別の形に",
    ],
    en: [
      "Only the lingering heat remains",
      "It takes another form",
    ],
    order: 2,
  },
  {
    slug: "trace-fades",
    preview: "The next wave takes the trace",
    ja: [
      "波が押し寄せて引いていく",
      "砂にひととき光がにじむ",
      "その痕跡は次の波にさらわれる",
    ],
    en: [
      "The tide comes and goes",
      "The next wave takes the trace",
    ],
    order: 3,
  },
  {
    slug: "beyond-fence",
    preview: "Beyond the fence, resonance carries through",
    ja: [
      "フェンスの向こう側から",
      "一定のリズムで残響が届く",
      "見えない景色が深まっていく",
    ],
    en: [
      "Beyond the fence, resonance carries through",
      "The unseen deepens",
    ],
    order: 4,
  },
];