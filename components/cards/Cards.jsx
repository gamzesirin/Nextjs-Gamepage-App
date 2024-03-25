import Image from 'next/image'
import React from 'react'
import styles from './Cards.module.css'

const Cards = () => {
	return (
		<div className={styles.cards}>
			<div className={styles.titles}>
				<h4 className={styles.title}>Auctions</h4>
				<h2>Live Auctions</h2>
			</div>
			<div className={styles.cards0}>
				<div className={styles.cards1}>
					<div>
						<Image src="/image/Rectangle7.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle10.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle9.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle8.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle11.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle14.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle13.png" width={168} height={168} alt="card" />
					</div>
				</div>
				<div className={styles.cards2}>
					<div>
						<Image src="/image/Rectangle15.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle5.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle4.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle6.png" width={168} height={168} alt="card" />
					</div>
					<div>
						<Image src="/image/Rectangle12.png" width={168} height={168} alt="card" />
					</div>
					<button className={styles.button}>EXPLORE MORE</button>
				</div>
			</div>
		</div>
	)
}

export default Cards
