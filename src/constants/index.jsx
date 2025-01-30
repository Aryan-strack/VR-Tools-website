import { Code , Cloud ,BarChart , ShieldCheck,Users, Database } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "Process", href: "process" },
  { label: "Plans", href: "plans" },
  { label: "Reviews", href: "reviews" },
];


export const testimonials = [
  {
    user: "Ali Khan",
    company: "TechNova Solutions",
    image: user1,
    text: "Their expertise and dedication truly set them apart. We achieved incredible results in record time!",
  },
  {
    user: "Sara Ahmed",
    company: "NextGen Innovations",
    image: user2,
    text: "The team's professionalism and problem-solving skills were beyond our expectations. Highly recommended!",
  },
  {
    user: "Omar Farooq",
    company: "Skyline Technologies",
    image: user3,
    text: "Amazing experience! The seamless workflow and innovative approach made our project a huge success.",
  },
  {
    user: "Zara Malik",
    company: "Pioneer Tech",
    image: user4,
    text: "Outstanding service! The team's attention to detail and creativity were top-notch. Will work with them again!",
  },
  {
    user: "Bilal Rehman",
    company: "VisionSoft",
    image: user5,
    text: "The dedication and expertise displayed were remarkable. Highly satisfied with the final outcome!",
  },
  {
    user: "Fatima Javed",
    company: "Synergy Digital",
    image: user6,
    text: "Exceeded our expectations! Their innovative solutions and commitment made all the difference.",
  },
];

export const features = [
  {
    icon: <Code />,
    text: "AI-Powered Development",
    description: "Enhance efficiency with AI-driven coding assistance and automation tools.",
  },
  {
    icon: <Cloud />,
    text: "Cloud Integration",
    description: "Seamlessly deploy and manage applications on cloud platforms with ease.",
  },
  {
    icon: <ShieldCheck />,
    text: "Advanced Security",
    description: "Built-in security features to safeguard your applications and data from threats.",
  },
  {
    icon: <BarChart />,
    text: "Real-Time Analytics",
    description: "Gain insights into user interactions and system performance in real-time.",
  },
  {
    icon: <Users />,
    text: "Team Collaboration",
    description: "Collaborate effectively with your team using integrated communication tools.",
  },
  {
    icon: <Database />,
    text: "Scalable Infrastructure",
    description: "Ensure seamless scalability and performance optimization for growing applications.",
  },
];

export const checklistItems = [
  {
    title: "Simplified Code Review",
    description: "Enhance productivity with automated and streamlined code review processes.",
  },
  {
    title: "Intelligent Debugging",
    description: "Identify and resolve issues faster with AI-powered debugging tools.",
  },
  {
    title: "Automated Workflows",
    description: "Optimize repetitive tasks with smart automation and workflow integration.",
  },
  {
    title: "Seamless Deployment",
    description: "Deploy applications efficiently with a hassle-free and continuous integration system.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "$0",
    features: [
      "Basic Support",
      "5 GB Cloud Storage",
      "Community Access",
      "Limited API Calls",
    ],
  },
  {
    title: "Professional",
    price: "$25",
    features: [
      "Priority Support",
      "50 GB Cloud Storage",
      "Advanced Analytics",
      "Unlimited API Calls",
    ],
  },
  {
    title: "Enterprise",
    price: "$100",
    features: [
      "Dedicated Account Manager",
      "Unlimited Storage",
      "Custom Integrations",
      "24/7 Support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Quick Start Guide" },
  { href: "#", text: "API Documentation" },
  { href: "#", text: "Video Tutorials" },
  { href: "#", text: "Developer Blog" },
  { href: "#", text: "Support Center" },
];

export const platformLinks = [
  { href: "#", text: "Core Features" },
  { href: "#", text: "Device Compatibility" },
  { href: "#", text: "Technical Specifications" },
  { href: "#", text: "Software Downloads" },
  { href: "#", text: "Latest Updates" },
];

export const communityLinks = [
  { href: "#", text: "Upcoming Webinars" },
  { href: "#", text: "Online Courses" },
  { href: "#", text: "Industry Conferences" },
  { href: "#", text: "Developer Meetups" },
  { href: "#", text: "Job Board" },
];
