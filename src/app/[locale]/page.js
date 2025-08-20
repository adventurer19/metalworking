// src/app/[locale]/page.js
import { getDictionary } from './dictionaries'

export default async function Home({ params }) {
    const dict = await getDictionary(params.locale)

    return (
        <div className="min-h-screen bg-slate-900 pt-20">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-white mb-8">
                    {dict?.hero?.title || 'Добре дошли'}
                </h1>
                <p className="text-gray-300">
                    {dict?.hero?.subtitle || 'Металообработка'}
                </p>
            </div>
        </div>
    )
}