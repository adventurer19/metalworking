// src/components/Navigation.js
'use client'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation({ dict, locale }) {
    return (
        <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href={`/${locale}`} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            МеталТех
                        </Link>
                    </div>

                    <div className="flex items-center space-x-8">
                        <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition">
                            {dict.navigation.home}
                        </Link>
                        <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white transition">
                            {dict.navigation.about}
                        </Link>
                        <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition">
                            {dict.navigation.services}
                        </Link>
                        <Link href={`/${locale}/products`} className="text-gray-300 hover:text-white transition">
                            {dict.navigation.products}
                        </Link>
                        <Link href={`/${locale}/gallery`} className="text-gray-300 hover:text-white transition">
                            {dict.navigation.gallery}
                        </Link>
                        <Link href={`/${locale}/contacts`} className="text-gray-300 hover:text-white transition">
                            {dict.navigation.contacts}
                        </Link>

                        <LanguageSwitcher currentLocale={locale} />
                    </div>
                </div>
            </div>
        </nav>
    )
}