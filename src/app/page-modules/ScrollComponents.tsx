import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// 自定义组件：滚动指示器
export const ScrollIndicator = () => {
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
export const ScrollToNext = ({ targetId }: { targetId: string }) => {
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
