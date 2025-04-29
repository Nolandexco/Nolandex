import { IconType } from "react-icons";
import {
  FaGlobe,
  FaPaintBrush,
  FaRobot,
  FaPhotoVideo,
  FaBullhorn,
  FaTools,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

interface Feature {
  title: string;
  content: string;
  icon: IconType | string;
}

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: Feature[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN: [
    {
      title: "Professional Website",
      content: "Launch a modern, tailored website for your business.",
      icon: FaGlobe,
    },
    {
      title: "Branding & Design",
      content: "Build a unique brand with logos and visuals.",
      icon: FaPaintBrush,
    },
    {
      title: "Order & Payment Automation",
      content: "Automate orders and payments for efficiency.",
      icon: FaRobot,
    },
    {
      title: "Social Media Content",
      content: "Create engaging posts and visuals for your audience.",
      icon: FaPhotoVideo,
    },
    {
      title: "Marketing Strategies",
      content: "Grow with data-driven marketing plans.",
      icon: FaBullhorn,
    },
    {
      title: "Business Tools",
      content: "Use tools to manage and scale your business.",
      icon: FaTools,
    },
    {
      title: "Proven Results",
      content: "Achieve measurable success with our strategies.",
      icon: FaCheckCircle,
    },
    {
      title: "Quick Setup",
      content: "Get online in hours, not days.",
      icon: FaClock,
    },
    {
      title: "50% Money-Back Guarantee",
      content: "50% refund if no growth in 30 days.",
      icon: FaShieldAlt,
    },
    {
      title: "24/7 Customer Support",
      content: "Get help anytime with our dedicated support.",
      icon: FaHeadset,
    },
  ],
  FEATURES_ID: [
    {
      title: "Website Profesional",
      content: "Luncurkan website modern untuk bisnis Anda.",
      icon: FaGlobe,
    },
    {
      title: "Branding & Desain",
      content: "Ciptakan merek unik dengan logo dan visual.",
      icon: FaPaintBrush,
    },
    {
      title: "Otomasi Pesanan & Pembayaran",
      content: "Otomasi pesanan dan pembayaran untuk efisiensi.",
      icon: FaRobot,
    },
    {
      title: "Konten Media Sosial",
      content: "Buat konten menarik untuk audiens Anda.",
      icon: FaPhotoVideo,
    },
    {
      title: "Strategi Pemasaran",
      content: "Kembangkan bisnis dengan strategi berbasis data.",
      icon: FaBullhorn,
    },
    {
      title: "Alat Bisnis",
      content: "Gunakan alat untuk kelola dan kembangkan bisnis.",
      icon: FaTools,
    },
    {
      title: "Hasil Terbukti",
      content: "Raih kesuksesan nyata dengan strategi kami.",
      icon: FaCheckCircle,
    },
    {
      title: "Pengaturan Cepat",
      content: "Online dalam hitungan jam, bukan hari.",
      icon: FaClock,
    },
    {
      title: "Jaminan Uang Kembali 50%",
      content: "50% dana kembali jika tidak berkembang dalam 30 hari.",
      icon: FaShieldAlt,
    },
    {
      title: "Dukungan Pelanggan 24/7",
      content: "Dapatkan bantuan kapan saja dari tim kami.",
      icon: FaHeadset,
    },
  ],
};
