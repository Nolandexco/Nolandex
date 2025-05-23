import { SiteConfig } from "@/types/siteConfig";
import { BsInstagram, BsTiktok, BsWechat } from "react-icons/bs"; // Replaced BsGithub, BsTwitterX
import { MdEmail } from "react-icons/md";
import { SiJuejin } from "react-icons/si"; // Removed SiBuymeacoffee

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate'

const baseSiteConfig = {
  name: "Landing page boilerplate",
  description:
    "A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.",
  url: "https://landingpage.weijunext.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["landing page boilerplate", "landing page template", "awesome landing page", "next.js landing page"],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
      twitter: 'https://www.tiktok.com/@nolandexco?_t=ZS-8vw3CSiXkAi&_r=1', // Updated to TikTok
    }
  ],
  creator: '@weijunext',
  openSourceURL: 'https://github.com/weijunext/landing-page-boilerplate',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: 'https://www.instagram.com/nolandexco?igsh=NHBqczF1a2dvbXA5', icon: BsInstagram }, // Changed to Instagram
    { name: 'tiktok', href: "https://www.tiktok.com/@nolandexco?_t=ZS-8vw3CSiXkAi&_r=1", icon: BsTiktok }, // Changed to TikTok
    { name: 'email', href: "mailto:nolandexco@gmail.com", icon: MdEmail }, // Changed to email
  ],
  footerLinks: [
    { name: 'email', href: "mailto:nolandexco@gmail.com", icon: MdEmail }, // Updated to new email
    { name: 'tiktok', href: "https://www.tiktok.com/@nolandexco?_t=ZS-8vw3CSiXkAi&_r=1", icon: BsTiktok }, // Changed to TikTok
    { name: 'instagram', href: "https://www.instagram.com/nolandexco?igsh=NHBqczF1a2dvbXA5", icon: BsInstagram }, // Changed to Instagram
    { name: 'email', href: "mailto:nolandexco@gmail.com", icon: MdEmail }, // Changed to email
    { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    { name: 'weChat', href: "https://weijunext.com/make-a-friend", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://phcopilot.ai/', name: 'Product Hunt Copilot' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://nextjscn.org/', name: 'Next.js 中文文档' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
