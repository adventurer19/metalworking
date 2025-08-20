import { getDictionary } from '../dictionaries'

export default async function GalleryPage({ params }) {
    const dict = await getDictionary(params.locale)

    const categories = [
        {
            name: params.locale === 'bg' ? 'Готови детайли' : 'Finished Parts',
            images: ['🔩', '⚙️', '🔧', '⚡']
        },
        {
            name: params.locale === 'bg' ? 'Производствен процес' : 'Production Process',
            images: ['🏭', '🔨', '⚒️', '🛠️']
        },
        {
            name: params.locale === 'bg' ? 'Оборудване' : 'Equipment',
            images: ['🖥️', '🎛️', '📊', '💻']
        },
        {
            name: params.locale === 'bg' ? 'Проекти' : 'Projects',
            images: ['📐', '📏', '✏️', '📋']
        }
    ]

    return (
        <div className="min-h-screen pt-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {dict.navigation.gallery}
                </h1>

                {categories.map((category, catIndex) => (
                    <div key={catIndex} className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">{category.name}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {category.images.map((image, imgIndex) => (
                                <div key={imgIndex} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition cursor-pointer group">
                                    <div className="text-6xl text-center group-hover:scale-110 transition">{image}</div>
                                    <p className="text-gray-400 text-center mt-4">
                                        {params.locale === 'bg' ? `Изображение ${imgIndex + 1}` : `Image ${imgIndex + 1}`}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">
                        {params.locale === 'bg'
                            ? 'Това са примерни икони. Замени ги с реални снимки на твоите проекти.'
                            : 'These are sample icons. Replace them with real photos of your projects.'}
                    </p>
                </div>
            </div>
        </div>
    )
}