import { getDictionary } from '../dictionaries'

export default async function ServicesPage({ params }) {
    const dict = await getDictionary(params.locale)

    const services = [
        {
            icon: '🔧',
            title: params.locale === 'bg' ? 'CNC Обработка' : 'CNC Machining',
            description: params.locale === 'bg'
                ? 'Прецизна CNC обработка на метални детайли с точност до 0.01мм. Работим с различни материали - стомана, алуминий, месинг.'
                : 'Precision CNC machining of metal parts with accuracy up to 0.01mm. We work with various materials - steel, aluminum, brass.',
            features: params.locale === 'bg'
                ? ['3-осна и 5-осна обработка', 'Серийно производство', 'Единични бройки']
                : ['3-axis and 5-axis machining', 'Serial production', 'Single pieces']
        },
        {
            icon: '✂️',
            title: params.locale === 'bg' ? 'Лазерно рязане' : 'Laser Cutting',
            description: params.locale === 'bg'
                ? 'Високоточно лазерно рязане на листов материал. Дебелина до 20мм за стомана и 15мм за неръждаема стомана.'
                : 'High-precision laser cutting of sheet material. Thickness up to 20mm for steel and 15mm for stainless steel.',
            features: params.locale === 'bg'
                ? ['Сложни контури', 'Минимална топлинна деформация', 'Чисти ръбове']
                : ['Complex contours', 'Minimal heat deformation', 'Clean edges']
        },
        {
            icon: '🔥',
            title: params.locale === 'bg' ? 'Заваряване' : 'Welding',
            description: params.locale === 'bg'
                ? 'Професионално MIG/MAG и TIG заваряване. Сертифицирани заварчици с опит в различни индустрии.'
                : 'Professional MIG/MAG and TIG welding. Certified welders with experience in various industries.',
            features: params.locale === 'bg'
                ? ['MIG/MAG заваряване', 'TIG заваряване', 'Заваряване на алуминий']
                : ['MIG/MAG welding', 'TIG welding', 'Aluminum welding']
        },
        {
            icon: '📐',
            title: params.locale === 'bg' ? 'Огъване на ламарина' : 'Sheet Metal Bending',
            description: params.locale === 'bg'
                ? 'Прецизно огъване на ламарина с CNC абкант преса. Максимална дължина 3000мм.'
                : 'Precision sheet metal bending with CNC press brake. Maximum length 3000mm.',
            features: params.locale === 'bg'
                ? ['CNC управление', 'Сложни профили', 'Повторяемост']
                : ['CNC control', 'Complex profiles', 'Repeatability']
        },
        {
            icon: '🎨',
            title: params.locale === 'bg' ? 'Прахово боядисване' : 'Powder Coating',
            description: params.locale === 'bg'
                ? 'Висококачествено прахово боядисване с дълготрайна защита. Богата палитра от цветове по RAL.'
                : 'High-quality powder coating with long-lasting protection. Rich palette of RAL colors.',
            features: params.locale === 'bg'
                ? ['RAL цветове', 'UV устойчивост', 'Антикорозионна защита']
                : ['RAL colors', 'UV resistance', 'Anti-corrosion protection']
        },
        {
            icon: '⚙️',
            title: params.locale === 'bg' ? 'Инженерингови услуги' : 'Engineering Services',
            description: params.locale === 'bg'
                ? 'Проектиране и разработка на метални конструкции. 3D моделиране и техническа документация.'
                : 'Design and development of metal structures. 3D modeling and technical documentation.',
            features: params.locale === 'bg'
                ? ['3D проектиране', 'Прототипиране', 'Техническа документация']
                : ['3D design', 'Prototyping', 'Technical documentation']
        }
    ]

    return (
        <div className="min-h-screen pt-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {dict.navigation.services}
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-300 mb-4">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="text-gray-400 flex items-center">
                                        <span className="text-blue-400 mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}