import FooterLinks from "@lib/FooterLink"

export default function Footer() {
    return (
        <footer>
            فورتر
            
            <ul className="flex gap-5 items-center w-full">
                {FooterLinks.map((link) => (
                    <li key={link.id}>{link.title}</li>
                ))}
            </ul>
        </footer>
    )
}