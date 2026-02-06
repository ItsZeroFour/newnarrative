export const casesItemsVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.43, 0.15, 0.23, 0.96],
      staggerChildren: 0.15,
    },
  },
};

export const casesItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: -20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
};

export const fogEffectVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(15px)",
    transform: "scale(0.9)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transform: "scale(1)",
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const rotate3DVariants = {
  hidden: {
    opacity: 0,
    rotateY: -90,
    scale: 0.8,
    transformOrigin: "center center",
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};
