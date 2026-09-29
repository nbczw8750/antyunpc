/**
 * 首屏平台下载卡数据。
 *
 * 口径说明：
 * - 一期仅 Windows 客户端开放下载，其余三个平台均未上线。
 * - 未上线平台 href 为 null，卡片不提供可点击链接；
 *   上线状态同时由 statusLabel 文字表达，不依赖颜色单独区分。
 */

import { SITE } from './site';

export type PlatformStatus = 'available' | 'coming-soon';

export interface Platform {
  id: string;
  name: string;
  /** 平台副标题 / 说明 */
  note: string;
  /** 可下载平台指向下载地址；未上线平台为 null */
  href: string | null;
  status: PlatformStatus;
  statusLabel: string;
}

export const PLATFORMS: readonly Platform[] = [
  {
    id: 'windows',
    name: 'Windows',
    note: 'Windows 10 / 11 · 64 位',
    href: SITE.clientDownloadUrl,
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