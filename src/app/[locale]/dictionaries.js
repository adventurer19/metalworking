// src/app/[locale]/dictionaries.js
const dictionaries = {
    bg: () => import('@/dictionaries/bg.json').then((module) => module.default),
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
    return dictionaries[locale]() || dictionaries['bg']()
}