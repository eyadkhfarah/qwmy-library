import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";

import { FooterLinks } from "@lib/FooterLink"

export default function Footer() {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
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


            <ul className="flex gap-5 items-center">
                {FooterLinks.map((link) => (
                    <li key={link.id} className="font-medium">{link.title}</li>
                ))}
            </ul>
        </footer>
    )
}