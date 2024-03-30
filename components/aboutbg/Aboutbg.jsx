import Image from 'next/image'
import React from 'react'
import styles from './Aboutbg.module.css'

const Aboutbg = () => {
	return (
		<div className={styles.imagediv}>
			<Image
				src="/image/about/aboutbg.svg"
				alt="card"
				style={{ objectFit: 'cover' }}
				sizes="(max-width: 1024px) 100vw, 33vw"
				width={1000}
				height={200}
				className={styles.bgimage}
			/>
		</div>
	)
}

export default Aboutbg
