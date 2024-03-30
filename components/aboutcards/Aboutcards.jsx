import Image from 'next/image'
import React from 'react'
import styles from './Aboutcards.module.css'

const Aboutcards = () => {
	return (
		<div>
			<div className={styles.titlediv}>
				<h1 className={styles.title}>Strongest Team</h1>
			</div>
			<div className={styles.carts}>
				<div className={styles.cart}>
					<div className={`${styles.incart} ${styles.border1}`}>
						<Image src="/image/about/about7.svg" alt="1" width={180} height={180} className={styles.images} />
						<h2>CEO</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Odio et tristique eget scelerisque eget donec faucibus risus eget.{' '}
						</p>
					</div>
					<div className={`${styles.incart} ${styles.border2}`}>
						<Image src="/image/about/about6.svg" alt="1" width={180} height={180} className={styles.images} />
						<h2>CTO</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Odio et tristique eget scelerisque eget donec faucibus risus eget.{' '}
						</p>
					</div>
					<div className={`${styles.incart} ${styles.border3}`}>
						<Image src="/image/about/about5.svg" alt="1" width={180} height={180} className={styles.images} />
						<h2>DEVELOPER</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Odio et tristique eget scelerisque eget donec faucibus risus eget.{' '}
						</p>
					</div>
					<div className={`${styles.incart} ${styles.border4}`}>
						<Image src="/image/about/about4.svg" alt="1" width={180} height={180} className={styles.images} />
						<h2>MARKETING</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Odio et tristique eget scelerisque eget donec faucibus risus eget.{' '}
						</p>
					</div>
				</div>
				<div className={styles.cart}>
					<div className={`${styles.incart} ${styles.border1}`}>
						<Image src="/image/about/about3.svg" alt="1" width={180} height={180} className={styles.images} />
						<h2>ART DİRECTOR</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Odio et tristique eget scelerisque eget donec faucibus risus eget.{' '}
						</p>
					</div>
					<div className={`${styles.incart} ${styles.border2}`}>
						<Image src="/image/about/about2.svg" alt="1" width={180} height={180} className={styles.images} />
						<h2>BLOCKCHAIN EXPERT</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Odio et tristique eget scelerisque eget donec faucibus risus eget.{' '}
						</p>
					</div>
					<div className={`${styles.incart} ${styles.border3}`}>
						<Image src="/image/about/about1.svg" alt="1" width={180} height={180} className={styles.images} />
						<h2>CRYPTO ADVISOT</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Odio et tristique eget scelerisque eget donec faucibus risus eget.{' '}
						</p>
					</div>
					<div className={`${styles.incart} ${styles.border4}`}>
						<Image src="/image/about/about.svg" alt="1" width={180} height={180} className={styles.images} />
						<h2>DESIGN</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Odio et tristique eget scelerisque eget donec faucibus risus eget.{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Aboutcards
