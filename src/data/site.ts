/**
 * 站点级常量。
 *
 * 注意：带 TODO(上线前替换) 标记的值为占位内容，
 * 上线前必须在此文件中替换，全项目其它位置不重复出现这些值。
 */

export const SITE = {
  brand: '欧竞云电竞',
  brandLatin: 'OUJING CLOUD GAMING',

  // TODO(上线前替换): 替换为 Windows 客户端安装包的真实下载地址。
  // 当前暂指向官方站点的下载区锚点，保证卡片可点击、不产生死链。
  clientDownloadUrl: 'https://antyunpc.cn/#download',

  // TODO(上线前替换): 替换为真实备案号文案。
  icp: '备案号待补充',

  // TODO(上线前替换): 替换为真实客服联系方式。
  support: {
    qq: '客服 QQ 待补充',
    group: '官方 QQ 群待补充',
  },

  // TODO(上线前替换): 如需展示公司主体名称，在此填写。
  company: '公司主体待补充',

  copyrightOwner: '欧竞云电竞',
} as const;

/** 页内板块锚点 id，供导航、页脚与各区块共用，避免手写字符串不一致。 */
export const SECTION_IDS = {
  hero: 'hero',
  features: 'features',
  plans: 'plans',
  scenarios: 'scenarios',
  billing: 'billing',
  steps: 'steps',
  footer: 'site-footer',
} as const;

/**
 * 顶部导航菜单。
 * 单页站没有独立的游戏库 / 帮助中心 / 关于我们页面，
 * 因此按语义最近原则锚向页内板块（映射定稿见 spec 的「顶部导航」一节）。
 */
export const NAV_LINKS = [
  { label: '海量游戏库', href: `#${SECTION_IDS.scenarios}` },
  { label: '帮助中心', href: `#${SECTION_IDS.steps}` },
  { label: '关于我们', href: `#${SECTION_IDS.footer}` },
] as const;

/** 页脚导航链接：直接指向页内各板块。 */
export const FOOTER_LINKS = [
  { label: '核心特性', href: `#${SECTION_IDS.features}` },
  { label: '产品套餐', href: `#${SECTION_IDS.plans}` },
  { label: '使用场景', href: `#${SECTION_IDS.scenarios}` },
  { label: '计费说明', href: `#${SECTION_IDS.billing}` },
  { label: '四步上手', href: `#${SECTION_IDS.steps}` },
] as const;