import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { RiSearch2Line, RiMenu3Line } from "react-icons/ri";
import { useState, useCallback } from "react";
import NavList from "./NavList";
import { NavLinks } from "@lib/NavList";
import SearchList from "./SearchList";
import DesktopSearch from "./DesktopSearch";

// Types
type IconProps = {
  className?: string;
};

type AnnouncementBannerProps = {
  className?: string;
};

type NavbarProps = {
  isHomePage: boolean;
};

// Icon Components
const SearchIcon = ({ className }: IconProps): JSX.Element => (
  <span className={className}>
    <RiSearch2Line />
  </span>
);

const MenuIcon = ({ className }: IconProps): JSX.Element => (
  <span className={className}>
    <RiMenu3Line />
  </span>
);

// Announcement Banner Component
const AnnouncementBanner = ({
  className,
}: AnnouncementBannerProps): JSX.Element => (
  <div className="w-full bg-white dark:bg-dprimary">
    <div className="max-w-7xl mx-auto">
      <div
        className={`md:px-36 p-3 
          flex justify-between items-center gap-6 
          text-sm md:text-base font-medium
          ${className}`}
      >
        <span className="text-black dark:text-white">
          الموقع قيد التطوير، يهمنا أراكم واقتراحاتكم ودعمكم لنا بكتابة كل ما
          تريده من اقتراحات وشكاوي.
        </span>
        <a
          href="https://forms.gle/NBTUQcovdLXAJXYn7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اقتراحات المكتبة القومية"
          className="download text-sm h-fit md:w-44 w-fit whitespace-nowrap 
            hover:opacity-90 
            transition-all duration-300 ease-in-out"
        >
          اقترح هنا
        </a>
      </div>
    </div>
  </div>
);

// Navigation Links Component
const NavigationLinks = (): JSX.Element => (
  <ul className="hidden md:flex items-center gap-6 list-none shrink-0">
    {NavLinks.map((link) => (
      <li key={link.id} className="p-0">
        <Link
          href={link.link}
          aria-label={link.title}
          className="text-sm font-medium whitespace-nowrap
            text-black dark:text-white
            hover:text-primary dark:hover:text-primary
            transition-all duration-300 ease-in-out"
        >
          {link.title}
        </Link>
      </li>
    ))}
  </ul>
);

// Main Navbar Component
const Navbar = (): JSX.Element => {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Hooks
  const router = useRouter();

  // Memoized callbacks
  const toggleMenu = useCallback(
    (): void => setIsMenuOpen((prev) => !prev),
    []
  );
  const toggleSearch = useCallback(
    (): void => setIsSearchOpen((prev) => !prev),
    []
  );

  const isHomePage = router.pathname === "/";

  return (
    <>
      <AnnouncementBanner />
      <nav className={`${!isHomePage ? "shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg
              text-black dark:text-white
              hover:bg-gray-100 dark:hover:bg-dlight
              transition-all text-2xl duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>

          <div className="flex items-center gap-5 shrink-0">
            {!isHomePage && (
              <Link href="/" className="shrink-0">
                <Image
                  src="/DarkLogo.svg"
                  alt="لوجو المكتبة القومية"
                  width={120}
                  height={47}
                  className="dark:invert transition-all duration-300"
                  priority
                />
              </Link>
            )}

            <DesktopSearch />
          </div>

          <NavigationLinks />
          
          <button
            onClick={toggleSearch}
            className="md:hidden p-2 rounded-lg
              text-black dark:text-white
              hover:bg-gray-100 text-2xl dark:hover:bg-dlight
              transition-all duration-300 ease-in-out"
            aria-label="Toggle search"
          >
            <SearchIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <SearchList
        searchOpen={isSearchOpen}
        setSearchOpen={setIsSearchOpen}
        className="md:hidden"
      />
      <NavList btn={isMenuOpen} setBtn={setIsMenuOpen} className="md:hidden" />
    </>
  );
};

export default Navbar;
