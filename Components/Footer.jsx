import Link from 'next/link';
import Image from "next/image";
import { useTheme } from "next-themes";

import { FooterLinks } from "@lib/FooterLink"
import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";

export default function Footer() {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <footer>
            <div className="flex gap-2">
                <ul className="list-none flex flex-col justify-between px-5">
                    <li><a href="https://www.facebook.com/maktabaqawmya" target='_blank' aria-label="صفحة المكتبة علي الفيسبوك" className="text-black dark:text-white"><RiFacebookFill className="text-2xl" /></a></li>
                    {/* <li><a href="https://instagram.com/" target='_blank' aria-label="صفحة المكتبة علي انستاجرام" className="text-black dark:text-white"><RiInstagramLine className="text-2xl" /></a></li> */}
                    <li><a href="https://twitter.com/maktabaqawmya" target='_blank' aria-label="صفحة المكتبة علي تويتر" className="text-black dark:text-white"><RiTwitterFill className="text-2xl" /></a></li>
                </ul>
                <div className="grid gap-4">
                    <Link href={"/"}>

                        {currentTheme === "dark" ?
                            <Image
                                src="/WhiteLogo.svg"
                                alt="لوجو المكتبة القومية"
                                aria-label="لوجو المكتبة القومية"
                                width={200}
                                height={90}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                            :
                            <Image
                                src="/DarkLogo.svg"
                                alt="لوجو المكتبة القومية"
                                aria-label="لوجو المكتبة القومية"
                                width={200}
                                height={90}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        }

                    </Link>


                    <ul className="flex mt-4 gap-5 list-none p-0 w-full text-sm items-center">
                        {FooterLinks.map((link) => (
                            <li key={link.id} className="font-medium">
                                <Link href={link.link} aria-label={link.title}>

                                    {link.title}

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='text-gray-400 text-[.7rem] text-center md:p-0 py-14'>
                كل الحقوق محفوظة لدي <span className="font-black">المكتبة القومية</span> لسنة {new Date().getFullYear()}
            </div>
        </footer>
    );
}