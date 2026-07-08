import type { SpringOptions } from "motion/react";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

const springValues: SpringOptions = {
  damping: 25,
  stiffness: 120,
  mass: 1.5,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "400px",
  containerWidth = "100%",
  imageHeight = "350px",
  imageWidth = "300px",
  scaleOnHover = 1.08,
  rotateAmplitude = 18,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = true,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Base 3D Rotations
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0, { damping: 20, stiffness: 150 });

  // Custom Dynamic Shadow Blur & Spread based on rotation tilt
  const shadowBlur = useTransform(scale, [1, scaleOnHover], [15, 35]);
  const shadowOpacity = useTransform(scale, [1, scaleOnHover], [0.15, 0.3]);

  // Dynamic light source/glow tracking
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowBg = useTransform([glowX, glowY, opacity], (latestValues) => {
    const [gx, gy, _opacity] = latestValues as [number, number, number];
    return `radial-gradient(circle 180px at ${gx}px ${gy}px, rgba(255, 255, 255, 0.25), transparent 80%)`;
  });

  const boxShadow = useTransform(
    [shadowBlur, shadowOpacity],
    (latestValues) => {
      const [blur, op] = latestValues as [number, number];
      return `0px ${blur}px ${blur * 1.2}px rgba(0, 0, 0, ${op}), 0px 4px 10px rgba(0,0,0,0.1)`;
    },
  );

  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    // Tooltip position (offset slightly to prevent cursor flashing)
    x.set(e.clientX - rect.left + 12);
    y.set(e.clientY - rect.top + 12);

    // Glow effect coordinates mapped relative to the inner image card dimensions
    const cardOffsetX =
      e.clientX - rect.left - (rect.width - parseInt(imageWidth as string)) / 2;
    const cardOffsetY =
      e.clientY -
      rect.top -
      (rect.height - parseInt(imageHeight as string)) / 2;
    glowX.set(cardOffsetX);
    glowY.set(cardOffsetY);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:1200px] flex flex-col items-center justify-center overflow-visible selection:bg-transparent"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-2 text-center text-xs block sm:hidden text-neutral-400">
          Touch to test the tilt interaction.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d] rounded-[20px] transition-shadow duration-300 group"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
          boxShadow,
        }}
      >
        {/* Border Highlighting Ring */}
        <div className="absolute inset-0 rounded-[20px] border border-white/10 pointer-events-none z-[4] mix-blend-overlay" />

        {/* Outer Base Image */}
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 object-cover rounded-[20px] will-change-transform [transform:translateZ(0px)]"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {/* Dynamic Light Foil reflection overlay */}
        <motion.div
          className="absolute inset-0 rounded-[20px] z-[2] pointer-events-none mix-blend-overlay will-change-transform [transform:translateZ(1px)]"
          style={{ background: glowBg }}
        />

        {/* 3D Floating Overlay Content */}
        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute inset-0 z-[3] flex items-center justify-center will-change-transform [transform:translateZ(50px)_scale(0.95)] drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {/* Floating Cursor Tooltip */}
      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-lg bg-neutral-900/90 backdrop-blur-md px-3 py-1.5 text-xs text-neutral-100 border border-neutral-800 shadow-xl opacity-0 z-[10] hidden sm:block font-medium"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
