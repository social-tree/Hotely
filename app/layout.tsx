import { Montserrat, Gothic_A1 } from 'next/font/google'
import './globals.css'
import { PropsWithChildren } from 'react'
import { Metadata } from 'next'

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000'

export const metadata: Metadata = {
	metadataBase: new URL(defaultUrl),
	title: {
		template: 'Hotely - %s',
		default: 'Hotely'
	},
	description:
		'Discover and explore the best hotels around the world with Hotely. View detailed information, compare amenities, and find the perfect stay for your next trip.'
}

const montserrat = Montserrat({ subsets: ['latin'] })
const gothic_A1 = Gothic_A1({
	weight: ['700', '600', '500', '400'],
	subsets: ['latin']
})

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			lang='en'
			className={`${montserrat.className} ${gothic_A1.className}`}
		>
			<body>
				<main>{children}</main>
			</body>
		</html>
	)
}
