// React
import { useEffect, useRef } from "react";

export function InfiniteScroll({ fetchMore }) {
  const containerRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchMore();
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [fetchMore]);

  return <div ref={containerRef} style={{ height: "1px" }} />;
}
