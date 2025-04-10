'use client';
import { Button } from '@ui/button';
import { motion, useAnimation, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Code,
  Cpu,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Palette,
  Smartphone,
  Zap
} from 'lucide-react';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';

// 为CSS动画添加自定义类
import './animations.css';

// 自定义组件：滚动指示器
const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001,
    stiffness: 100
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// 自定义组件：滚动到下一部分的按钮
const ScrollToNext = ({ targetId }: { targetId: string }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      transition={{ duration: 1.5, repeat: Infinity }}
      onClick={scrollToSection}
    >
      <ArrowDown className="w-8 h-8 text-white" />
    </motion.div>
  );
};

// 自定义组件：特性卡片
const FeatureCard = ({
  delay,
  description,
  icon,
  title
}: {
  delay: number;
  description: string;
  icon: React.ReactNode;
  title: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
      initial="hidden"
      ref={ref}
      transition={{ delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className="text-blue-400 mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};

// 自定义组件：技术栈标签
const TechTag = ({ name }: { name: string }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20 cursor-default group">
      <span className="relative">
        {name}
        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </span>
    </div>
  );
};

// 自定义组件：数字统计
const StatCard = ({ delay, label, number }: { delay: number; label: string; number: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      className="text-center bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 relative z-10 shadow-lg group"
      initial="hidden"
      ref={ref}
      transition={{ delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
        {number}
      </h3>
      <p className="text-gray-300 relative inline-block">
        {label}
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </p>
    </motion.div>
  );
};

// 自定义组件：视差背景
const ParallaxBackground = () => {
  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      bgImageAlt="Background"
      blur={0}
      strength={200}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-blue-900/90" />
    </Parallax>
  );
};

// 截图展示组件
const ScreenshotDisplay = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      className="relative mt-10 rounded-lg overflow-hidden border border-white/20 shadow-2xl shadow-blue-500/10"
      initial="hidden"
      ref={ref}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <img
        alt="Soybean Admin Dashboard"
        className="w-full h-auto rounded-lg"
        src="https://soybeanjs-1300612522.cos.ap-guangzhou.myqcloud.com/uPic/soybean-admin-v1-01.png"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </motion.div>
  );
};

const Page = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 技术栈
  const techStack = [
    'React 19',
    'ReactRouter V7',
    'Redux/toolkit',
    'Ant Design',
    'UnoCSS',
    'Vite 6',
    'TypeScript',
    '响应式设计'
  ];

  // 特性数据
  const features = [
    {
      description: '基于 React19 + ReactRouter V7 + Redux/toolkit + Ant Design 构建，采用现代前端技术。',
      icon: <Cpu className="w-8 h-8" />,
      title: '最新技术栈'
    },
    {
      description: '采用Vite构建，启动快速，HMR迅速响应，保证开发体验和应用性能。',
      icon: <Zap className="w-8 h-8" />,
      title: '高性能'
    },
    {
      description: '自动化的文件路由系统，提供类似Next.js的约定式路由体验。',
      icon: <GitBranch className="w-8 h-8" />,
      title: '文件路由系统'
    },
    {
      description: '内置基于角色的权限管理，轻松控制用户访问权限。',
      icon: <Lock className="w-8 h-8" />,
      title: '权限管理'
    },
    {
      description: '完美适配移动端设备，提供流畅的跨设备用户体验。',
      icon: <Smartphone className="w-8 h-8" />,
      title: '移动端适配'
    },
    {
      description: '内置多语言支持，轻松实现应用的国际化。',
      icon: <Globe className="w-8 h-8" />,
      title: '国际化支持'
    },
    {
      description: '丰富的主题配置，支持暗黑模式和多种主题色彩。',
      icon: <Palette className="w-8 h-8" />,
      title: '主题配置'
    },
    {
      description: '提供大量预设组件，满足各种后台管理系统的需求。',
      icon: <Layers className="w-8 h-8" />,
      title: '组件丰富'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <ScrollIndicator />

      {/* 动态背景元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* 模糊光斑 */}
          <div className="absolute top-[10%] left-[15%] w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-[8rem] opacity-60" />
          <div className="absolute top-[40%] right-[15%] w-[25rem] h-[25rem] bg-cyan-500/20 rounded-full blur-[8rem] opacity-60" />
          <div className="absolute bottom-[15%] left-[35%] w-[20rem] h-[20rem] bg-indigo-500/20 rounded-full blur-[8rem] opacity-60" />

          {/* 网格图案 */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyQTJFMzUiIG9wYWNpdHk9Ii4zIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9Ii41Ij48cGF0aCBkPSJNMzAgMEwzMCA2ME0wIDMwTDYwIDMwIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

          {/* 浮动图形 */}
          <motion.div
            animate={{ rotate: 360, y: [0, 20, 0] }}
            className="absolute top-[20%] left-[10%] w-8 h-8 border border-blue-400/30 rounded-md"
            transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            animate={{ rotate: -360, y: [0, -30, 0] }}
            className="absolute top-[30%] right-[20%] w-12 h-12 border border-cyan-400/30 rounded-full"
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            animate={{ rotate: 180, y: [0, 15, 0] }}
            className="absolute bottom-[25%] left-[25%] w-6 h-6 border border-indigo-400/30 rounded-sm"
            transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            animate={{ rotate: -180, y: [0, -25, 0] }}
            className="absolute bottom-[15%] right-[15%] w-10 h-10 border border-blue-400/30 rotate-45"
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          />
        </div>
      </div>

      {/* 英雄区域 */}
      <section className="relative h-screen flex items-center justify-center py-12 px-4 overflow-hidden">
        <ParallaxBackground />

        {/* 浮动3D装饰元素 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 代码块装饰 */}
          <motion.div
            animate={{ opacity: 0.7, y: 0 }}
            className="absolute top-[15%] right-[10%] w-32 h-32 hidden md:block"
            initial={{ opacity: 0, y: -50 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md blur opacity-50" />
              <div className="relative bg-black/50 backdrop-blur-md p-3 rounded-md border border-white/20 shadow-lg">
                <div className="flex space-x-1 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <pre className="text-[8px] text-gray-300 overflow-hidden">
                  <code>{`import { useRoutes } from 'react-router';
import { routes } from './routes';

export default function App() {
  return useRoutes(routes);
}`}</code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* 特性卡片装饰 */}
          <motion.div
            animate={{ opacity: 0.8, x: 0 }}
            className="absolute bottom-[25%] left-[8%] w-40 hidden md:block"
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-lg">
              <div className="text-blue-400 mb-1">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-white mb-1">高性能</h4>
              <p className="text-[8px] text-gray-300">Vite构建，速度快</p>
            </div>
          </motion.div>

          {/* UI组件装饰 */}
          <motion.div
            animate={{ opacity: 0.9, scale: 1 }}
            className="absolute top-[30%] left-[12%] hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="bg-gradient-to-r from-blue-500/80 to-cyan-500/80 p-2 rounded-md shadow-lg text-xs text-white font-medium">
              React SoybeanAdmin
            </div>
          </motion.div>

          {/* 3D旋转组件 */}
          <motion.div
            animate={{ opacity: 0.7, rotateY: 0, x: 0 }}
            className="absolute bottom-[20%] right-[15%] w-36 hidden md:block"
            initial={{ opacity: 0, rotateY: -30, x: 50 }}
            style={{ perspective: '1000px' }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            <div className="relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur opacity-60" />
              <div className="relative bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/20 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="bg-blue-500/30 w-6 h-1.5 rounded-full" />
                  <div className="bg-cyan-500/30 w-3 h-3 rounded-full" />
                </div>
                <div className="space-y-1.5">
                  <div className="bg-white/10 h-1.5 rounded-full w-full" />
                  <div className="bg-white/10 h-1.5 rounded-full w-3/4" />
                  <div className="bg-white/10 h-1.5 rounded-full w-1/2" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 浮动图形 */}
          <motion.div
            className="absolute top-[35%] right-[25%] w-5 h-5 border-2 border-blue-400/50 rounded-full"
            transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              y: [0, -15, 0]
            }}
          />
          <motion.div
            className="absolute top-[15%] left-[30%] w-4 h-4 border-2 border-cyan-400/50 rounded-sm rotate-45"
            transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
            animate={{
              rotate: [45, 405],
              scale: [1, 1.2, 1],
              y: [0, 20, 0]
            }}
          />
          <motion.div
            className="absolute bottom-[30%] right-[35%] w-6 h-6 border-2 border-purple-400/50 rounded-md"
            transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
            animate={{
              rotate: [0, -360],
              scale: [1, 0.9, 1],
              y: [0, -25, 0]
            }}
          />
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-3 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <img
                alt="Soybean Admin Logo"
                className="w-20 h-20 mx-auto relative z-10"
                src="/favicon.svg"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-70 z-0 animate-pulse" />

              {/* 光环效果 */}
              <div className="absolute -inset-6 rounded-full z-0">
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping-slow" />
                <div className="absolute inset-3 rounded-full border-2 border-cyan-400/30 animate-spin-slow" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-3 text-white"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            React
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              SoybeanAdmin
            </span>
          </motion.h1>

          {/* 添加互动标语 */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-white/10 text-sm text-blue-300">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400"
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="ml-3">为开发者而生 · 优雅设计 · 高效开发</span>
            </div>
          </motion.div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-gray-300 mb-5 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            清新优雅的中后台管理模板，采用最新前端技术栈
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {techStack.map((tech, index) => (
              <TechTag
                key={index}
                name={tech}
              />
            ))}
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 group">
              <span>开始使用</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                className="inline-block ml-1"
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              >
                →
              </motion.span>
            </Button>
            <Button
              className="border-white/30  hover:bg-white/10 px-6 py-2 rounded-full text-base font-medium transition-all duration-300 backdrop-blur-sm shadow-lg group"
              variant="outline"
            >
              <span className="relative inline-block">
                查看文档
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 inline-flex items-center gap-1 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-gray-300 text-sm"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            近期更新: v2.0.0版本发布 — 全新设计，优化性能
          </motion.div>

          {/* 添加GitHub统计 */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 flex gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
              <div className="text-yellow-400">★</div>
              <span>1k+ Stars</span>
            </div>
            <div className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
              <div className="text-blue-400">
                <GitBranch className="w-3.5 h-3.5" />
              </div>
              <span>200+ Forks</span>
            </div>
            <div className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
              <div className="text-green-400">
                <Code className="w-3.5 h-3.5" />
              </div>
              <span>MIT 开源</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 镜像反光效果 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />

        <ScrollToNext targetId="features" />
      </section>

      {/* 截图展示 */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 relative"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-sm" />
            <h2 className="text-4xl font-bold mb-3 text-white relative inline-block">
              优雅的界面设计
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">现代化UI设计，提供卓越的用户体验</p>
          </motion.div>

          <div className="relative">
            <ScreenshotDisplay />
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-3/4 h-10 bg-blue-500/20 blur-3xl" />

            <div className="absolute top-10 right-10 flex flex-col gap-2 z-10 hidden md:block">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg">
                <GitBranch className="w-5 h-5 text-green-400" />
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg">
                <Layers className="w-5 h-5 text-blue-400" />
              </div>
            </div>

            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex flex-col gap-2 z-10 hidden md:block">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg">
                <Palette className="w-5 h-5 text-purple-400" />
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg">
                <Lock className="w-5 h-5 text-red-400" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <StatCard
                delay={0}
                label="预设组件"
                number="30+"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <StatCard
                delay={0.1}
                label="主题配置"
                number="8+"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <StatCard
                delay={0.2}
                label="用户满意度"
                number="99%"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <StatCard
                delay={0.3}
                label="技术支持"
                number="24/7"
              />
            </div>
          </div>
        </div>

        {/* 添加一些背景装饰 */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </section>

      {/* 特性区域 */}
      <section
        className="py-16 bg-gradient-to-b from-black to-blue-900/50 relative"
        id="features"
      >
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute left-1/3 top-1/3 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          <div className="absolute right-1/4 top-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
          <div className="absolute left-1/2 bottom-1/4 w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50" />
          <div className="absolute right-1/3 bottom-1/3 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-10 relative"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-sm" />
            <h2 className="text-4xl font-bold mb-3 text-white relative inline-block">
              强大功能
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">为中后台开发提供全方位解决方案</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                className="relative group"
                key={index}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-80 transition duration-300" />
                <FeatureCard
                  delay={index * 0.1}
                  description={feature.description}
                  icon={feature.icon}
                  title={feature.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 视差滚动区域 */}
      <section className="relative h-screen overflow-hidden">
        <Parallax
          bgImage="https://soybeanjs-1300612522.cos.ap-guangzhou.myqcloud.com/uPic/soybean-admin-v1-01.png"
          bgImageAlt="Soybean Admin Dashboard"
          blur={1}
          strength={300}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-900/80 to-black/90 z-0" />

          <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                style={{ opacity, y }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/50 text-sm mb-3">
                  专为开发者设计
                </div>
                <h2 className="text-4xl font-bold mb-6 text-white">高效开发体验</h2>
                <p className="text-xl text-gray-300 mb-8 border-l-4 border-blue-500 pl-4">
                  代码规范严谨，架构清晰优雅，支持TypeScript类型检查，让开发更高效。提供丰富的组件和工具，加速您的后台管理系统开发。
                </p>

                <div className="flex gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex-1">
                    <Cpu className="w-6 h-6 text-blue-400 mb-2" />
                    <h3 className="text-lg font-bold text-white mb-1">代码自动生成</h3>
                    <p className="text-sm text-gray-300">内置多种代码生成工具</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex-1">
                    <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                    <h3 className="text-lg font-bold text-white mb-1">开发热重载</h3>
                    <p className="text-sm text-gray-300">毫秒级的热更新响应</p>
                  </div>
                </div>

                <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  了解更多 <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-75 animate-pulse" />
                  <div className="relative bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="text-gray-400 text-xs">App.tsx</div>
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      <code>
                        {`import React from 'react';
import { useAppSelector } from '@/store';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <ConfigProvider theme={theme}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ConfigProvider>
  );
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 点缀元素 - 交互式功能指示 */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {/* 顶部工具栏示意 */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 max-w-lg w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg hidden md:flex"
              initial={{ opacity: 0, y: -20 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex items-center justify-between w-full px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-white/80 text-xs px-3 py-1 rounded-md bg-black/20 backdrop-blur-sm">
                  SoybeanAdmin
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-1 rounded-full bg-white/20" />
                  <div className="w-6 h-1 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>

            {/* 左侧功能指示器 - 权限系统 */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-1/4 left-10 hidden md:block"
              initial={{ opacity: 0, x: -50 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-75 animate-pulse-slow" />
                <div className="relative bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex flex-col items-center gap-2 max-w-[140px]">
                  <Lock className="w-8 h-8 text-purple-400" />
                  <div className="text-center">
                    <div className="text-white font-medium text-sm">权限管理</div>
                    <div className="text-white/60 text-xs">内置RBAC权限系统</div>
                  </div>

                  <div className="mt-1 flex gap-1">
                    <motion.div
                      animate={{ width: [8, 32, 8] }}
                      className="h-1 w-8 bg-purple-400/50 rounded-full"
                      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    />
                    <motion.div
                      animate={{ width: [3, 10, 3] }}
                      className="h-1 w-3 bg-blue-400/50 rounded-full"
                      transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    />
                  </div>
                </div>

                {/* 连接线 */}
                <motion.div
                  animate={{ width: 80 }}
                  className="absolute top-1/2 -right-20 w-20 border-t border-dashed border-purple-400/30"
                  initial={{ width: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                />
              </div>
            </motion.div>

            {/* 右侧功能指示器 - 主题配置 */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-1/3 right-10 hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-75 animate-pulse-slow" />
                <div className="relative bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex flex-col items-center gap-2 max-w-[140px]">
                  <Palette className="w-8 h-8 text-cyan-400" />
                  <div className="text-center">
                    <div className="text-white font-medium text-sm">主题系统</div>
                    <div className="text-white/60 text-xs">支持多种主题配置</div>
                  </div>

                  <div className="flex gap-1 mt-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  </div>
                </div>

                {/* 连接线 */}
                <motion.div
                  animate={{ width: 80 }}
                  className="absolute top-1/2 -left-20 w-20 border-t border-dashed border-cyan-400/30"
                  initial={{ width: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                />
              </div>
            </motion.div>

            {/* 底部功能指示器 - 组件系统 */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-1/5 left-1/2 transform -translate-x-1/2 hidden md:block"
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-75 animate-pulse-slow" />
                <div className="relative bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center gap-3 max-w-[220px]">
                  <Layers className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium text-sm">丰富组件</div>
                    <div className="text-white/60 text-xs">提供30+预设组件</div>
                  </div>

                  <div className="bg-black/20 backdrop-blur-sm p-1 rounded-md">
                    <motion.div
                      animate={{ opacity: [1, 0.6, 1] }}
                      className="text-xs text-green-400"
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      30+
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 交互指示元素 */}
            <div className="absolute bottom-10 right-10 hidden md:block">
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="relative group hover-lift"
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 2, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/5 backdrop-blur-md w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="text-cyan-400 font-medium text-xs">开始</div>
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDown className="w-4 h-4 text-white/80 mx-auto mt-1" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Parallax>
      </section>

      {/* 响应式设计展示 */}
      <section className="py-16 bg-gradient-to-b from-black to-blue-900/30 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

          {/* 网格装饰 */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyQTJFMzUiIG9wYWNpdHk9Ii4zIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9Ii41Ij48cGF0aCBkPSJNMzAgMEwzMCA2ME0wIDMwTDYwIDMwIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/50 text-sm mb-3">
                全设备兼容
              </div>
              <h2 className="text-4xl font-bold mb-4 text-white">移动端完美适配</h2>
              <p className="text-xl text-gray-300 mb-6">响应式设计，从桌面到移动端的完美体验，一套代码适配所有设备</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">自适应布局</h3>
                  <p className="text-gray-400 text-sm">根据设备尺寸智能调整元素布局</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">触控优化</h3>
                  <p className="text-gray-400 text-sm">针对触控设备进行交互优化</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">性能优化</h3>
                  <p className="text-gray-400 text-sm">针对移动设备进行性能优化</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">动态适配</h3>
                  <p className="text-gray-400 text-sm">动态适应屏幕旋转和尺寸变化</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  立即体验
                </Button>
                <Button
                  className="border-white/30  hover:bg-white/10 px-5 py-2 rounded-full text-base transition-all duration-300 backdrop-blur-sm"
                  variant="outline"
                >
                  了解更多
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative">
                <img
                  alt="Mobile Version"
                  className="h-[500px] object-contain z-10 relative mx-auto"
                  src="https://ohh-1321526050.cos.ap-nanjing.myqcloud.com/mobile.png"
                />
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[80%] h-20 bg-blue-500/20 blur-2xl rounded-full" />

                {/* 装饰元素 */}
                <div className="absolute top-1/4 -left-4 w-8 h-8 bg-blue-500/30 backdrop-blur-md rounded-lg border border-blue-500/50 z-20" />
                <div className="absolute top-1/2 -right-4 w-12 h-12 bg-cyan-500/30 backdrop-blur-md rounded-full border border-cyan-500/50 z-20" />
                <div className="absolute bottom-1/3 -left-6 w-10 h-10 bg-indigo-500/30 backdrop-blur-md rounded-lg transform rotate-45 border border-indigo-500/50 z-20" />

                {/* 特性标签 */}
                <div className="absolute top-1/5 right-0 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-white text-sm z-20">
                  移动优先
                </div>
                <div className="absolute top-2/3 left-0 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-white text-sm z-20">
                  多主题
                </div>
                <div className="absolute bottom-1/4 right-0 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-white text-sm z-20">
                  暗黑模式
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 开始使用部分 */}
      <section className="py-16 bg-gradient-to-b from-blue-900/30 to-black relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto bg-gradient-to-br from-black/60 to-blue-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl relative"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* 装饰元素 */}
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-500/20 backdrop-blur-md rounded-lg transform rotate-45 border border-blue-500/30" />
            <div className="absolute -bottom-5 -right-5 w-10 h-10 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-500/30" />

            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 shadow-lg">
              <Code className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">准备好开始了吗？</h2>
            <p className="text-xl text-gray-300 mb-8 text-center">
              只需几个简单的步骤，即可开始使用 React SoybeanAdmin 构建您的后台管理系统
            </p>

            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 text-left mb-8 border border-white/10 shadow-inner relative">
              {/* 代码行号装饰 */}
              <div className="absolute left-2 top-6 bottom-6 w-8 flex flex-col items-end pr-3 text-gray-500 text-xs">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
              </div>

              <pre className="text-sm text-gray-300 overflow-x-auto pl-8">
                <code>
                  {`# 克隆项目
git clone https://github.com/soybeanjs/soybean-admin-react.git

# 安装依赖
pnpm i

# 启动项目
pnpm dev`}
                </code>
              </pre>

              {/* 代码标记 */}
              <div className="absolute -right-3 -top-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs px-2 py-1 rounded-md shadow-lg">
                简单三步
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                立即开始
              </Button>
              <Button
                className="border-white/30  hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 backdrop-blur-sm"
                variant="outline"
              >
                查看文档
              </Button>
            </div>

            {/* Star指示器 */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="text-yellow-400">★</div>
                </motion.div>
                <span className="text-gray-300 text-sm">已获得超过 1000+ GitHub Stars</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;
