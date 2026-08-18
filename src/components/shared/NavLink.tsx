import type { NavLink as NavLinkType } from "@/lib/types";

interface Props {
  link: NavLinkType;
  className?: string;
}

export default function NavLink({ link, className = "" }: Props) {
  return (
    <li className={className}>
      <a href={link.href}>{link.label}</a>
    </li>
  );
}
