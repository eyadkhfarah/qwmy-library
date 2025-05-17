import Link from 'next/link';
import Image from "next/image";
import { useTheme } from "next-themes";

import { FooterLinks } from "@lib/FooterLink"
import { RiFacebookFill, RiInstagramLine, RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <footer className="max-w-[1920px] mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                <ul className="list-none flex md:flex-col justify-between gap-4 md:gap-6 order-2 md:order-1">
                    <li><a href="https://www.facebook.com/maktabaqawmya" target='_blank' rel="noopener noreferrer" aria-label="صفحة المكتبة علي الفيسبوك" className="text-black dark:text-white hover:opacity-80 transition-opacity"><RiFacebookFill className="text-2xl" /></a></li>
                    {/* <li><a href="https://instagram.com/" target='_blank' aria-label="صفحة المكتبة علي انستاجرام" className="text-black dark:text-white"><RiInstagramLine className="text-2xl" /></a></li> */}
                    <li><a href="https://x.com/maktabaqawmya" target='_blank' rel="noopener noreferrer" aria-label="صفحة المكتبة علي تويتر" className="text-black dark:text-white hover:opacity-80 transition-opacity"><RiTwitterXFill className="text-2xl" /></a></li>
                </ul>
                <div className="grid gap-4 flex-1 order-1 md:order-2">
                    <Link href={"/"} className="block max-w-[200px] mx-auto">
                        <Image
                            src="/DarkLogo.svg"
                            alt="لوجو المكتبة القومية"
                            aria-label="لوجو المكتبة القومية"
                            width={200}
                            height={90}
                            className="dark:invert transition-all duration-200"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </Link>

                    <ul className="flex flex-wrap justify-center mt-4 gap-5 list-none p-0 w-full text-sm items-center">
                        {FooterLinks.map((link) => (
                            <li key={link.id} className="font-medium">
                                <Link href={link.link} aria-label={link.title} className="hover:opacity-80 transition-opacity">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='text-gray-400 text-[.7rem] text-center mt-8'>
                كل الحقوق محفوظة لدي <span className="font-black">المكتبة القومية</span> لسنة {new Date().getFullYear()}
            </div>
        </footer>
    );
}