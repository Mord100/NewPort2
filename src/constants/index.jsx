import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
      { title: "Brand Guidelines", href: "/brand" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
