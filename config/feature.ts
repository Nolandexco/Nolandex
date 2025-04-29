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
      content: "Get a fully functional, modern website tailored to your business needs.",
      icon: FaGlobe,
    },
    {
      title: "Branding & Design",
      content: "Create a unique brand identity with logos, promotional designs, and visuals.",
      icon: FaPaintBrush,
    },
    {
      title: "Order & Payment Automation",
      content: "Streamline your business with automated order processing and secure payment systems.",
      icon: FaRobot,
    },
    {
      title: "Social Media Content",
      content: "Engage your audience with professionally crafted social media posts and visuals.",
      icon: FaPhotoVideo,
    },
    {
      title: "Marketing Strategies",
      content: "Boost your reach with data-driven marketing plans tailored to your goals.",
      icon: FaBullhorn,
    },
    {
      title: "Business Tools",
      content: "Access tools to manage and grow your business efficiently.",
      icon: FaTools,
    },
    {
      title: "Proven Results",
      content: "Our strategies have helped businesses grow with measurable success.",
      icon: FaCheckCircle,
    },
    {
      title: "Quick Setup",
      content: "Launch your online business in just a few working hours.",
      icon: FaClock,
    },
    {
      title: "50% Money-Back Guarantee",
      content: "If your business doesn’t grow in 30 days, get 50% of your money back.",
      icon: FaShieldAlt,
    },
  ],
  FEATURES_ID: [
    {
      title: "Website Profesional",
      content: "Dapatkan website modern yang dirancang sesuai kebutuhan bisnis Anda.",
      icon: FaGlobe,
    },
    {
      title: "Branding & Desain",
      content: "Ciptakan identitas merek unik dengan logo dan materi promosi.",
      icon: FaPaintBrush,
    },
    {
      title: "Otomasi Pesanan & Pembayaran",
      content: "Sederhanakan bisnis Anda dengan sistem otomasi pesanan dan pembayaran aman.",
      icon: FaRobot,
    },
    {
      title: "Konten Media Sosial",
      content: "Tarik perhatian audiens dengan konten media sosial yang dirancang profesional.",
      icon: FaPhotoVideo,
    },
    {
      title: "Strategi Pemasaran",
      content: "Tingkatkan jangkauan dengan strategi pemasaran berbasis data.",
      icon: FaBullhorn,
    },
    {
      title: "Alat Bisnis",
      content: "Akses alat untuk mengelola dan mengembangkan bisnis Anda dengan efisien.",
      icon: FaTools,
    },
    {
      title: "Hasil Terbukti",
      content: "Strategi kami telah membantu bisnis tumbuh dengan hasil nyata.",
      icon: FaCheckCircle,
    },
    {
      title: "Pengaturan Cepat",
      content: "Luncurkan bisnis online Anda dalam beberapa jam kerja.",
      icon: FaClock,
    },
    {
      title: "Jaminan Uang Kembali 50%",
      content: "Jika bisnis Anda tidak berkembang dalam 30 hari, dapatkan kembali 50% dana Anda.",
      icon: FaShieldAlt,
    },
  ],
};
