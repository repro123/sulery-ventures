import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import NavLink from "@components/shared/NavLink";

interface Props {
  navClass?: string;
  ulClass?: string;
  liClass?: string;
  ariaLabel?: string;
  activeClass?: string;
}

export default function Navigation({
  navClass = "",
  ulClass = "",
  liClass = "",
  ariaLabel = "",
  activeClass = "",
}: Props) {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav aria-label={ariaLabel} className={navClass}>
      <ul className={ulClass}>
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            link={link}
            className={liClass}
            currentPath={currentPath}
            activeClass={activeClass}
          />
        ))}
      </ul>
    </nav>
  );
}
