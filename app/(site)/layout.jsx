import './globals.css'
import Footer from './Footer'
import Navbar from './Header'
import '@/styles/globals.css'

export default function RootLayout({
    children,
}) {
    return (
        <html lang="ar">
            <head />
            <body>
                <Navbar />
                    <main className="main">{children}</main>
                <Footer />
            </body>
        </html>
    );
}