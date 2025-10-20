import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "@/components/Icons";
import { personalData } from "./personal";

export const socialLinks = [
  {
    name: "GitHub",
    Icon: GithubIcon,
    link: "https://github.com/OLADISEA",
  },
  {
    name: "X",
    Icon: XIcon,
    link: "https://x.com/Oladisea?t=tATn6vou1Pm5MrroOE0HNA&s=09",
  },
  {
    name: "Mail me",
    Icon: MailIcon,
    link: `mailto:${personalData.email}`,
  },
  {
    name: "LinkedIn",
    Icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/tosin-oladokun-692529232",
  },
];
