import { RiCloseLine } from "react-icons/ri";
import { NavLinks } from "@lib/NavList";

import Link from "next/link";

export default function NavList({ btn, setBtn }) {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

  return (
    <>
      <div className={`navList ${btn ? `right-0` : `right-[-1000px]`}`}>
        <div className="flex justify-between items-center">
          <RiCloseLine
            className="dark:text-white text-xl p-3 w-[3em] h-[3em] mb-8 transition-all duration-300 cursor-pointer hover:bg-white hover:text-primary"
            onClick={() => setBtn(!btn)}
          />
        </div>

        <ul className="px-0 list-none">
          {NavLinks.map((link) => (

            <li
              className="navLink"
              key={link.id}
              onClick={() => setBtn(!btn)}
            >
              <Link href={link.link} aria-label={link.title}>

                {link.title}

              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}