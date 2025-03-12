import { Logo, QQ } from '@icons';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs';

import '@css/global.css';

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
    chatLink="https://qm.qq.com/cgi-bin/qm/qr?k=lf7vqv-9JgJ_NDBAUk9EofQEfpqDw7so&jump_from=webapi&authKey=Ueo/dyEtrRm1vgkMI4yqiKjBRtKQuaEGNxMaXX56CoPQz2GRFP+qAADfKoe3ajJN"
    logo={<Logo className="w-[32px] h-[32px] text-[var(--soybean)]" />}
    projectLink="https://github.com/soybeanjs/soybean-admin-react"
  >
    <div className="flex items-center gap-2">1111</div>
  </Navbar>
);

const banner = (
  <Banner dismissible={false}>
    🎉 Nextra 4.0 is released. dimaMachina is looking{' '}
    <Link href="https://github.com/dimaMachina">for a new job or consulting</Link>.
  </Banner>
);

const footer = (
  <Footer className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1"
      href="https://vercel.com?utm_source=nextra.site"
      rel="noreferrer"
      target="_blank"
      title="vercel.com homepage"
    >
      Powered by
    </a>
    <p className="mt-6 text-xs">© {new Date().getFullYear()} The Nextra Project.</p>
  </Footer>
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
          banner={banner}
          docsRepositoryBase="https://github.com/soybeanjs/soybean-admin-react-docs"
          editLink="在github上编辑此页面"
          footer={footer}
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
      </body>
    </html>
  );
}
