import { Box, Divider } from "@mui/material";
import { TechStackSection } from "./TechStack/TechStackSection";
import { HeroSection } from "./Hero/HeroSection";
import { FullScreenContainer } from "./LandingStyled";
import { FeaturesSection } from "./Features/FeaturesSection";
import { useScrollManager } from "@/hooks/useScrollManager";

export default function LandingPage() {
  useScrollManager();
  return (
    <FullScreenContainer>
      <Box>
        <HeroSection />
        <Divider />
        <TechStackSection />
        <FeaturesSection />
      </Box>
    </FullScreenContainer>
  );
}
