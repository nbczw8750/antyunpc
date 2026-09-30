/**
 * 首屏平台下载卡数据。
 *
 * 口径说明：
 * - 下载地址接入前，四个平台的 href 一律为 null，卡片不提供任何跳转：
 *   Windows 标注「一期开放」仅表达资源状态，下载通道尚未接入；
 *   macOS / Android / H5 均未上线，标注「敬请期待」。
 * - 上线状态同时由 statusLabel 文字表达，不依赖颜色单独区分。
 * - 接入真实下载地址后，恢复可下载平台的 href 即可。
 */

export type PlatformStatus = 'available' | 'coming-soon';

export interface Platform {
  id: string;
  name: string;
  /** 平台副标题 / 说明 */
  note: string;
  /** 下载地址接入前一律为 null（不提供跳转）；接入后可下载平台指向下载地址 */
  href: string | null;
  status: PlatformStatus;
  statusLabel: string;
}

export const PLATFORMS: readonly Platform[] = [
  {
    id: 'windows',
    name: 'Windows',
    note: 'Windows 10 / 11 · 64 位',
    href: null,
    status: 'available',
    statusLabel: '一期开放',
  },
  {
    id: 'macos',
    name: 'macOS',
    note: 'Apple 芯片与 Intel 机型',
    href: null,
    status: 'coming-soon',
    statusLabel: '敬请期待',
  },
  {
    id: 'android',
    name: 'Android',
    note: '手机与平板',
    href: null,
    status: 'coming-soon',
    statusLabel: '敬请期待',
  },
  {
    id: 'h5',
    name: 'H5 网页版',
    note: '浏览器直接进入',
    href: null,
    status: 'coming-soon',
    statusLabel: '敬请期待',
  },
] as const;