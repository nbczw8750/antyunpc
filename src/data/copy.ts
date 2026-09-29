/**
 * 各模块标题与文案定稿。
 *
 * 六句模块标题为改写版本，参考站（panghebox.com）原句不进入实现。
 * 定稿对照表见 openspec/changes/add-oujinyun-landing-page/design.md
 * 的「模块标题改写定稿」一节。
 */

export const COPY = {
  hero: {
    kicker: 'OUJING CLOUD GAMING · RTX CLOUD PC',
    /** 改写自参考站「为毫秒级竞技而生」 */
    title: '每一毫秒，都算数',
    subtitle:
      'RTX 云端显卡 · 低延迟就近节点 · 32GB 大内存。把显卡留在云端，无需高价主机，下载客户端，大作即刻开玩。',
    primaryCta: '立即下载客户端',
    secondaryCta: '了解云电脑',
    badges: ['RTX 云端算力', '低延迟节点', '即开即玩', '32GB 内存'],
  },

  features: {
    kicker: '01 / CLOUD POWER',
    /** 改写自参考站「全国算力矩阵，就近秒连」 */
    title: '算力就在身边，开机即连',
    subtitle: '把性能交给云端，本地设备只负责画面与操作。',
  },

  plans: {
    kicker: '02 / CHOOSE YOUR RIG',
    /** 改写自参考站「算力自由，从入门竞技到巅峰AI，随你定义」 */
    title: '从竞技开黑到 AI 创作，算力按需取用',
    subtitle: '无需一次性购置整套高配主机，按游戏与创作需求选择你的云端装备。',
    footnote:
      '页面价格均为示意价，不构成报价；实时云端资源规划、型号与可用节点以客户端实时展示为准。',
  },

  scenarios: {
    kicker: '03 / WHEREVER YOU PLAY',
    /** 改写自参考站「一套设备，解锁你的"多面"数字宇宙」 */
    title: '一台设备，装下你所有玩法',
    subtitle: '竞技对抗，或是独自探索，让每一种玩法都有去处。',
  },

  billing: {
    kicker: '04 / HOURLY',
    /** 改写自参考站「别让昂贵显卡，绑架你的钱包」 */
    title: '预算有限，战力无限',
    subtitle: '按时长计费，用多少算多少，不必为闲置的算力买单。',
    /** 价格位统一以此句说明示意属性；全页每个价格数字都必须带「示意」标注 */
    priceNote: '以上为示意价，实际价格以客户端内实时公示为准',
  },

  steps: {
    kicker: '05 / READY. SET. PLAY.',
    /** 改写自参考站「丢掉配置焦虑，只需四步」 */
    title: '配置的事交给云端，你只管开玩',
    subtitle: '四步进入你的云端主场。',
  },

  footer: {
    tagline: '设备有限，热爱无限。让你的主场，随你而行。',
  },
} as const;