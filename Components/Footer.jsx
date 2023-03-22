import { FooterLinks } from "@lib/FooterLink"

export default function Footer() {
    return (
        <footer>
            فورتر

            <ul className="flex gap-5 items-center">
                {FooterLinks.map((link) => (
                    <li key={link.id} className="font-medium">{link.title}</li>
                ))}
            </ul>
        </footer>
    )
}