import { Logo } from '@icons';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs';

import '@/css/global.css';
import { cn } from '@/lib/utils';

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
  title: 'soybean-admin-react-docs'
};
const navbar = (
  <Navbar
    logo={
      <Logo
        height="20"
        className={cn(
          'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
          '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
          'hover:[mask-position:100%]'
        )}
      />
    }
    // ... Your additional navbar options
  />
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
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          editLink="Edit this page on GitHub"
          footer={footer}
          navbar={navbar}
          pageMap={pageMap}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
