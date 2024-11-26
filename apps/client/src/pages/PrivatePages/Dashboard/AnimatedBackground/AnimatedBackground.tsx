import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

interface AnimatedBackgroundProps {
  isLoading: boolean;
}

const BackgroundContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 250px;
  height: 250px;
  background: ${(props) =>
    `radial-gradient(circle, ${props.$color} 0%, transparent 70%)`};
  opacity: 0.6;
`;

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  isLoading,
}) => {
  const theme = useTheme();

  return (
    <BackgroundContainer sx={{ zIndex: 0 }}>
      {/* Верхний плавающий шар */}
      <FloatingElement
        $color={theme.palette.primary.light}
        style={{ left: "-150px", top: "20%" }}
        animate={{
          y: ["0%", "100%", "0%"],
          scale: isLoading ? [1, 1.3, 1] : [1, 1.2, 1],
          borderRadius: ["50%", "30%", "50%"],
        }}
        transition={{
          duration: isLoading ? 4 : 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Нижний плавающий шар */}
      <FloatingElement
        $color={theme.palette.secondary.light}
        style={{ right: "-150px", top: "60%" }}
        animate={{
          y: ["0%", "-100%", "0%"],
          scale: isLoading ? [1, 1.3, 1] : [1, 1.2, 1],
          borderRadius: ["50%", "30%", "50%"],
        }}
        transition={{
          duration: isLoading ? 5 : 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {isLoading && (
        <>
          <FloatingElement
            $color={theme.palette.primary.main}
            style={{
              left: "50%",
              bottom: "-150px",
              transform: "translateX(-50%)",
            }}
            animate={{
              y: ["50%", "-500%"],

              x: ["-50vw", `50vw`],
              scale: [0.6, 1, 0.6],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <FloatingElement
            $color={theme.palette.primary.main}
            style={{
              left: "50%",
              bottom: "-150px",
              transform: "translateX(-50%)",
            }}
            animate={{
              y: ["50%", "-500%"],

              x: ["-50vw", `50vw`],
              scale: [0.6, 1, 0.6],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <FloatingElement
            $color={theme.palette.secondary.main}
            style={{
              left: "50%",
              bottom: "-150px",
              transform: "translateX(-50%)",
            }}
            animate={{
              y: ["-500%", "50%"],

              x: ["-50vw", `-50vw`],
              scale: [0.6, 1, 0.6],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <FloatingElement
            $color={theme.palette.secondary.main}
            style={{
              left: "50%",
              bottom: "-150px",
              transform: "translateX(-50%)",
            }}
            animate={{
              y: ["-500%", "50%"],

              x: ["50vw", ` 50vw`],
              scale: [0.6, 1, 0.6],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </BackgroundContainer>
  );
};
