import { forwardRef } from "react";
import "./Card.css";

const Card = forwardRef(({ children, className = "", hover = true, ...props }, ref) => {
  const handleMouseEnter = (e) => {
    if (!hover) return;
    e.currentTarget.style.transform = "translateY(-8px)";
  };

  const handleMouseLeave = (e) => {
    if (!hover) return;
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div
      ref={ref}
      className={`card ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
