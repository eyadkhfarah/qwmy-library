import './globals.css'
import Footer from './Footer'
import Navbar from './Navbar'

export default function RootLayout({
    children,
}) {
    return (
        <html lang="ar">
            <body>
                <Navbar />
                    <main className="main">{children}</main>
                <Footer />
            </body>
        </html>
    );
}