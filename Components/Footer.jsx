import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";

import { FooterLinks } from "@lib/FooterLink"

export default function Footer() {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <footer>
            <Link href={"/"}>
                <a href={siteUrl}>
                    {currentTheme === "dark" ?
                        <Image src="/WhiteLogo.svg" alt="لوجو المكتبة القومية" aria-label="لوجو المكتبة القومية" width={200} height={90} />
                        :
                        <Image src="/DarkLogo.svg" alt="لوجو المكتبة القومية" aria-label="لوجو المكتبة القومية" width={200} height={90} />
                    }
                </a>
            </Link>


            <ul className="flex mt-4 gap-5 list-none p-0 w-full text-sm items-center">
                {FooterLinks.map((link) => (
                    <Link href={link.link}>
                        <li key={link.id} className="font-medium">
                            <a href={siteUrl + link.link} aria-label={link.title}
                            >
                                {link.title}
                            </a>
                        </li>
                    </Link>
                ))}
            </ul>

            <div className='text-gray-400 text-sm align-center px-11'>
                كل الحقوق محفوظة لدي <span>المكتبة القومية</span> لسنة {new Date().getFullYear()}
            </div>
        </footer>
    )
}