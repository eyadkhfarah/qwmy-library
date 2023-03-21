import './globals.css'
import Footer from './Footer'
import Navbar from './Header'
import Head from "./head"

export default function RootLayout({
    children,
}) {
    return (
        <html lang="ar">
            <Head />
            <body>
                <Navbar />
                    <main className="main">{children}</main>
                <Footer />
            </body>
        </html>
    );
}