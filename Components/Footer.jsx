import FooterLinks from "@lib/FooterLink"

export default function Footer() {
    return (
        <footer>
            فورتر

            {FooterLinks.map((link) => (
                <ul key={link.id} className="flex gap-5 items-center w-full">
                    <li>{link.title}</li>
                </ul>
            ))}
        </footer>
    )
}