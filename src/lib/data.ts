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
