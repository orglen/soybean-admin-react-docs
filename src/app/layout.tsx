import { Logo, QQ } from '@icons';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Layout, Navbar } from 'nextra-theme-docs';
import { Toaster } from 'sonner';

import '@css/global.css';
import GlobalFooter from './globalFooter';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  appleWebApp: {
    title: 'Soybean-React-Docs'
  },
  applicationName: 'soybean-admin-react-docs',
  authors: [{ name: 'Ohh-889', url: 'https://github.com/Ohh-889' }],
  description: 'soybean-admin-react官方文档',
  generator: 'Soybean-React',
  icons: {
    icon: '/favicon.svg'
  },
  keywords: ['Soybean-React', 'Soybean-React-Docs', 'react', 'admin', 'template'],
  title: {
    default: 'Soybean-React-Docs',
    template: '%s | Soybean-React'
  }
};
const navbar = (
  <Navbar
    chatIcon={<QQ className="w-[24px] h-[24px] " />}
    chatLink="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=mSrGm_rLhAvbw2zADMMLOjy3YRz1IP2e&authKey=ejaXbXO2D20RVPtEQG%2BA9ZiK%2Fk6m7BBOvs6Vf298Ky%2F3Mc7KTEKvJwcv%2FOtERMEp&noverify=0&group_code=940903238"
    logo={<Logo className="w-[32px] h-[32px] text-[var(--soybean)]" />}
    projectLink="https://github.com/soybeanjs/soybean-admin-react"
  />
);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <html
      suppressHydrationWarning
      dir="ltr"
      lang="en"
    >
      <Head />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout
          docsRepositoryBase="https://github.com/soybeanjs/soybean-admin-react-docs"
          editLink="在github上编辑此页面"
          footer={<GlobalFooter />}
          navbar={navbar}
          pageMap={pageMap}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          feedback={{
            content: '反馈',
            labels: 'feedback'
          }}
        >
          {children}
        </Layout>

        <Toaster />
      </body>
    </html>
  );
}
