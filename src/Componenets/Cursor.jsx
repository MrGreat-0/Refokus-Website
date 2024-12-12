import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [opacity, setOpacity] = useState(0);

  // console.log(mousePosition);

  useEffect(() => {
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

    const mouseMove = (e) => {
      // console.log(e);
      // console.log("mouse=", e.clientX, e.clientY);
      setMousePosition({
        x: e.clientX - 10,
        y: e.clientY - 10,
      });
    };

    const handleMouseLeave = (e) => {
      // console.log(e);
      setOpacity(0);
    };

    const handleMouseEnter = (e) => {
      // console.log(e);
      setOpacity(1);
    };

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
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px,0)`,
        transition: "cubic-bezier(0.19, 1, 0.22, 1) 1s",
        opacity: opacity,
      }}
      className="h-5 w-5 bg-white mix-blend-difference rounded-full fixed z-50 pointer-events-none"
    />
  );
};

export default Cursor;
