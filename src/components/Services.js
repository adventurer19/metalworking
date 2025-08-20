'use client'
export default function Services({ dict }) {
    return (
        <div className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    {dict.services.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
                        <h3 className="text-xl font-semibold text-white mb-2">{dict.services.cnc}</h3>
                        <p className="text-gray-300">Прецизна CNC обработка</p>
                    </div>
                    <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
                        <h3 className="text-xl font-semibold text-white mb-2">{dict.services.cutting}</h3>
                        <p className="text-gray-300">Професионално рязане</p>
                    </div>
                    <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
                        <h3 className="text-xl font-semibold text-white mb-2">{dict.services.welding}</h3>
                        <p className="text-gray-300">Качествено заваряване</p>
                    </div>
                    <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
                        <h3 className="text-xl font-semibold text-white mb-2">{dict.services.engineering}</h3>
                        <p className="text-gray-300">Инженерни решения</p>
                    </div>
                </div>
            </div>
        </div>
    )
}