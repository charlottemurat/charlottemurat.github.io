import { useEffect, useState, useRef } from "react";

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once, the first time it scrolls into view
        if (entry.isIntersecting && !hasBeenInView) {
          setHasBeenInView(true);
        }
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold, hasBeenInView]);

  return [ref, hasBeenInView];
};

export default useInView;
