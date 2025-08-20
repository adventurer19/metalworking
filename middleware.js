// middleware.js (в корена, НЕ в src!)
import { NextResponse } from 'next/server'

let locales = ['bg', 'en']

function getLocale(request) {
    return 'bg'
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}