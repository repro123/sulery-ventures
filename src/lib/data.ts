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
  { label: "computer solutions", image: ComputerSolutions },
  { label: "cctv & surveillance", image: CCTV },
  { label: "networking", image: Networking },
  { label: "access control", image: AccessControl },
  { label: "intercom systems", image: Intercom },
];
