import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const FeatureCard = ({
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

export const StatCard = ({ delay, label, number }: { delay: number; label: string; number: string }) => {
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
