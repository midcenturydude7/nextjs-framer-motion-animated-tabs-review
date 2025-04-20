export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      // when: "afterChildren",
    },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      // when: "afterChildren",
    },
  },
};

export const slide = {
  initial: { x: 150 },
  enter: (i) => ({
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
  exit: (i) => ({
    x: 150,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.2 } },
  closed: { scale: 0, transition: { duration: 0.2 } },
  // hover: { scale: 1.1, transition: { duration: 0.2 } },
  // active: { scale: 0.9, transition: { duration: 0.2 } },
};
