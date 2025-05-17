import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FooterLinks } from "@lib/FooterLink";
import { RiFacebookFill, RiTwitterXFill } from "react-icons/ri";

type SocialLink = {
  href: string;
  label: string;
  icon: JSX.Element;
};

const socialLinks: ReadonlyArray<SocialLink> = [
  {
    href: "https://www.facebook.com/maktabaqawmya",
    label: "صفحة المكتبة علي الفيسبوك",
    icon: <RiFacebookFill className="text-2xl" />,
  },
  {
    href: "https://x.com/maktabaqawmya",
    label: "صفحة المكتبة علي تويتر",
    icon: <RiTwitterXFill className="text-2xl" />,
  },
] as const;

const Footer = (): JSX.Element => {
  const { systemTheme, theme } = useTheme();

  const renderSocialLinks = () => (
    <ul className="list-none flex md:flex-col justify-between gap-4 md:gap-6 order-2 md:order-1">
      {socialLinks.map(({ href, label, icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-black dark:text-white
              hover:text-primary dark:hover:text-primary
              transition-all duration-300 ease-in-out"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderLogoAndNav = () => (
    <div className="grid gap-4 flex-1 order-1 md:order-2">
      <Link href="/" className="block max-w-[200px] mx-auto">
        <Image
          src="/DarkLogo.svg"
          alt="لوجو المكتبة القومية"
          aria-label="لوجو المكتبة القومية"
          width={200}
          height={90}
          className="dark:invert transition-all duration-300"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />
      </Link>

      <ul className="mt-4 flex justify-center gap-5 list-none p-0 w-full text-sm items-center">
        {FooterLinks.map((link) => (
          <li key={link.id} className="font-medium">
            <Link
              href={link.link}
              aria-label={link.title}
              className="text-black dark:text-white whitespace-nowrap
                  hover:text-primary dark:hover:text-primary
                  transition-all duration-300 ease-in-out"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderCopyright = () => (
    <div className="text-gray-400 text-[.7rem] text-center mt-8">
      كل الحقوق محفوظة لدي <span className="font-black">المكتبة القومية</span>{" "}
      لسنة {new Date().getFullYear()}
    </div>
  );

  const renderBuildBy = () => (
    <div className="text-gray-400 text-[.7rem] text-center mt-8">
      <span className="text-white text-sm">
        تم بناء هذا الموقع بواسطة{" "}
        <Link
          href="https://designs-by-eyad.vercel.app/"
          className="underline text-blue-500"
        >
          Designs By Eyad
        </Link>
        .
      </span>
    </div>
  );

  return (
    <footer className="bg-white dark:bg-dprimary">
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end">
        <div className="flex flex-col md:flex-row gap-6 md:gap-2 items-center md:items-end">
          {renderSocialLinks()}
          {renderLogoAndNav()}
        </div>
        {renderBuildBy()}
        {renderCopyright()}
      </div>
    </footer>
  );
};

export default Footer;
