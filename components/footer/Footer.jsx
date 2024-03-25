import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.containers}>
			<div className={styles.container}>
				<div className={styles.footer}>
					<div className={styles.f1}>
						<h2>Marketplace</h2>
						<ul className={styles.ul}>
							<li>Explore</li>
							<li>Job</li>
							<li>Help Center</li>
						</ul>
					</div>
					<div className={styles.f1}>
						<h2>Game Engine</h2>
						<ul className={styles.ul}>
							<li>Unreal Engine 5</li>
						</ul>
					</div>
					<div className={styles.f1}>
						<h2>Product</h2>
						<ul className={styles.ul}>
							<li>About Us</li>
							<li>Whitepaper</li>
						</ul>
					</div>
					<div className={styles.f1}>
						<p>
							Subscribe to our newsletter to receive <br /> early discount offers and updates.
						</p>
						<div className={styles.toolbar}>
							<input type="text" placeholder="Your e-mail" className={styles.searchInput} color="white" />
							<Image src="/image/ok.svg" alt="Search" width={24} height={24} className={styles.fot} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.footer2}>
					<div>
						<h3>Copyright © 2023 Venator Games - Powered by VENATOR GAMES</h3>
					</div>
					<div className={styles.ikons}>
						<div>
							<Image src="/image/twitter.svg" alt="ikon" width={24} height={24} />
						</div>
						<div>
							<Image src="/image/telegram.svg" alt="ikon" width={24} height={24} />
						</div>
						<div>
							<Image src="/image/youtube.svg" alt="ikon" width={24} height={24} />
						</div>
						<div>
							<Image src="/image/instagram.svg" alt="ikon" width={24} height={24} />
						</div>
						<div>
							<Image src="/image/discord.svg" alt="ikon" width={24} height={24} />
						</div>
						<div>
							<Image src="/image/linkedin.svg" alt="ikon" width={24} height={24} />
						</div>
					</div>
					<div>
						<Image src="/image/footerikon.svg" alt="ikon" width={54} height={54} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
3
