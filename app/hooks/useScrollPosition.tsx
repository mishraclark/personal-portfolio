import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY); // or window.pageYOffset
    };

    // Set initial position
    updatePosition();

    // Add scroll event listener
    window.addEventListener("scroll", updatePosition);

    // Cleanup
    return () => window.removeEventListener("scroll", updatePosition);
  }, []); // Empty dependency array = runs once on mount

  return scrollPosition;
}
