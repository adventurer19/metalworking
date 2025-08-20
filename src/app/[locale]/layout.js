import { Inter } from 'next/font/google'
import '../globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary } from './dictionaries'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
    title: 'МеталТех България - Професионална металообработка',
    description: 'Качествена металообработка в България',
}

export default async function RootLayout({ children, params }) {
    const { locale } = await params // ← ДОБАВИ ТОВА
    const dict = await getDictionary(locale)

    return (
        <html lang={locale}>
        <body className={inter.className}>
        <Navigation dict={dict} locale={locale} />
        <main>{children}</main>
        <Footer dict={dict} />
        </body>
        </html>
    )
}