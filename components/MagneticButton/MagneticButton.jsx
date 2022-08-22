import React, { useRef, useEffect } from "react";

export const MagneticButton = ({ children, className }) => {
  return (
    <a className={`btn ${className}`} href="#">
      {children}
    </a>
  );
};
