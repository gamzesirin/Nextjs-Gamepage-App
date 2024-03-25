import Cards from '@/components/cards/Cards'
import Collections from '@/components/collections/Collections'
import Footer from '@/components/footer/Footer'
import Main from '@/components/main/Main'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Section from '@/components/section/Section'

export default function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<Main />
			<Cards />
			<Section />
			<Collections />
			<Footer />
		</React.Fragment>
	)
}
