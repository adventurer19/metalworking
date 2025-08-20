'use client'
export default function Hero({ dict }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    {dict.hero.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                    {dict.hero.subtitle}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
                    {dict.hero.cta}
                </button>
            </div>
        </div>
    )
}