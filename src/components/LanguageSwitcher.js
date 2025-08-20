// src/components/LanguageSwitcher.js
'use client'
import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher({ currentLocale }) {
    const pathname = usePathname()
    const router = useRouter()

    const switchLanguage = (newLocale) => {
        const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
        router.push(newPathname)
    }

    return (
        <div className="flex gap-2">
            <button
                onClick={() => switchLanguage('bg')}
                className={`px-3 py-1 rounded ${currentLocale === 'bg' ? 'bg-blue-600' : 'bg-gray-700'} text-white`}
            >
                BG
            </button>
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded ${currentLocale === 'en' ? 'bg-blue-600' : 'bg-gray-700'} text-white`}
            >
                EN
            </button>
        </div>
    )
}