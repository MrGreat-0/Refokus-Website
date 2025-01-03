import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(1);

  // console.log(mousePosition);

  // const mouseMove = (e) => {
  //   requestAnimationFrame(() => {
  //     console.log(e);
  //     console.log("animation=", e.clientX, e.clientY);
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   });
  // };

  // I removed requestAnimationFrame due to animation lag with CSS transitions.
  // Since JavaScript updates the position instantly, while transitions introduce a delay,
  // it's more efficient to use CSS transform: translate3d, which is GPU-accelerated for smooth movement.
  // Using window events ensures no performance issues, eliminating the need for requestAnimationFrame.

  let xprev = 0;
  let yprev = 0;
  let timeout;

  const mouseMove = (e) => {
    clearTimeout(timeout);

    // console.log(e);
    // console.log("mouse=", e.clientX, e.clientY);

    setMousePosition({
      x: e.clientX - 8,
      y: e.clientY - 8,
    });

    // Calculate scale based on mouse movement
    const xscale = Math.min(Math.max(0.8, e.clientX - xprev), 1.2);
    const yscale = Math.min(Math.max(0.8, e.clientY - yprev), 1.2);

    setScale({ x: xscale, y: yscale });

    // Update previous mouse position
    xprev = e.clientX;
    yprev = e.clientY;

    // Reset cursor scale after a short delay
    timeout = setTimeout(() => {
      setScale({ x: 1, y: 1 });
    }, 100);
  };

  const handleMouseLeave = (e) => {
    // console.log(e);
    setOpacity(0);
  };

  const handleMouseEnter = (e) => {
    // console.log(e);
    setOpacity(1);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseEnter);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px,0) scale(${scale.x}, ${scale.y})`,
        transition: "cubic-bezier(0.19, 1, 0.22, 1) 1s",
        opacity: opacity,
      }}
      className="h-3 w-3 bg-white mix-blend-difference rounded-full fixed z-50 pointer-events-none"
    />
  );
};

export default Cursor;
