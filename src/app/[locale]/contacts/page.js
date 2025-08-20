import { getDictionary } from '../dictionaries'

export default async function ContactsPage({ params }) {
    const dict = await getDictionary(params.locale)

    return (
        <div className="min-h-screen pt-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {dict.navigation.contacts}
                </h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-slate-800 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            {params.locale === 'bg' ? 'Свържете се с нас' : 'Contact Us'}
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl">📍</span>
                                <div>
                                    <p className="text-gray-400">{params.locale === 'bg' ? 'Адрес:' : 'Address:'}</p>
                                    <p className="text-white">бул. Хемус 23, ет. 7, Габрово</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <span className="text-3xl">📞</span>
                                <div>
                                    <p className="text-gray-400">{params.locale === 'bg' ? 'Телефон:' : 'Phone:'}</p>
                                    <p className="text-white">+359 899 125 775</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <span className="text-3xl">✉️</span>
                                <div>
                                    <p className="text-gray-400">{params.locale === 'bg' ? 'Имейл:' : 'Email:'}</p>
                                    <p className="text-white">contact@metaltech.bg</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <span className="text-3xl">🕐</span>
                                <div>
                                    <p className="text-gray-400">{params.locale === 'bg' ? 'Работно време:' : 'Working Hours:'}</p>
                                    <p className="text-white">
                                        {params.locale === 'bg' ? 'Понеделник - Петък: 8:00 - 17:00' : 'Monday - Friday: 8:00 - 17:00'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            {params.locale === 'bg' ? 'Изпратете запитване' : 'Send Inquiry'}
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-400 mb-2">
                                    {params.locale === 'bg' ? 'Име' : 'Name'}
                                </label>
                                <input type="text" className="w-full bg-slate-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2">
                                    {params.locale === 'bg' ? 'Имейл' : 'Email'}
                                </label>
                                <input type="email" className="w-full bg-slate-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2">
                                    {params.locale === 'bg' ? 'Телефон' : 'Phone'}
                                </label>
                                <input type="tel" className="w-full bg-slate-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2">
                                    {params.locale === 'bg' ? 'Съобщение' : 'Message'}
                                </label>
                                <textarea rows="4" className="w-full bg-slate-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 rounded hover:from-blue-700 hover:to-cyan-700 transition">
                                {params.locale === 'bg' ? 'Изпрати' : 'Send'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 bg-slate-800 rounded-lg p-4">
                    <div className="aspect-video bg-slate-700 rounded flex items-center justify-center">
                        <p className="text-gray-400">
                            {params.locale === 'bg' ? '🗺️ Тук може да сложиш Google Maps' : '🗺️ Google Maps can go here'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}