import { getDictionary } from '../dictionaries'

export default async function AboutPage({ params }) {
    const { locale } = await params
    const dict = await getDictionary(locale)

    return (
        <div className="min-h-screen pt-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {dict.navigation.about}
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">
                            {locale === 'bg' ? 'Нашата история' : 'Our Story'}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {locale === 'bg'
                                ? 'От 2007 година се специализираме в прецизната металообработка. С модерно оборудване и екип от професионалисти, ние сме надежден партньор за вашите проекти.'
                                : 'Since 2007, we specialize in precision metalworking. With modern equipment and a team of professionals, we are a reliable partner for your projects.'}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {locale === 'bg'
                                ? 'Нашата мисия е да предоставяме високо качество и иновативни решения в областта на металообработката.'
                                : 'Our mission is to provide high quality and innovative solutions in the field of metalworking.'}
                        </p>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-8 shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400">17+</div>
                                <div className="text-gray-400 mt-2">
                                    {locale === 'bg' ? 'Години опит' : 'Years Experience'}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400">500+</div>
                                <div className="text-gray-400 mt-2">
                                    {locale === 'bg' ? 'Проекта' : 'Projects'}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400">50+</div>
                                <div className="text-gray-400 mt-2">
                                    {locale === 'bg' ? 'Клиенти' : 'Clients'}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400">24/7</div>
                                <div className="text-gray-400 mt-2">
                                    {locale === 'bg' ? 'Поддръжка' : 'Support'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        {locale === 'bg' ? 'Нашите ценности' : 'Our Values'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-5xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {locale === 'bg' ? 'Прецизност' : 'Precision'}
                            </h3>
                            <p className="text-gray-400">
                                {locale === 'bg' ? 'Точност във всеки детайл' : 'Accuracy in every detail'}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {locale === 'bg' ? 'Скорост' : 'Speed'}
                            </h3>
                            <p className="text-gray-400">
                                {locale === 'bg' ? 'Бързо изпълнение' : 'Fast execution'}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">✨</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {locale === 'bg' ? 'Качество' : 'Quality'}
                            </h3>
                            <p className="text-gray-400">
                                {locale === 'bg' ? 'Гарантирано качество' : 'Guaranteed quality'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}