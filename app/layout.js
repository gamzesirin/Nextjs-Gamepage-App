import './globals.css'

import { Poppins } from 'next/font/google'

// Poppins fontunu 400 ve 700 ağırlıkları ile yükleyin
const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin']
})

export const metadata = {
	title: 'VenatorUniverse'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	)
}
