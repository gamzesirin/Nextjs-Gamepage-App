import Image from 'next/image'
import React from 'react'
import styles from './Collections.module.css'

const Collections = () => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1 className={styles.title}>Top Collection</h1>
				<div className={styles.cards}>
					<div className={styles.card}>
						<Image src="/image/card1.svg" width={327} height={468} alt="card" />
					</div>

					<div className={styles.card}>
						<Image src="/image/card2.svg" width={327} height={468} alt="card" />
					</div>
					<div className={styles.card}>
						<Image src="/image/card3.svg" width={327} height={468} alt="card" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Collections
