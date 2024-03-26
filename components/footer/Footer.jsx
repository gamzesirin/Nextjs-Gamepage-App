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
							<li>
								{' '}
								<a href="#">Explore</a>{' '}
							</li>
							<li>
								{' '}
								<a href="#">Job</a>
							</li>
							<li>
								{' '}
								<a href="#">Help Center</a>
							</li>
						</ul>
					</div>
					<div className={styles.f1}>
						<h2>Game Engine</h2>
						<ul className={styles.ul}>
							<li>
								{' '}
								<a href="#">Unreal Engine 5</a>
							</li>
						</ul>
					</div>
					<div className={styles.f1}>
						<h2>Product</h2>
						<ul className={styles.ul}>
							<li>
								{' '}
								<a href="#"> About Us</a>
							</li>
							<li>
								{' '}
								<a href="#">Whitepaper</a>
							</li>
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
						<h3>
							Copyright © 2023 Venator Games - Powered by{' '}
							<u>
								<a href="/">VENATOR GAMES</a>
							</u>
						</h3>
					</div>
					<div>
						<ul className={styles.ikons}>
							<li>
								<a href="#">
									{' '}
									<Image src="/image/twitter.svg" alt="ikon" width={24} height={24} />
								</a>
							</li>
							<li>
								<a href="#">
									{' '}
									<Image src="/image/telegram.svg" alt="ikon" width={24} height={24} />
								</a>
							</li>
							<li>
								<a href="#">
									{' '}
									<Image src="/image/youtube.svg" alt="ikon" width={24} height={24} />
								</a>
							</li>
							<li>
								<a href="#">
									{' '}
									<Image src="/image/instagram.svg" alt="ikon" width={24} height={24} />
								</a>
							</li>
							<li>
								<a href="#">
									{' '}
									<Image src="/image/discord.svg" alt="ikon" width={24} height={24} />
								</a>
							</li>
							<li>
								<a href="#">
									{' '}
									<Image src="/image/linkedin.svg" alt="ikon" width={24} height={24} />
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.ikons}>
						<Image src="/image/footerikon.svg" alt="ikon" width={44} height={44} className={styles.ikons} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
3
