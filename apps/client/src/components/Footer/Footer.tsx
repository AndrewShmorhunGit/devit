import { Box, Divider, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import { FlexBox } from "@/styles/styled/boxes";

const socialLinks = [
  {
    href: "https://github.com/AndrewShmorhunGit/devit",
    icon: <GitHubIcon />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/andrew-shmorhun-850a76209/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
  {
    href: "https://t.me/AndrewShmorhun",
    icon: <TelegramIcon />,
    label: "Telegram",
  },
  {
    href: "https://www.shmorhun.com/",
    icon: <LanguageIcon />,
    label: "Website",
  },
];

export function Footer() {
  return (
    <Box>
      <Divider sx={{ mb: 2 }} />
      <FlexBox sx={{ gap: 2 }}>
        {socialLinks.map((link) => (
          <IconButton
            key={link.label}
            component="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "text" }}
            aria-label={link.label}
          >
            {link.icon}
          </IconButton>
        ))}
      </FlexBox>
    </Box>
  );
}
