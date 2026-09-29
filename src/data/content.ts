/**
 * 核心特性、使用场景与四步流程数据。
 *
 * 场景数据带 platformNote 字段，用于标注移动场景下 Android 客户端未上线的状态。
 */

/** ---------- 核心特性（四张绿色描边卡片） ---------- */
export interface Feature {
  id: string;
  title: string;
  description: string;
  /** 卡片左上角的短标签 */
  tag: string;
}

export const FEATURES: readonly Feature[] = [
  {
    id: 'gpu',
    title: 'RTX 云端显卡',
    description:
      '由云端数据中心提供 RTX 系列显卡算力，本地设备无需装配独立显卡即可开启光追与高画质。',
    tag: 'GPU',
  },
  {
    id: 'latency',
    title: '就近低延迟节点',
    description:
      '按地理位置就近接入算力节点，压缩网络往返耗时，让操作与画面尽量同步。',
    tag: 'LATENCY',
  },
  {
    id: 'memory',
    title: '32GB 大内存',
    description:
      '大容量内存承接多开与大型场景加载，减少卡顿与等待，切图与读盘更从容。',
    tag: 'MEMORY',
  },
  {
    id: 'nodownload',
    title: '免下载大型游戏',
    description:
      '游戏运行在云端，本地不必预下载上百 GB 的安装包，点开即进入，省下硬盘与时间。',
    tag: 'NO INSTALL',
  },
] as const;

/** ---------- 使用场景（三组图文） ---------- */
export interface Scenario {
  id: string;
  title: string;
  description: string;
  /** 平台状态标注；为空表示不涉及未上线平台 */
  platformNote?: string;
}

export const SCENARIOS: readonly Scenario[] = [
  {
    id: 'mac-aaa',
    title: 'Mac 玩 3A 大作',
    description:
      'macOS 与高性能独立显卡生态长期割裂，把渲染交给云端后，Mac 也能流畅进入 3A 世界。',
  },
  {
    id: 'thin-workstation',
    title: '轻薄本做工作站',
    description:
      '出差与通勤只带轻薄本，需要大内存与大显存时按需调用云端算力，不牺牲便携。',
  },
  {
    id: 'mobile-geek',
    title: '移动极客随身玩',
    description:
      '把云端主机装进口袋，通勤与旅途中随时接续上一局进度，设备不再是限制。',
    platformNote: 'Android 客户端敬请期待',
  },
] as const;

/** ---------- 四步上手 ---------- */
export interface Step {
  id: string;
  /** 步骤序号，从 1 开始 */
  order: number;
  title: string;
  description: string;
}

export const STEPS: readonly Step[] = [
  {
    id: 'download',
    order: 1,
    title: '下载客户端',
    description: '从官网获取 Windows 客户端安装包并完成安装。',
  },
  {
    id: 'login',
    order: 2,
    title: '一键登录',
    description: '使用账号快捷登录，无需复杂配置。',
  },
  {
    id: 'verify',
    order: 3,
    title: '快速实名',
    description: '按提示完成实名认证，通过后即可进入云端主机。',
  },
  {
    id: 'play',
    order: 4,
    title: '选游戏即刻开玩',
    description: '在客户端内选好游戏与档位，几秒内进入你的云端主场。',
  },
] as const;