/**
 * 产品套餐档位数据。
 *
 * 口径说明：
 * - 档位名称、显卡型号、处理器、内存、目标画质均取自欧竞云电竞官方公布的信息。
 * - 价格仅作示意展示，不构成报价：已开放档位带 price 与 priceNote 两个字段，
 *   借 priceNote 承载「示意」标注，避免标注与数字在模板里被拆散。
 * - 未上线档位不给示意价，price 直接取「即将公布」且不带 priceNote。
 * - 每项带 status 字段，由状态驱动卡片的高亮或降饱和样式，
 *   未上线档位的配置项统一显示「即将公布」。
 */

export type PlanStatus = 'available' | 'coming-soon';

export interface Plan {
  id: string;
  name: string;
  /** 显卡型号；未上线档位为「即将公布」 */
  gpu: string;
  /** 处理器；未上线档位为「即将公布」 */
  cpu: string;
  /** 内存；未上线档位为「即将公布」 */
  ram: string;
  /** 目标画质；未上线档位为「即将公布」 */
  target: string;
  summary: string;
  status: PlanStatus;
  /** 状态角标文案，与 status 一一对应 */
  statusLabel: string;
  /** 示意价或「即将公布」；上线前必须替换为经确认的口径 */
  price: string;
  /** 价格的示意标注文案；未上线档位无此项 */
  priceNote?: string;
}

export const PLANS: readonly Plan[] = [
  {
    id: 'casual',
    name: '畅玩云电脑',
    gpu: 'RTX 4060',
    cpu: 'i5-13/14 代',
    ram: '32GB',
    target: '1080P · 高帧率',
    summary: '主流网游与单机畅玩档，帧率稳定，适合日常开黑与休闲娱乐。',
    status: 'available',
    statusLabel: '一期开放',
    price: '¥4 / 小时',
    priceNote: '示意',
  },
  {
    id: 'esports',
    name: '电竞云电脑',
    gpu: 'RTX 5060',
    cpu: 'i5-13/14 代',
    ram: '32GB',
    target: '2K · 高刷电竞',
    summary: '面向竞技对抗的高刷档位，画质与延迟兼顾，适合排位与赛事训练。',
    status: 'available',
    statusLabel: '一期开放',
    price: '¥6 / 小时',
    priceNote: '示意',
  },
  {
    id: 'arena',
    name: '竞技区云电脑',
    gpu: '即将公布',
    cpu: '即将公布',
    ram: '即将公布',
    target: '即将公布',
    summary: '为高强度竞技场景准备的专属算力区，规格与开放时间即将公布。',
    status: 'coming-soon',
    statusLabel: '即将上线',
    price: '即将公布',
  },
] as const;