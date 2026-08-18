import type { NavLink as NavLinkType } from "@/lib/types";

interface Props {
  link: NavLinkType;
  className?: string;
  currentPath?: string;
  activeClass?: string;
}

export default function NavLink({
  link,
  className = "",
  currentPath = "",
  activeClass = "",
}: Props) {
  const isActive = activeClass !== "" && currentPath === link.href;
  const liClassName = [className, isActive ? activeClass : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={liClassName}>
      <a href={link.href}>{link.label}</a>
    </li>
  );
}
