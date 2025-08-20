import { getDictionary } from '../dictionaries'

export default async function ProductsPage({ params }) {
    const dict = await getDictionary(params.locale)

    const products = [
        {
            category: params.locale === 'bg' ? 'Металорежещи инструменти' : 'Cutting Tools',
            items: [
                params.locale === 'bg' ? 'Фрези' : 'Milling cutters',
                params.locale === 'bg' ? 'Свредла' : 'Drills',
                params.locale === 'bg' ? 'Метчици' : 'Taps',
                params.locale === 'bg' ? 'Райбери' : 'Reamers'
            ]
        },
        {
            category: params.locale === 'bg' ? 'Готови изделия' : 'Finished Products',
            items: [
                params.locale === 'bg' ? 'Метални конструкции' : 'Metal structures',
                params.locale === 'bg' ? 'Машинни части' : 'Machine parts',
                params.locale === 'bg' ? 'Прототипи' : 'Prototypes',
                params.locale === 'bg' ? 'Серийни детайли' : 'Serial parts'
            ]
        },
        {
            category: params.locale === 'bg' ? 'Специални поръчки' : 'Custom Orders',
            items: [
                params.locale === 'bg' ? 'Нестандартни решения' : 'Non-standard solutions',
                params.locale === 'bg' ? 'Единични изделия' : 'Single products',
                params.locale === 'bg' ? 'Малки серии' : 'Small series',
                params.locale === 'bg' ? 'Ремонтни части' : 'Repair parts'
            ]
        }
    ]

    return (
        <div className="min-h-screen pt-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {dict.navigation.products}
                </h1>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {products.map((product, index) => (
                        <div key={index} className="bg-slate-800 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-3">
                                {product.category}
                            </h2>
                            <ul className="space-y-3">
                                {product.items.map((item, idx) => (
                                    <li key={idx} className="text-gray-300 hover:text-blue-400 transition cursor-pointer flex items-center">
                                        <span className="text-blue-400 mr-3">▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {params.locale === 'bg' ? 'Нуждаете се от специално решение?' : 'Need a custom solution?'}
                    </h2>
                    <p className="text-white/90 mb-6 text-lg">
                        {params.locale === 'bg'
                            ? 'Свържете се с нас за индивидуална консултация и оферта'
                            : 'Contact us for individual consultation and quote'}
                    </p>
                    <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
                        {params.locale === 'bg' ? 'Получи оферта' : 'Get a quote'}
                    </button>
                </div>
            </div>
        </div>
    )
}