import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Main.module.css'

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.main}>
				<button className={styles.discordbtn}>
					<Image src="/image/discord.svg" alt="Discord" width={25} height={25} />
					<Link href="https://discord.gg/AHmZmtNy">JOIN US DISCORD</Link>
				</button>
				<button className={styles.roadbtn}>ROAD MAP</button>
				<h1>
					REAL GAINS FROM <br /> VIRTUAL VALUE
				</h1>
				<h2 className={styles.titleh2}>NFTs Collection</h2>
				<p className={styles.paragraf}>
					Showcase the in-game items you <br /> create on the marketplace and earn <br />
					profits. Join us as an NFT collection <br /> creator.
				</p>
				<div className={styles.butons}>
					<button>EXPLORE</button>
					<button>CREATE</button>
				</div>
			</div>
			<Image src="/image/homebg.svg" alt="Background" width={1000} height={600} className={styles.image} />
		</div>
	)
}

export default Home
