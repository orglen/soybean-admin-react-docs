import type { MetaRecord } from 'nextra';

const CLI_ITEMS: MetaRecord = {
  command: '',
  'git-hooks': ''
};

const ICON_ITEMS: MetaRecord = {
  index: '概述',
  usage: ''
};

const THEME_ITEMS: MetaRecord = {
  // eslint-disable-next-line sort/object-properties
  index: '概述',
  config: '配置'
};

const REQUEST_ITEMS: MetaRecord = {
  index: '概述',
  usage: '使用'
};

export default {
  // eslint-disable-next-line sort/object-properties
  guide: {
    items: {
      // eslint-disable-next-line sort/object-properties
      index: '',
      'quick-start': {
        href: '/guide/quick-start',
        title: '快速开始'
      },
      sync: {
        href: '/guide/sync',
        title: '同步代码'
      },
      theme: {
        items: THEME_ITEMS,
        title: '主题'
      },
      request: {
        items: REQUEST_ITEMS,
        title: '请求'
      },
      icon: {
        items: ICON_ITEMS,
        title: '系统图标'
      },
      cli: {
        items: CLI_ITEMS,
        title: '命令行'
      },
      __: {
        title: '更多',
        type: 'separator'
      },
      在线预览: {
        href: 'https://react.soybeanjs.cn',
        title: '在线预览'
      },
      'next.js-link': {
        href: 'https://nextjs.org?utm_source=nextra.site&utm_medium=referral&utm_campaign=sidebar',
        title: 'Next.js Docs'
      }
    },
    title: '指引',
    type: 'page'
  },
  faq: {
    title: '常见问题',
    type: 'page'
  },
  index: {
    display: 'hidden',
    type: 'page'
  }
};
