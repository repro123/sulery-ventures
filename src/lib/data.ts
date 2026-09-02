import type { NavLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "contact", href: "/contact" },
];

export const professionalServices = [
  {
    heading: "Reliable Solutions",
    description:
      "Quality equipment and practical solutions built around your needs.",
  },
  {
    heading: "Professional Service",
    description: "Careful installation, configuration and troubleshooting.",
  },
  {
    heading: "Responsive Support",
    description: "Get direct assistance when you need it.",
  },
  {
    heading: "End-to-End Solutions",
    description:
      "From consultation and installation to repairs and maintenance.",
  },
];

export const technologicalSolutions = [
  {
    label: "homes",
    solutions: ["CCTV", "Intercom", "Wi-Fi", "Access Control"],
  },
  {
    label: "individuals",
    solutions: [
      "Computer Sales",
      "Conmputer Repairs",
      "Sales and repairs of accessories",
    ],
  },
  {
    label: "schools",
    solutions: ["Networking", "Surveillance", "Access Control", "IT Solutions"],
  },
  {
    label: "businesses",
    solutions: [
      "CCTV",
      "Networking",
      "Communication",
      "tTechnology Infrastructure",
    ],
  },
];

export const problemToSolution = [
  {
    title: "Tell us what you need",
    description: "Contact us by WhatsApp, phone or through email.",
  },
  {
    title: "We assess the requirement",
    description: "We understand the problem, site or project requirements.",
  },
  {
    title: "We recommend a solution",
    description: "We help you choose the right equipment and approach.",
  },
  {
    title: "We install, repair or set it up",
    description:
      "Our job doesn't stop at recommending the solution—we get it working.",
  },
];

export const contactResponseSteps = [
  {
    title: "We review",
    description: "Our technical team assesses your specific requirements.",
  },
  {
    title: "Consultation",
    description: "We contact you to discuss options and clarify details.",
  },
  {
    title: "Proposal & action",
    description: "You receive a detailed quote and timeline for execution.",
  },
];
