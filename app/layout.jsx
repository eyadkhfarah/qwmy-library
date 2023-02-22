import Layout from '../Component/Layout'
import '../styles/globals.css'

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}