import { NextResponse, userAgent } from 'next/server';

export function middleware(request) {
	const { device } = userAgent(request);
	if (device.type === 'mobile' && !request.nextUrl.pathname.startsWith('/mobile')) {
		return NextResponse.redirect(new URL('/mobile', request.url));
	}
	if (device.type != 'mobile' && request.nextUrl.pathname.startsWith('/mobile')) {
		return NextResponse.redirect(new URL('/', request.url));
	}
	if (process.env.NODE_ENV === "production")
	{
		return NextResponse.redirect(new URL('/under_construction', request.url));
	}
	return NextResponse.next();
}

export const config = {
  matcher: ["/", "/projects/:path*", "/about", "/mobile", "/under_construction"]
}