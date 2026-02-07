export const typingAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (index) => ({
    opacity: 1,
    transition: {
      delay: index * 0.03,
      duration: 0.05,
      ease: "easeOut",
    },
  }),
};

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
      delay: 0.2,
    },
  },
};

export const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

export const typingSpeed = {
  default: 0.03,
  highlight: 0.025,
  slow: 0.04,
  fast: 0.02,
};

export const lineDelays = {
  betweenLines: 0.2,
  beforeHighlight: 0.3,
};

export const observerOptions = {
  once: true,
  margin: "-100px 0px",
  amount: 0.1,
};
