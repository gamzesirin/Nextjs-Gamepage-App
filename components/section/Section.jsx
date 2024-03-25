import Image from 'next/image'
import React from 'react'
import styles from './Section.module.css'

const Section = () => {
	return (
		<div className={styles.home}>
			<div className={styles.main}>
				<h1>
					Step into our universe and start <br /> winning immediately
				</h1>
				<h1 className={styles.titleh2}>PLAY NOW</h1>
				<p className={styles.paragraf}>
					We will provide you with a test code <br /> for our game currently in the beta <br /> stage and strive to{' '}
					<br /> grant you access to the content as much as possible. <br /> Please report any errors and provide <br />{' '}
					feedback. Now, enjoy your gaming <br />
					experience!
				</p>
				<div className={styles.butons}>
					<button>TICKET</button>
				</div>
			</div>
			<Image src="/image/Robot.svg" alt="Background" width={800} height={600} className={styles.image} />
		</div>
	)
}

export default Section
