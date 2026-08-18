import { navLinks } from "@/lib/data";
import NavLink from "@components/shared/NavLink";

interface Props {
  navClass?: string;
  ulClass?: string;
  liClass?: string;
  ariaLabel?: string;
}

export default function Navigation({
  navClass = "",
  ulClass = "",
  liClass = "",
  ariaLabel = "",
}: Props) {
  return (
    <nav aria-label={ariaLabel} className={navClass}>
      <ul className={ulClass}>
        {navLinks.map((link) => (
          <NavLink key={link.href} link={link} className={liClass} />
        ))}
      </ul>
    </nav>
  );
}
