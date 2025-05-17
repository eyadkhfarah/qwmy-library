import Link from "next/link";
import { NavLinks } from "@lib/NavList";
import { NavListProps } from "@/types";
import { RiCloseLine } from "react-icons/ri";

const NavList = ({ btn, setBtn, className }: NavListProps): JSX.Element => {
  return (
    <div
      className={`${btn ? "navList active" : "navList"} ${className}`}
    >
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setBtn(!btn)}
          className="p-2 rounded-lg
            text-black dark:text-white
            hover:bg-gray-100 dark:hover:bg-dlight
            transition-all duration-300 ease-in-out"
          aria-label="Close menu"
        >
          <RiCloseLine className="text-2xl" />
        </button>
      </div>

      <ul className="list-none p-0">
        {NavLinks.map((link) => (
          <li
            className="navLink"
            key={link.id}
            onClick={() => setBtn(!btn)}
          >
            <Link 
              href={link.link} 
              aria-label={link.title}
              className="w-full text-black dark:text-white"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList; 