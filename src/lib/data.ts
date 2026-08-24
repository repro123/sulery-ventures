import type { NavLink } from "@/lib/types";

import AccessControl from "@assets/images/access-control.png";
import CCTV from "@assets/images/cctv-surveillance.png";
import ComputerSolutions from "@assets/images/computer-solutions.png";
import Intercom from "@assets/images/intercom.png";
import Networking from "@assets/images/networking.png";

export const navLinks: NavLink[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "contact", href: "/contact" },
];

export const services = [
  {
    label: "computer solutions",
    image: ComputerSolutions,
    cardText:
      "Hardware procurement, setup, maintenance, and IT support tailored for professional environments.",
  },
  {
    label: "CCTV and surveillance",
    image: CCTV,
    cardText:
      "High-definition IP camera systems with remote monitoring and secure cloud storage capabilities.",
  },
  {
    label: "networking",
    image: Networking,
    cardText:
      "Structured cabling, enterprise Wi-Fi deployment, and robust network infrastructure design.",
  },
  {
    label: "access control",
    image: AccessControl,
    cardText:
      "Biometric, card-based, and smart lock systems to secure premises and track entry logs.",
  },
  {
    label: "intercom systems",
    image: Intercom,
    cardText:
      "Crystal clear audio and video communication systems for offices and residential complexes.",
  },
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
